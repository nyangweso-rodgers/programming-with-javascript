# Setting Attributes

## Table Of Contents

# Setting Attributes

- Methods include:
  1. `setAttribute()`
  2. `getAttribute()`
  3. `className()`

## 1. `element.getAttribute()`

- The `getAttribute()` method of the element interface returns the value of a specified attribute on a DOM element.
- If the specific value does not exist, the value returned will either be `null` or an empty string `""`.

## 2. `element.setAttribute()`

- This method either adds a new attribute to the DOM element, or updates the values of an attribute that already exists.

  ```js
  // create new p element
  let projectTwoParagraph = document.createElement("p");

  // set a class to it
  projectTwoParagraph.className = "test-class";

  // setting attribute
  projectTwoParagraph.setAttribute("title", "test-title");
  console.log(projectTwoParagraph);
  ```

## 3. `element.className()`

```js
// get a p element
let p = document.querySelector("p");

// set a class to it
p.className = "test-class";
```
