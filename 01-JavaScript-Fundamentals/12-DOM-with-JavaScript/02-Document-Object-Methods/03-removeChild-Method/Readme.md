# `removeChild()` DOM Method

# `removeChild()` Description

- the `removeChild()` method removes an element's child.

# Task 1: How to Remove First child (index 0)

- Click "Remove Child" button to remove the first item from a list of child nodes.

- Solution #1:

  - Here, we use `parentDiv.removeChild()` in conjsction with `parentDiv.firstElementChild()`.

    ```js
    // removeChild() Method

    const removeChildElementButton = document.getElementById(
      "removeChildElementButton"
    );
    const parentDiv = document.getElementById("parentDiv");

    const removeChildElementFunction = () => {
      parentDiv.removeChild(parentDiv.firstElementChild);
    };

    removeChildElementButton.addEventListener("click", () => {
      removeChildElementFunction();
    });
    ```

- Solution #2:

  - Here,

    ```js
    // removeChild() Method

    const removeChildElementButton = document.getElementById(
      "removeChildElementButton"
    );
    const parentDiv = document.getElementById("parentDiv");

    const removeChildElementFunction = () => {
      parentDiv.removeChild(parentDiv.children[0]);
    };

    removeChildElementButton.addEventListener("click", () => {
      removeChildElementFunction();
    });
    ```

- Solution #3:

  - Here, we use an `if` statement:

    ```js
    // removeChild() Method

    const removeChildElementButton = document.getElementById(
      "removeChildElementButton"
    );
    const parentDiv = document.getElementById("parentDiv");

    const removeChildElementFunction = () => {
      if (parentDiv.hasChildNodes()) {
        parentDiv.removeChild(parentDiv.firstChild);
      }
    };

    removeChildElementButton.addEventListener("click", () => {
      removeChildElementFunction();
    });
    ```

- Solution #4:

  - Here, we se an `if` statement, `children` and indexing:

    ```js
    // removeChild() Method

    const removeChildElementButton = document.getElementById(
      "removeChildElementButton"
    );
    const parentDiv = document.getElementById("parentDiv");

    const removeChildElementFunction = () => {
      if (parentDiv.hasChildNodes()) {
        parentDiv.removeChild(parentDiv.children[0]);
      }
    };

    removeChildElementButton.addEventListener("click", () => {
      removeChildElementFunction();
    });
    ```

# Task 2: Remove All Child Nodes
