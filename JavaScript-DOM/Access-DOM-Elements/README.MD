# Accessing DOM Elements

## Table Of Contents
- [Different Ways to Get Elements From the DOM Using JavaScript]()
    1. [querySelector()](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/JavaScript-DOM/Get-Elements-from-DOM/Project-querySelector)


- [Further Reading]()
  1. [dev community - How to Get Elements From the DOM Using JavaScript](https://dev.to/shahednasser/how-to-get-elements-from-the-dom-using-javascript-1676)


# Accessing DOM Elements

# Method 1: `getElementById()`
* [`getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) rettrieves and element from the DOM using element't ID. If no element exists in the DOM with the supplied ID, `null` will be returned instead.

    ```js
        // syntax: getElementById
        const mainElement = document.getElementById('main');
    ```

# Method 2: `getElementsByTagName`
```js
    // syntax: getElementsByTagName
    const devElement = document.getElementsByTagName('div');
    console.log(devElement[0]);

    // retrieve paragraph elements
    const pElements = divElements[0].getElementsByTagName('p');
    console.log(pElements);
```

# Method 3: `getElementsByClassName()`
```js
    // syntax: getElementsByClassName
    const mainElements = document.getElementsByClassName('main');
    console.log(mainElements);
```

# Method 4: `getElementsByName()`
* You can retrieve elements by the value of the `name` attribute.
* or example, you can use it to retrieve input elements that have the `name` attribute set to `email`.

    ```js
        // syntax: getElementsByName
        const emailElements = document.getElementsByName('email');
        console.log(emailElements.item(0));
    ```

# Method 6: `querySelector()`
* `querySelector()`  retrieves the first element that matches the specified `CSS` selector. 

    ```js
        // syntax:
        const elm = document.querySelector(selector);
    ```
* The `selector` parameter represents the `CSS` selector that you want to use to find the desired element. It can be any valid `CSS` selector, such as a class name (`.class-name`), an ID (`#element-id`), an element type (`div`, `p`, etc.), or a combination of selectors.

* When `document.querySelector() `is called, it traverses the document starting from the root element (`html`) and returns the first element that matches the specified selector. If no element is found, it returns `null`.

# Method 7: `querySelectorAll` 
* `querySelectorAll()` retrieves all elements that match the specified selector. This method returns a `NodeList`.

    ```js
        // syntax: querySelectorAll
        const elms = document.querySelectorAll('.main > p');
        console.log(elms.item(0));
    ```

# Method 7: `children`
* The `children` property allows you to retrieve all immediate child elements of the `document` or any element. This property's type is a live `HTMLCollection`.

    ```js
        // syntax: children
        const rows = document.querySelectorAll('table tr');
        for (const row of rows) {
            console.log(row.children);
        };
    ```

# Method 8: `firstElementChild`
* The `firstElementChild` property allows you to retrieve the `first child element` of the `document` or any `element`.
* If the element does not have children, the value of `firstElementChild` is `null`.

    ```js
        // syntax: firstElementChild
        const rows = document.querySelectorAll('table tr');
        for (const row of rows) {
            console.log(row.firstElementChild);
        }
    ```

# Method 9: `lastElementChild`
* The `lastElementChild` property allows you to retrieve the `last child element` of the `document` or any element.
* If the element does not have children, the value of `lastElementChild` is `null`:

    ```js
        // syntax: lastElementChild
        const rows = document.querySelectorAll('table tr');
        for (const row of rows) {
            console.log(row.lastElementChild);
        }
    ```