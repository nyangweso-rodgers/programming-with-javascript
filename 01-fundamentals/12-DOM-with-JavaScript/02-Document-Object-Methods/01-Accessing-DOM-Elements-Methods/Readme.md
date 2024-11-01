# Accessing DOM Elements Methods

# Accessing DOM Elements

## 1. `getElementById()`

- [`getElementById()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById) rettrieves and element from the DOM using element't ID. If no element exists in the DOM with the supplied ID, `null` will be returned instead.

  ```js
  // syntax: getElementById
  const mainElement = document.getElementById("main");
  ```

## 2. `getElementsByTagName`

```js
// syntax: getElementsByTagName
const devElement = document.getElementsByTagName("div");
console.log(devElement[0]);

// retrieve paragraph elements
const pElements = divElements[0].getElementsByTagName("p");
console.log(pElements);
```

## 3. `getElementsByClassName()`

```js
// syntax: getElementsByClassName
const mainElements = document.getElementsByClassName("main");
console.log(mainElements);
```

## 4. `getElementsByName()`

- You can retrieve elements by the value of the `name` attribute.
- or example, you can use it to retrieve input elements that have the `name` attribute set to `email`.

  ```js
  // syntax: getElementsByName
  const emailElements = document.getElementsByName("email");
  console.log(emailElements.item(0));
  ```

## 5. `querySelector()`

- `querySelector()` retrieves the first element that matches the specified `CSS` selector.

  ```js
  // syntax:
  const elm = document.querySelector(selector);
  ```

- The **selector** parameter represents the `CSS` selector that you want to use to find the desired element. It can be any valid `CSS` selector, such as a class name (`.class-name`), an ID (`#element-id`), an element type (`div`, `p`, etc.), or a combination of selectors.
- Example:

  ```js
  let firstProject = document.querySelector("#firstProject");
  console.log(firstProject);

  // children
  console.log(firstProject.children);
  ```

- When `document.querySelector() `is called, it traverses the document starting from the root element (`html`) and returns the first element that matches the specified selector. If no element is found, it returns `null`.

## 6. `querySelectorAll`

- `querySelectorAll()` retrieves all elements that match the specified selector. This method returns a `NodeList`.

  ```js
  // syntax: querySelectorAll
  const elms = document.querySelectorAll(".main > p");
  console.log(elms.item(0));
  ```
