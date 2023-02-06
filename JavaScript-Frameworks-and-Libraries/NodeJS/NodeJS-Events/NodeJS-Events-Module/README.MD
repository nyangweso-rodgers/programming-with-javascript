# Events Module

* __Node.js__ has a built-in module, called "__Events__", where you can _create_-, _fire_-, and _listen_ for- your own events.

* To include the built-in __Events__ module use the __require()__ method. In addition, all event properties and methods are an instance of an __EventEmitter__ object. To be able to access these properties and methods, create an __EventEmitter__ object:

    ```js
        var events = require('events');
        var eventEmitter = new events.EventEmitter();
    ```

# The EventEmitter Object
* You can assign event handlers to your own events with the EventEmitter object.