// Counter Application

const getAddBtn = document.getElementById("addBtn");
const getCircleId = document.getElementById("circleId");
const getMinusBtn = document.getElementById("minusId");

let count = 0; // Initialize the count variable

// function to increase the counter
const addCount = () => {
  console.log("Add button clicked");
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
