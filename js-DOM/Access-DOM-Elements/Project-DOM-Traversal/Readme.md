# Project: DOM Traversal

# Description
* Some methods for DOM traversal Methods to test include:
    1. `parentElement`
    2. `children`
    3. `firstElementChild`
    4. `lastElementChild`
    5. `previousElementSibling`
    6. `nextElementSibling`

# `parentElement`

# Task 1: Get the parent element of the `#firstProject` ID
```js
    let firstProject = document.querySelector('#firstProject');
    console.log(firstProject);

    // parentElement
    console.log(firstProject.parentElement);
```

# Task 2: Get the children elements of the `#firstProject` ID
```js
    let firstProject = document.querySelector('#firstProject');
    console.log(firstProject);

    // children
    console.log(firstProject.children);
```

# Task 3: Get the first child of a `#firstProject` ID parent
```js
    let firstProject = document.querySelector('#firstProject');
    console.log(firstProject);

    // firstElementChild
    console.log(firstProject.firstElementChild);
```

# Task 4: Get the next sibling element `#firstProject` ID parent
```js
    let firstProject = document.querySelector('#firstProject');
    console.log(firstProject);

    // nextElementSibling
    console.log(firstProject.nextElementSibling);
```

# Task 5: Get the previous sibling element `#firstProject` ID parent
```js
    let secondProject = document.querySelector('#secondProject');
    
    // previousElementSibling
    console.log(secondProject.previousElementSibling);
```