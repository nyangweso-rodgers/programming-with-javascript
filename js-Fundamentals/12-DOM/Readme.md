# Javascript DOM

## Table Of Contents

# DOM Properties for Examining the DOM.

- The document object contains a set of information pertaining to that document, such as its **properties** as well as **methods** to interact with it from our script.
- We can check for any **property** by using the `document.property `syntax.

## 1. `console.dir(document)`

- gives an interactive representation of our document. Interactive because it becomes very easy to expand the document object and inspect the properties and methods inside the document object.

  ```js
  // syntax
  console.dir(document);
  ```

## 2. `console.log(document.doctype)`

- Check the Document Type:
- get information about the type and version of the HTML Markup being used in the document. e.g., `<!DOCTYPE html>`

  ```js
  console.log(document.doctype, document.version);
  ```

## 3. `console.log(document.URL)`

- Get the **URL** of the page.

  ```js
  console.log(document.URL); //
  ```

## 4. `console.log(document.lastModified)`

- see when last a document (`HTML`) was modified.

  ```js
  console.log(document.lastModified);
  ```

## 5. `console.log(document.head)`

- This will log the `HTML` head tag as well as every other tags nested inside of it.

  ```js
  console.log(document.head);
  ```

## 6. `console.log(document.body)`

- This logs a `HTML` representation of the body tag and all nested tags, onto the browser console.

  ```js
  console.log(document.body); //
  ```

## 7. `console.log(document.forms)`

- This will return a `HTMLCollection` (similar to an array) showing the number of forms (if any) present in the document as well as their index properties.

  ```js
  console.log(document.forms);
  ```

## 8. `console.log(document.all)`

- This will log the entire markup within the `HTML` document.

  ```js
  console.log(document.all); //
  ```

## 9. `console.log(document.scripts)`

- The `scripts` property allows you to retrieve all `script` elements in the document. It returns an `HTMLCollection` of elements.

  ```js
  console.log(document.scripts);
  ```

## 10. `document.cookie`

- Returns the document's cookie

# Resources

1. [w3Schools - DOM Document](https://www.w3schools.com/js/js_htmldom_document.asp)
