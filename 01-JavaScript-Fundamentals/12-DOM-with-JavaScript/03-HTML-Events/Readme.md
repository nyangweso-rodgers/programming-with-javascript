# HTML Events

## Table Of Contents

# Introduction to HTML DOM Events

- **DOM Events** allow JavaScript to add **event listener** or **event handlers** to HTML elements.

## `click` Events

- `click` event occurs when the user clicks on an element like a button, image, or link.
- You can use the `onclick` attribute in HTML or `addEventListener` in JavaScript to listen for this event.
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
