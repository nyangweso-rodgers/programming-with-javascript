# DOM Manipulation

## Table Of Contents

# Working with Texts

- Three properties for text manipulation:
  1. `textContent`
  2. `innerText`
  3. `innerHTML`

## 1. `textContent`

- `textContent` property gets the inner text of a `HTML` element.

## 2. `innerText`

- `innerText` property works similarly to `textContent` with minor differences.

## 3. `innerHTML`

- While you could only alter texts with `textContent` and `innerText`, you can pass in an entire element into a target element inside the DOM with the `innerHTML` property.

# Best Practices for DOM Manipulation

## 1. Use the `DOMContentLoaded` Event

- `DOMContentLoaded` event is fired when the **HTML** document is fully loaded. Using this event ensures that your **DOM manipulation** code runs only after the document is fully loaded.
- To use the `DOMContentLoaded`, add an event listener to the document and listen for the `DOMContentLoaded` event. This helps prevent any issues that may come up when you try to manipulate elements that are yet to be rendered.
  ```js
  document.addEventListener("DOMContentLoaded", function () {
    // DOM Manipulation code goes here...
  });
  ```

## 2. Cache Selected Elements

- When you have frequently used elements, querying the DOM for the same element anytime over and over is inefficient. It's better to query the DOM once and store the result in variables.
  ```js
  const btnElement = document.getElementById("btn");
  ```

## 3. Query Parent Elements Instead of Document

- When you cache an element, you can also query it to select any of its descendants. This can help improve performance because it limits the scope of the query and reduces the number of times the entire document is queried.

  ```html
  <div id="parent">
    <p id="child">Example paragraph</p>
  </div>
  ```

  ```js
  const parentElement = document.getElementById("parent");

  // Options 1: Querying entire document ❌
  const childFromDocument = document.getElementById("child");

  // Options 2: Query the parent element ✅
  const childFromParent = document.querySelector("#child");
  ```

- Option 1, queries (or searches) the entire document to find and select the child. This is less performant and not even necessary because the parent of the element you intend to select is already cached.
- Option 2, narrows the scope of the query (or search) by querying only the parent element and not the whole document. That's why it's preferred because it's more performant – especially when the document is large.

## 5. Use `innerHTML` with Caution

- `innerHTML` property reads and parses HTML markup that you pass to it. This means it can read and run code in a script tag passed to it. And this can pose a security risk to your application.
- Where possible, use the `innerText` or `textContent` property to render strings. But if you need to use `innerHTML`, be sure you're using it to insert content from trusted sources. Or sanitize and validate the provided content with a library like DOMPurify.

## 6. Write Readable Event Listeners

- To make your code easy to read and maintain, you can define the event handler function outside of the event listener.

  ```js
  // Example 1 ✅

  MyElement.addEventListener("click", handleClick);

  function handleClick() {
    // your logic goes here..
  }

  // Example 2 ❌

  myElement.addEventListener("click", function () {
    // your logic goes here...
  });
  ```

- Both are technically correct and will do the same thing. But **example 1** is preferred because it's easier to read. Also, you can reuse the handleClick function if you need to. This helps you observe the **DRY** (Don't Repeat Yourself) principle.

## 7. Use Event Delegation to Handle DOM Events

- Event delegation is when you attach an event listener on a parent element to listen to events on its descendants. With this technique, you can reduce the number of event listeners to include in your code.
- Example:

  - Assume, you have five buttons:
    ```html
    <div id="parent">
      <button id="btn-1">1st Button</button>
      <button id="btn-2">2nd Button</button>
      <button id="btn-3">3rd Button</button>
      <button id="btn-4">4th Button</button>
      <button id="btn-5">5th Button</button>
    </div>
    ```
  - You can add an event listener to each of the five buttons to listen to a `click`. Or using **event delegation**, you can a single event on only the parent `div`:

    ```js
    const parentElement = document.getElementById("parent");
    parentElement.addEventListener("click", handleClick);

    const handleClick = (event) => {
      alert(event.target.id);
    };
    ```

  - Here, the event to delegated to the parent element. And we're using `event.target.id` to get the actual button the user clicked.

## 8. Batch DOM Updates With Fragment

- Frequent updates to the DOM can affect the performance of your application. Try to reduce the number of updates where possible.
- A useful feature you can use to batch updates is the `.createDocumentFragment` property. It allows you to group multiple updates before inserting them into the document. This reduces reflows and makes your code more effecient.
- Example:

  - without Fragment

    ```js
    const container = document.getElementById("container");

    for (let i = 0; i < 1000; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${i}`;
      container.appendChild(listItem);
    }
    ```

  - This code updates with each iteration of the loop. That means the DOM will be update 1,000 times. There is a more efficient way of doing this with the code below that uses fragment.
  - Example with fragment:

    ```js
    const container = document.getElementById("container");
    const fragment = document.createDocumentFragment();

    // Add multiple list items to the fragment
    for (let i = 0; i < 1000; i++) {
      const listItem = document.createElement("li");
      listItem.textContent = `Item ${i}`;
      fragment.appendChild(listItem);
    }

    container.appendChild(fragment);
    ```

  - The code above appends the `listItem` to the fragment with each iteration of the loop. It only appends the child to the container element after the loop is done running. This means the DOM is updated only once instead of 1,000 times like before.

## 9. Use the `stopPropagation` Method

- The `stopPropagation` method controls the flow of events in the DOM. By default, when an event occurs on an element, it **bubbles** (**propagates**) through its ancestors.
- This event propagating behaviour can sometimes lead to unintended results. The `stopPropagation` method provides a way to stop the event from propagating to the parent and other ancestors.
- Let's take a situation where you have a `button` inside a parent `div`. And you want to handle a `click` event on the `button` without registering the `click` on the `div`:

  ```html
  <div id="container">
    <button id="button">Click me</button>
  </div>
  ```

  ```js
  const containerDiv = document.getElementById("container");
  const buttonElement = document.getElementById("button");

  containerDiv.addEventListener("click", handleDivClick);
  buttonElement.addEventListener("click", handleBtnClick);

  function handleDivClick() {
    console.log("Div clicked");
  }

  function handleBtnClick(event) {
    event.stopPropagation();
    console.log("Button clicked");
  }
  ```

- Without using the `stopPropagation` method, a `click` event on the `button` will also trigger a `click` event on the parent `div`. This means both event handlers will run.
- But the `event.stopPropagation()` line in the code will prevent the `handleDivClick` function from running when a user clicks the button.

## 10. Test Your DOM Manipulation Code

- You can use testing frameworks and libraries available for JavaScript, such as:
  1. Jest,
  2. Mocha,
  3. Jasmine, and others to automate testing your apps.
- The following example uses the **Jest** framework to test DOM Manipulation code for adding a class to an element.
  ```js
  test("Adding a highlight class changes text color to red", () => {
    myElement.classList.add("highlight");
    expect(getComputedStyle(myElement).color).toBe("red");
  });
  ```
- Adding the highlight class is expected to change the text color to red. If the test passes, it means your DOM manipulation code works as expected. If not, you will need to figure out what figure out what's wrong and fix the issue.

# Resources

1. [freecodecamp - JS DOM Manipulation Best Practices – with Examples](https://www.freecodecamp.org/news/dom-manipulation-best-practices/)
