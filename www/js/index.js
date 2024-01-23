
// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
}

function addTask() {
    let task = prompt("Introduce tu tarea");
    if (task != null) {
        $('ul[data-role="listview"]').append('<li>' + task + '</li>').listview('refresh');
    }
}
$(document).ready(function () {
    // initialize
    $('#buttonAddtask').click(addTask);
});

