// Retrieve tasks and nextId from localStorage
let taskList = JSON.parse(localStorage.getItem("tasks"));
let nextId = JSON.parse(localStorage.getItem("nextId"));

const taskInput = $('#task-input');
const dueDateInput = $('#due-date-input');
const descriptionInput = $('#description-input');
const saveTaskBtn = $('#save-changes');

//Saves to localStorage ----------------------------------------------
function submitTask() {
    let taskList = JSON.parse(localStorage.getItem("tasks")) || [];

    const formContent = {
        taskInput: $('#task-input').val(),
        dueDateInput: $('#due-date-input').val(),
        descriptionInput: $('#description-input').val()
    }

    taskList.push(formContent);

    localStorage.setItem('tasks', JSON.stringify(taskList));
}
//-----------------------------------------------------------------

// Todo: create a function to handle adding a new task
function handleAddTask(event){ 
    submitTask();
}
  
$('#save-changes').on('click', handleAddTask);
//-----------------------------------------------------------------

// Todo: create a function to generate a unique task id
function generateTaskId() {

}
//----------------------------------------------------------------

// Todo: create a function to create a task card
function createTaskCard(task) {  
    const taskCard = $('<div>');
    taskCard.css({'border': 'solid black', 'margin': '10px',});

  
    taskCard.append($('<p>').text('Task: ' + task.taskInput));
    taskCard.append($('<p>').text('Due Date: ' + task.dueDateInput));
    taskCard.append($('<p>').text('Description: ' + task.descriptionInput));
    taskCard.append('<button class="btn btn-danger btn-small delete-item-btn">Remove</button>');
  
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

renderTaskList();
//-------------------------------------------------------------------

// Todo: create a function to handle deleting a task
function handleDeleteTask(event){

}

// Todo: create a function to handle dropping a task into a new status lane
function handleDrop(event, ui) {

}

// Todo: when the page loads, render the task list, add event listeners, make lanes droppable, and make the due date field a date picker
$(document).ready(function () {

});