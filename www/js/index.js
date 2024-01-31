
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}

function addTask() {
    var task = prompt("Por favor, introduce tu tarea");
    if (task != null) {
        var newTaskItem = $('<li data-icon="false"><div class="list-item-container"><span class="taskText">' + task + '</span><div><button class="editButton">Edit</button><button class="deleteButton">X</button></div></div></li>');
        $('ul[data-role="listview"]').append(newTaskItem).listview('refresh');

        newTaskItem.find('.editButton').click(editTask);
        newTaskItem.find('.deleteButton').click(deleteTask);
        saveTasks();
        // Save task in localStorage

    }
}

function editTask() {
    var taskItem = $(this).closest('li');
    var taskText = taskItem.find('.taskText').text();
    taskItem.find('.taskText').html('<input type="text" class="editInput" value="' + taskText + '"><button class="confirmEditButton">OK</button>');

    taskItem.find('.confirmEditButton').click(function () {
        var newTask = taskItem.find('.editInput').val();
        if (newTask != null) {
            taskItem.find('.taskText').text(newTask);
            saveTasks();
        }
    });
}

function deleteTask() {
    $(this).closest('li').remove();
    saveTasks();
}

function saveTasks() {
    // Extract task text from each list item and store them in an array
    var tasks = $('ul[data-role="listview"] li .taskText').map(function () {
        return $(this).text();
    }).get();

    // Save the tasks array to localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function restoreTasks() {
    var tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    // Create list items for each task and append them to the task list
    for (var i = 0; i < tasks.length; i++) {
        var newTaskItem = $('<li data-icon="false"><div class="list-item-container"><span class="taskText">' + tasks[i] + '</span><div><button class="editButton">Edit</button><button class="deleteButton">X</button></div></div></li>');
        $('ul[data-role="listview"]').append(newTaskItem).listview('refresh');

        newTaskItem.find('.editButton').click(editTask);
        newTaskItem.find('.deleteButton').click(deleteTask);
    }
}

$(document).ready(function () {
    // initialize
    restoreTasks();
    $('#buttonAddtask').click(addTask);
});

