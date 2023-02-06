# JavaScript Event Listeners

## Table Of Contents
- [Introduction to Event Listeners](#Introduction-to-Event-Listeners)
- [Further Reading]()
    - [w3 Schools - DOM Event Handlers](https://www.w3schools.com/js/js_htmldom_eventlistener.asp)

# Introduction to Event Listeners
* __Event listeners__ are _methods that executes on some specific events which are triggers by the users on the DOM_. Clicking somewhere, hovering on something, submitting forms and so on. Such Events are called event listeners.

# The addEventListener() method
* The __addEventListener()__ method attaches an event handler to the specified element.

* The __addEventListener()__ method attaches an event handler to an element without overwriting existing event handlers.

* _Remarks_:
    * _You can add many event handlers to one element_.
    * _You can add many event handlers of the same type to one element, i.e two "click" events._
    * _You can add event listeners to any DOM object not only HTML elements. i.e the window object._
    * _The __addEventListener()__ method makes it easier to control how the event reacts to bubbling._
    * _When using the __addEventListener()__ method, the JavaScript is separated from the HTML markup, for better readability and allows you to add event listeners even when you do not control the HTML markup._

* You can easily remove an event listener by using the __removeEventListener()__ method.

# Syntax
```js
    element.addEventListener(event, funtion, useCapture);
```

* The first parameter is the type of the event (like "__click__" or "__mousedown__" or any other [HTML DOM Event](https://www.w3schools.com/jsref/dom_obj_event.asp).)

* The second parameter is the function we want to call when the event occurs.

* The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

# Event Bubbling or Event Capturing?
* There are two ways of event propagation in the HTML DOM, __bubbling__ and __capturing__.

* __Event propagation__ is a way of defining the element order when an event occurs. If you have a < p > element inside a < div > element, and the user clicks on the < p > element, which element's "click" event should be handled first?

* In __bubbling__ the inner most element's event is handled first and then the outer: the < p > element's click event is handled first, then the < div > element's click event.

* In __capturing__ the outer most element's event is handled first and then the inner: the < div > element's click event will be handled first, then the < p > element's click event.

* With the __addEventListener()__ method you can specify the propagation type by using the "__useCapture__" parameter: The default value is false, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.

# The removeEventListener() method
* The __removeEventListener()__ method removes event handlers that have been attached with the )__addEventListener()__ method:
# Types Of Events
1. __Click__: The onclick event occurs when the user clicks on an element.
    ```html
        <button onclick="hello()"> Click Me </button>
    ```
2. __Right-Click__: Use the o__ncontextmenu__ Event to Enable JavaScript Right-Click event, The oncontextmenu event will enable the creation of the `div` element dynamically every time the right click is ensured.
    ```html
        <button oncontextmenu="hello()"> Click Me </button>
    ```

3. __Double-Click__:  The event fires when an element is clicked twice in a very short span of time. In HTML, we can use the __ondblclick__ attribute to create a double click event.
    ```html
        <button ondblclick="hello()"> Click Me </button>
        <script>
            function hello() {
                alert("Clicked");
            }
            hello();
        </script>
    ```
4. Mouse Out
5. __Mouse Enter__: This event is often used together with the __onmouseout__ event, which occurs when a user moves the mouse pointer out of an element.
    ```html
        <button onmouseenter="hello()"> Click Me </button>

        <script>
            function hello() {
                document.write("Hello, I am an event");
            };
        </script>
    ```
6. Mouse Down
7. Mouse Up
8. Key press
9. Key up
10. Unload
11. Scroll
12. Load
13. Resize