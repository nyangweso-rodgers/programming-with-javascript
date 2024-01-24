// In the example below we have created a function that will be executed when a "scream" event is fired.

// To fire an event, use the emit() method.

var events = require('events');

var eventEmitter = new events.EventEmitter();

// create an event handler
var myEventHandler = function () {
    console.log('I hear a scream');
}

//Assign the event handler to an event:
eventEmitter.on('scream', myEventHandler);

//Fire the 'scream' event:
eventEmitter.emit('scream');