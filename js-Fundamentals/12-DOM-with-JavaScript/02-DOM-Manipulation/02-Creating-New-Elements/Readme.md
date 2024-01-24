# Creating HTM Elements in DOM

## Table of contents

# Creating New HTML Elements

- Methods include:
  1. `document.createElement()`
  2. `appendChild()`
  3. `insertBefore()`
  4. `document.createTextNode()`

## 1. `document.createElement()`

- creates a new `HTML` element specified by the tagname.

  ```js
  // create a new p element
  let newParagraph = document.createElement("p");
  ```

## 2. `Node.appendChild()`

- creates a new element and adds it to the parent node.

  ```js
  // create new p element
  let projectTwoParagraph = document.createElement("p");
  // create an inner text for the p element
  let description = document.createTextNode(
    "This is a test document description with createTextNode"
  );
  // append the new p element
  projectTwoParagraph.appendChild(description);
  console.log(projectTwoParagraph);
  ```

## 3. `Node.insertBefore()`

- inserts a node before the reference node as a child of a specified parent node. i.e., it adds a specific child element before another child element.

## 4. `document.createTextNode()`

```js
// create a text node
let description = document.createTextNode(
  "This is a test document description with createTextNode"
);
```

# Resources
