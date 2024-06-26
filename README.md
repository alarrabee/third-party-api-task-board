Boot Camp Module 5 Challenge

## Description
This is the week 5 Module Challenge for the U of M Coding Bootcamp. This Challenge required the modification of starter code to create a Kanban board for task management.

## Third Party APIs: Task Board
This application is a simple task board application that allows a team to manage project tasks by modifying starter code. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

### User Story
```md
AS A project team member with multiple tasks to organize
I WANT a task board 
SO THAT I can add individual project tasks, manage their state of progress and track overall project progress accordingly
```

### Acceptance Criteria
```md
GIVEN a task board to manage a project
WHEN I open the task board
THEN the list of project tasks is displayed in columns representing the task progress state (Not Yet Started, In Progress, Completed)
WHEN I view the task board for the project
THEN each task is color coded to indicate whether it is nearing the deadline (yellow) or is overdue (red)
WHEN I click on the button to define a new task
THEN I can enter the title, description and deadline date for the new task into a modal dialog
WHEN I click the save button for that task
THEN the properties for that task are saved in localStorage
WHEN I drag a task to a different progress column
THEN the task's progress state is updated accordingly and will stay in the new column after refreshing
WHEN I click the delete button for a task
THEN the task is removed from the task board and will not be added back after refreshing
WHEN I refresh the page
THEN the saved tasks persist
```

## Website
(https://alarrabee.github.io/third-party-api-task-board/)

## Page Functionality

### Clicking the Add Task button opens a pop up where the user can input task details
![image](https://github.com/alarrabee/third-party-api-task-board/assets/149320486/a3fb87b1-0b2d-4cea-a920-c3a75ba882fa)


### Added tasks are displayed on the page and color coded to indicate the deadline status
![image](https://github.com/alarrabee/third-party-api-task-board/assets/149320486/be4b61c5-12a6-4ea8-9cff-b2bad9e4e740)


## Improvements and Next Steps
Add the ability to successfully drag and drop each task into the In Progress and Done columns. Currently the tasks are stuck in the To Do column. Update the unique task id generator to avoid generating duplicate task ids. Style the task cards to be more polished and professional. 

## Acknowledgments
Guidance provided U of M Coding Bootcamp TA (Steven Castro-Mercado).
