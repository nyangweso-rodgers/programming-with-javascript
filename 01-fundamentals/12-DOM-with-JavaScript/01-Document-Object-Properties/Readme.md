# Document Object Properties

## Table Of Contents

# Introduction to DOM Properties

- **DOM Properties** represent **attributes** or **characteristics** of DOM elements. Examples include:
  1. `textContent` - represents text with an element
  2. `innerHTML` - represents the `HTML` content within an element
  3. `id` - represents the unique identifier of an element
  4. `className` - represents the css classes applied to the element

## HTML DOM Proprty 1: `parentElement`

- `parentElement` Returns the parent element node of an element
- Example:

  ```js
  const getParentElementName =
    document.getElementById("child").parentElement.nodeName;

  console.log("Parent Element Name: ", getParentElementName); // Output: DIV
  ```

# DOM Properties For Text Manipulation

- Three properties for text manipulation:
  1. `textContent`
  2. `innerText`
  3. `innerHTML`

## 1. `textContent`

- `textContent` property gets the inner text of a `HTML` element.

## 2. `innerText`

- `innerText` Sets or returns the text content of a node and its descendants
- `innerText` property works similarly to `textContent` with minor differences.

## 3. `innerHTML`

- `innerHTML` Sets or returns the content of an element.
- While you could only alter texts with `textContent` and `innerText`, you can pass in an entire element into a target element inside the DOM with the `innerHTML` property.

# Resources

1. []
