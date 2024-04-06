// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
//let nextId = JSON.parse(localStorage.getItem("nextId"));

const taskInput = $('#task-input');
const dueDateInput = $('#due-date-input');
const descriptionInput = $('#description-input');
const saveTaskBtn = $('#save-changes');
const cardBody = $('.card-body');

// Todo: create a function to generate a unique task id
function generateTaskId() {
  return (`task-${Math.floor(Math.random() * 101)}`);
}
//----------------------------------------------------------------

// Todo: create a function to handle adding a new task
//Takes user generated content from the form and saves to localStorage when the save changes button is clicked
function handleAddTask() {
    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

    const formContent = {
        taskID: generateTaskId(),
        taskInput: $('#task-input').val(),
        dueDateInput: $('#datepicker').val(),
        descriptionInput: $('#description-input').val()
    }

    taskList.push(formContent);
    localStorage.setItem('tasks', JSON.stringify(taskList));
}


//-----------------------------------------------------------------


// Todo: create a function to create a task card
function createTaskCard(task) {  
    const taskCard = $('<div>');
    taskCard.css({'border': 'solid black', 'margin': '10px',});

  
    taskCard.append($('<p>').text('Task: ' + task.taskInput));
    taskCard.append($('<p>').text('Due Date: ' + task.dueDateInput));
    taskCard.append($('<p>').text('Description: ' + task.descriptionInput));
    taskCard.append('<button class="btn btn-danger btn-small delete-item-btn" data-task-id="' + task.taskID + '">Remove</button>'); //Add data-task-id attribute
  

    //due dates
    const currentDate = dayjs();
    const dueDate = dayjs(task.dueDateInput);
    const dayDifference = dueDate.diff(currentDate, 'day');

    // Set border color based on deadline status
    if (dayDifference < 0) {
        taskCard.css('border-color', 'red'); // Past due
    } else if (dayDifference >= 2) {
        taskCard.css('border-color', 'green'); // Due within 3 days
    } else {
        taskCard.css('border-color', 'yellow'); // More than 3 days from due date
    }

    return taskCard;
    
  }

//-----------------------------------------------------------------

// Todo: create a function to render the task list and make cards draggable
function renderTaskList() {
    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];
    const todoCards = $('#todo-cards');
  
    taskList.forEach(function(task) {
      const card = createTaskCard(task).addClass('task ui-widget-content draggable');
      todoCards.append(card);  

      $('.draggable').draggable({   // https://api.jqueryui.com/draggable/
        revert: true               // Revert card to its original position if not dropped on a droppable area
      });
      
    });
}


//-------------------------------------------------------------------

// Todo: create a function to handle deleting a task
//deletes task from page and localStorage when the delete button is clicked
function handleDeleteTask(event) {
  $(this).parent("div").remove();
  let taskId = $(this).data('task-id');
  let taskList = JSON.parse(localStorage.getItem('tasks')) || [];
  taskList = taskList.filter(task => task.taskID !== taskId);
  localStorage.setItem('tasks', JSON.stringify(taskList));
}

//-------------------------------------------------------------------

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {
  $('.droppable').droppable({
    accept: '.draggable' // Only accept elements with the draggable class
  });
}
//-------------------------------------------------------------------

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {
  $( "#datepicker" ).datepicker(); // Make the due date field a date picker
  $('#save-changes').on('click', handleAddTask); // Saves tasks
  cardBody.on("click", ".delete-item-btn", handleDeleteTask);  //deletes tasks
  renderTaskList();
});

