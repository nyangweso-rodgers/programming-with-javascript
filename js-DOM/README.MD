# JavaScript DOM

## Table of Contents
1. [Examining the DOM](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-DOM/Examining-the-DOM)
   1. `document.doctype`
   2. `document.url`
   3. `document.lastModified`
   4. `document.head`
   5. `document.body`
   6. `document.forms`
   7. `document.all`
   8. `document.scripts`


2. [Access DOM Elements](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-DOM/Access-DOM-Elements)
   1. `document.getElementById()`
   2. `document.getElementsByTagName()`
   3. `document.getElementsByClassName()`
   4. `document.getElementsByName()`
   5. `document.querySelector()-`
   6. `document.querySelectorAll()`

3. [DOM Traversal]()
   1. `parentElement`
   2. `children`
   3. `firstElementChild`
   4. `lastElementChild`

4. [DOM Events](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-DOM/JS-DOM-Events)
   1. [Project - Working with JavaScript DOM Events](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-DOM/JS-DOM-Events/Project-DOM-Events)


- [Get Elements from DOM](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-DOM/Get-Elements-from-DOM)

- [Further Reading]()
  1. [Dev.to - The Ultimate Tutorial on JavaScript DOM - JS DOM with Examples](https://dev.to/ubahthebuilder/the-ultimate-tutorial-on-javascript-dom-js-dom-with-examples-1b47)

# Overview of DOM
* Document Object Model (DOM) is an interface that enables manipulation of the content, structure and style of a web page.

# DOM Methods vs. DOM Properties
* __DOM methods__ are functions provided by the __DOM API__ that allow you to interact with and manipulate elements in the __DOM__. i.e., manipulate content, style, or behavior.
* These methods are typically called using the `dot` notation on specific DOM elements or the document object. E,g.,
    1. `document.getElementById()`
    2. `document.createElement()`
    3. `document.appendChild()`
    4. e.t.c.,

* __DOM Properties__ represent attributes or characteristics of DOM elements. Examples include:
  1. `textContent` - represents text with an element
  2. `innerHTML` - represents the `HTML` content within an element
  3. `id` - represents the unique identifier of an element
  4. `className` - represents the css classes applied to the element