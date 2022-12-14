# JavaScript Event Listeners

## Table Of Contents
- [Introduction to Event Listeners](#Introduction-to-Event-Listeners)

# Introduction to Event Listeners
* __Event listeners__ are _methods that executes on some specific events which are triggers by the users on the DOM_. Clicking somewhere, hovering on something, submitting forms and so on. Such Events are called event listeners. The syntax of event handler method is:

    ```js
        div.addEventListener("click", () => {
            console.log("Event is Fired);
        });
    ```