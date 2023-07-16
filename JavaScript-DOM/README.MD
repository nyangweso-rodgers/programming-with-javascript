# JavaScript DOM

## Table of Contents
- [Getting Started with JavaScript DOM](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-DOM/Getting-Started-with-DOM)
- [Get Elements from DOM](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-DOM/Get-Elements-from-DOM)
  1. [getElementById]()
  2. [getElementsByTagName]()
  3. [getElementsByClassName]()
  4. [getElementsByName]()
  5. [querySelector]()
  6. [childNodes]()
  7. [firstElementChild]()
  8. [lastElementChild]()
  9. [scripts]()

- [Further Reading]()
  1. [Dev.to - The Ultimate Tutorial on JavaScript DOM - JS DOM with Examples](https://dev.to/ubahthebuilder/the-ultimate-tutorial-on-javascript-dom-js-dom-with-examples-1b47)

# Examining the DOM
# `console.dir(document)`
* gives an interactive representation of our document. Interactive because it becomes very easy to expand the document object and inspect the properties and methods inside the document object.

# DOM Properties and Methods
* The document object contains a set of information pertaining to that document, such as its __properties__ as well as __methods__ to interact with it from our script.
*  We can check for any __property__ by using the `document.property `syntax. 

# DOM Property 1: Check the Document Type: `console.log(document.doctype)`
* get information about the type and version of the HTML Markup being used in the document. e.g., `<!DOCTYPE html>`

# DOM Property 2: Getting the page's URL: `console.log(document.URL)`
* Sample Output: `https://twitter.com/home`

# DOM Property 3: Time of last modification: `console.log(document.lastModified)`
* see when last a document (`HTML`) was modified.

# DOM Property 4: View the head part of the HTML Document `console.log(document.head)`
* This will log the `HTML` head tag as well as every other tags nested inside of it.

# DOM Property 5: Get the Body of the document: `console.log(document.body)`
* This logs a `HTML` representation of the body tag and all nested tags, onto the browser console.

# DOM Property 6: Get the form(s) of the document: `console.log(document.forms)`
* This will return a `HTMLCollection` (similar to an array) showing the number of forms (if any) present in the document as well as their index properties.

# DOM Property 7: Get the entire HTML markup: `console.log(document.all)`
* This will log the entire markup within the `HTML` document.