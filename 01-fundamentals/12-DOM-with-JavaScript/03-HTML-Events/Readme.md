# HTML Events

## Table Of Contents

# Introduction to HTML DOM Events

- **DOM Events** allow JavaScript to add **event listener** or **event handlers** to HTML elements.

# Introduction to Event Listeners

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
- With the `addEventListener()` method you can specify the propagation type by using the `useCapture` parameter: The default value is `false`, which will use the **bubbling propagation**, when the value is set to `true`, the event uses the **capturing propagation**.

## `click` Events

- `click` event occurs when the user clicks on an element like a button, image, or link.
- You can use the `onclick` attribute in HTML or `addEventListener` in JavaScript to listen for this event.
- When used as an HTML attribute:
  ```html
  <button onclick="hello()">Click Me</button>
  ```
- Clicking a `submit` button triggers both the click event for the button and the submit event for the form.

## `submit` Event

- This event occurs specifically when a form is submitted. This can happen in several ways:
  - Clicking a submit button.
  - Pressing Enter key while focused on a form element.
  - JavaScript code calling the submit() method on the form element.
- You can use the `onsubmit` attribute in HTML or `addEventListener` in JavaScript to listen for this event.
- The `submit` event triggers specific actions, like sending data to a server or performing client-side validation.

## Difference Between `submit` and `click` Form Events

- The "`submit`" event is closely tied to the form submission process and is ideal for performing tasks related to form validation, data manipulation before submission, or intercepting the submission process altogether.
- On the other hand, the "`click`" event is more general and can be used for any action triggered by clicking, including clicking submit buttons. However, it's important to note that attaching a "`click`" event handler to a submit button won't necessarily intercept the form submission process unless explicitly programmed to do so.

# Resources

1. [w3schools - HTML DOM Events](https://www.w3schools.com/jsref/dom_obj_event.asp)
