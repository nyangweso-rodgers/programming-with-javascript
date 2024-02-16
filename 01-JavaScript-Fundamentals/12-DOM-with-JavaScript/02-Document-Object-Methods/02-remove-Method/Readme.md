# `remove()` Element DOM Method

# Description

- `remove()` method removes an element from the DOM.

# Task 1: Remove the `Remove` Button Element

- Solution #1:

  - Here,

    ```js
    const removeElementButton = document.getElementById("removeElementButton");

    const removeElementFunction = (elementToBeRemoved) => {
      elementToBeRemoved.remove();
    };

    removeElementButton.addEventListener("click", (event) => {
      const clickedElement = event.target;
      removeElementFunction(clickedElement);
    });
    ```

# Task 2: Remove the ParentElement of the `Remove` Button Element

- Solution #1:

  - Here, we use `element.parentNode.remove()` Method to remove the immediate parent element

    ```js
    // using remove() method
    const removeElementButton = document.getElementById("removeElementButton");

    const removeElementFunction = (elementToBeRemoved) => {
      elementToBeRemoved.parentNode.remove();
    };

    removeElementButton.addEventListener("click", (event) => {
      const clickedElement = event.target;
      removeElementFunction(clickedElement);
    });
    ```

- Solution #2:

  - We can also use the `element.parentElement.remove()` method to remove the immediate parent element.

    ```js
    // using remove() method
    const removeElementButton = document.getElementById("removeElementButton");

    const removeElementFunction = (elementToBeRemoved) => {
      elementToBeRemoved.parentElement.remove();
    };

    removeElementButton.addEventListener("click", (event) => {
      const clickedElement = event.target;
      removeElementFunction(clickedElement);
    });
    ```

# Task 3: Remove the `.row` Class of the `Remove` Button Element.

- Solution #1:

  - Here we can use the `element.parentElement.parentElement.remove()` or `element.parentNode.parentNode.remove()` method

    ```js
    // using remove() method
    const removeElementButton = document.getElementById("removeElementButton");

    const removeElementFunction = (elementToBeRemoved) => {
      elementToBeRemoved.parentElement.parentElement.remove();
    };

    removeElementButton.addEventListener("click", (event) => {
      const clickedElement = event.target;
      removeElementFunction(clickedElement);
    });
    ```
