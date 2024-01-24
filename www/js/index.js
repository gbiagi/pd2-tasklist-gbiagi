
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
        }
    });
}

function deleteTask() {
    $(this).closest('li').remove();
}

$(document).ready(function () {
    // initialize
    $('#buttonAddtask').click(addTask);
});

