# `parentElement` Property

# Description

- The `parentElement` property returns the parent element of the specified element.
- The difference between `parentElement` and `parentNode`, is that `parentElement` returns `null` if the parent node is not an element node:

- Example:

  ```js
  const getParentElementName =
    document.getElementById("child").parentElement.nodeName;

  console.log("Parent Element Name: ", getParentElementName); // Output: DIV
  ```
