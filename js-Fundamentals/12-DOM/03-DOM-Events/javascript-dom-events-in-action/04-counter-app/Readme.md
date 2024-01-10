# Counter Application

## Description

- Create a Counter Application to add or remove 1 when a user clicks a button.

## User Story

- As a user I need to add or subract 1 when I click a button. The result should be displayed at the center of a circle.

  ```js
  // Counter Application

  const getAddBtn = document.getElementById("addBtn");
  const getCircleId = document.getElementById("circleId");
  const getMinusBtn = document.getElementById("minusId");

  let count = 0; // Initialize the count variable

  // function to increase the counter
  const addCount = () => {
    count++;
    getCircleId.innerHTML = count;
  };

  // function to decrease the counter
  const minusCount = () => {
    count--;
    getCircleId.innerHTML = count;
  };

  // Attach event listeners
  getAddBtn.addEventListener("click", () => {
    addCount();
  });

  getMinusBtn.addEventListener("click", () => {
    minusCount();
  });
  ```

- We can modify the above code to add validation such that the counter doesn't go below zero.

  ```js
  // Counter Application

  const getAddBtn = document.getElementById("addBtn");
  const getCircleId = document.getElementById("circleId");
  const getMinusBtn = document.getElementById("minusId");

  let count = 0; // Initialize the count variable

  // function to increase the counter
  const addCount = () => {
    count++;
    getCircleId.innerHTML = count;
    getAddBtn.style.color = "black";
  };

  // function to decrease the counter
  const minusCount = () => {
    if (count > 0) {
      // Check if the count is greater than 0
      count--; // Decrement only if the condition is true
      getCircleId.innerHTML = count;
      getMinusBtn.disabled = false; // Ensure the minus button is enabled
      getCircleId.style.color = "black"; // Reset any warning color
    } else {
      getCircleId.style.color = "red"; // Apply a warning color
      getMinusBtn.disabled = true; // Disable the minus button
      getMinusBtn.textContent = " Cannot go below 0"; // Optional: Change button text
    }
    getCircleId.innerHTML = count;
  };

  // Attach event listeners
  getAddBtn.addEventListener("click", () => {
    addCount();
  });

  getMinusBtn.addEventListener("click", () => {
    minusCount();
  });
  ```
