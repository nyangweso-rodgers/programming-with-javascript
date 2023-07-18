# Examining the DOM

## Table Of Contents

# DOM Properties for Examining the DOM.
* The document object contains a set of information pertaining to that document, such as its __properties__ as well as __methods__ to interact with it from our script.
*  We can check for any __property__ by using the `document.property `syntax. 

# Examining the DOM: Property 1: `console.dir(document)`
* gives an interactive representation of our document. Interactive because it becomes very easy to expand the document object and inspect the properties and methods inside the document object.

    ```js
        // syntax
        console.dir(document);
    ```

# Examining the DOM: Property 2: `console.log(document.doctype)`
* Check the Document Type:
* get information about the type and version of the HTML Markup being used in the document. e.g., `<!DOCTYPE html>`

    ```js
        console.log(document.doctype, document.version)
    ```

# Examining the DOM: Property 3: `console.log(document.URL)`
* Get the URL of the page.

    ```js
        console.log(document.URL); //
    ```

# Examining the DOM: Property 4: `console.log(document.lastModified)`
* see when last a document (`HTML`) was modified.

    ```js
        console.log(document.lastModified);
    ```

# Examining the DOM: Property 5: `console.log(document.head)`
* This will log the `HTML` head tag as well as every other tags nested inside of it.

    ```js
        console.log(document.head);
    ```

# Examining the DOM: Property 6: `console.log(document.body)`
* This logs a `HTML` representation of the body tag and all nested tags, onto the browser console.

    ```js
        console.log(document.body); //
    ```

# Examining the DOM: Property 7: `console.log(document.forms)`
* This will return a `HTMLCollection` (similar to an array) showing the number of forms (if any) present in the document as well as their index properties.

    ```js
        console.log(document.forms);
    ```

# Examining the DOM: Property 8: `console.log(document.all)`
* This will log the entire markup within the `HTML` document.

    ```js
        console.log(document.all); //
    ```

# Examining the DOM: Property 9: `console.log(document.scripts)`
* The `scripts` property allows you to retrieve all `script` elements in the document. It returns an `HTMLCollection` of elements.

    ```js
        console.log(document.scripts);
    ```