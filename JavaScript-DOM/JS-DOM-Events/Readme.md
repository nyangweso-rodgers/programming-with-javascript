# JS DOM Events

## Table Of Contents

# JS DOM Events 
1. click()
2. mouseDown()
3. mouseover() 


# Event Listeners
* __Event Listeners__ are methods that executes on some specific events which are triggers by the users on the DOM.
* The `js` `addEventListener()` method allows for a setup of functions to be called when a specified event happens.

# Event Listeners Sytax
```js
    target.addEventListener(event, function, useCapture);
```
* where:
  * __target__ - `html` element you wish to add your event handler to.
  * __event__: a string that specifies the name of the event
  * __function__: specifies the function to run when the event is detected.
  * __useCapture__: an optional Boolean value (true or false) that specifies whether the event should be executed in the __capturing__ or __bubbling__ phase.

# Removing Event Handlers
```js
    target.removeEventListener(event, function, useCapture);
```

# Event Bubbling or Event Capturing?
* __Event propagation__ is a way of defining the element order when an event occurs. If you have a `p` element inside a `div` element, and the user clicks on the `p` element, which element's "click" event should be handled first?

  ```html
      <div>
        <p></p>
      </div>
  ```
* In __bubbling__ the inner most element's event is handled first and then the outer: the `p` element's click event is handled first, then the `div` element's click event.
* In __capturing__ the outer most element's event is handled first and then the inner: the `div` element's click event will be handled first, then the `p` element's click event.
* With the `addEventListener()` method you can specify the propagation type by using the `useCapture` parameter: The default value is `false`, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.

# Types of Events
# Type Of Event 1: `onclick`
* `onclick` event occurs when the user clicks on an element.

  ```html
      <button onclick="hello()"> Click Me </button>
  ```

# Types of Event 2: `oncontextmenu`
* use the `oncontextmenu` event to enable JS __Right-Click__ event.

  ```html
        <button oncontextmenu="hello()"> Click Me </button>
  ```

# Types of Event 3: `ondblclick`
* use the `ondblclick` attribute to create a __double-click__ event.

   ```html
        <button ondblclick="hello()"> Click Me </button>
        <script>
            function hello() {
                alert("Clicked");
            }
            hello();
        </script>
    ```

# Types of Event 4: `onmouseout`
* `onmouseout` attribute to create __Mouse Out__ events.

  ```html
        <button onmouseenter="hello()"> Click Me </button>

        <script>
            function hello() {
                document.write("Hello, I am an event");
            };
        </script>
    ```

# Type of Events 5: Mouse Out
# Type of Events 6: Mouse Down
# Type of Events 7: Mouse Up
# Type of Events 8: Key Press
# Type Of Events 9: Key Up
# Type Of Events 10: Unload
# Type Of Events 11: Scroll
# Type Of Events 12: Load
# Type of Events 13: Resize