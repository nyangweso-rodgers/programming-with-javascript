# JavaScript DOM Events

## Table Of Contents

# Overview of DOM

- **Document Object Model** (DOM) is an interface that enables manipulation of the content, structure and style of a web page.

# DOM Methods vs. DOM Properties

- **DOM methods** are functions provided by the **DOM API** that allow you to interact with and manipulate elements in the **DOM**. i.e., manipulate content, style, or behavior.
- These methods are typically called using the `dot` notation on specific DOM elements or the document object. E,g.,

  1. `document.getElementById()`
  2. `document.createElement()`
  3. `document.appendChild()`
  4. e.t.c.,

- **DOM Properties** represent attributes or characteristics of DOM elements. Examples include:
  1. `textContent` - represents text with an element
  2. `innerHTML` - represents the `HTML` content within an element
  3. `id` - represents the unique identifier of an element
  4. `className` - represents the css classes applied to the element

# Event Listeners

- **Event Listeners** are methods that executes on some specific events which are triggers by the users on the **DOM**.
- The JavaScript `addEventListener()` method allows for a setup of functions to be called when a specified event happens.

# Event Listeners Sytax

```js
    target.addEventListener(event, function, useCapture);
```

- where:
  - **target** - `html` element you wish to add your event handler to.
  - **event**: a string that specifies the name of the event
  - **function**: specifies the function to run when the event is detected.
  - **useCapture**: an optional Boolean value (true or false) that specifies whether the event should be executed in the **capturing** or **bubbling** phase.

# Event Bubbling or Event Capturing?

- **Event propagation** is a way of defining the element order when an event occurs. If you have a `p` element inside a `div` element, and the user clicks on the `p` element, which element's "click" event should be handled first?

  ```html
  <div>
    <p></p>
  </div>
  ```

- In **bubbling** the inner most element's event is handled first and then the outer: the `p` element's click event is handled first, then the `div` element's click event.
- In **capturing** the outer most element's event is handled first and then the inner: the `div` element's click event will be handled first, then the `p` element's click event.
- With the `addEventListener()` method you can specify the propagation type by using the `useCapture` parameter: The default value is `false`, which will use the bubbling propagation, when the value is set to true, the event uses the capturing propagation.

# Types of Events

## 1. `DOMContentLoaded`

- The `DOMContentLoaded` event is an event that is fired when the `HTML` document has been completely loaded and parsed, without waiting for **stylesheets**, **images**, and **subframes** to finish loading. It ensures that the **DOM** is fully constructed and ready for manipulation using **JavaScript**.
- By wrapping JavaScript code inside an event listener for `DOMContentLoaded`, you ensure that your code runs only after the entire `HTML` document has been loaded. This helps prevent issues where your `JavaScript` code is trying to interact with `HTML` elements that haven't been created yet.
- Example:
  ```js``` 

## 1. `onclick`

- `onclick` event occurs when the user clicks on an element.

  ```html
  <button onclick="hello()">Click Me</button>
  ```

## 2. `oncontextmenu`

- use the `oncontextmenu` event to enable JS **Right-Click** event.

  ```html
  <button oncontextmenu="hello()">Click Me</button>
  ```

## 3. `ondblclick`

- use the `ondblclick` attribute to create a **double-click** event.

  ```html
  <button ondblclick="hello()">Click Me</button>
  <script>
    function hello() {
      alert("Clicked");
    }
    hello();
  </script>
  ```

## 4. `onmouseout`

- `onmouseout` attribute to create **Mouse Out** events.

  ```html
  <button onmouseenter="hello()">Click Me</button>

  <script>
    function hello() {
      document.write("Hello, I am an event");
    }
  </script>
  ```

## 5. Mouse Out

## 6. Mouse Down

## 7. Mouse Up

## 8. Key Press

## 9. Key Up

## 10. Unload

## 11. Scroll

## 12. Load

## 13. Resize
