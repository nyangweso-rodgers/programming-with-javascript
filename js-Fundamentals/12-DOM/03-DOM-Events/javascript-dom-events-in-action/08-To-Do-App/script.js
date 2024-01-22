// To Do App

// select elements
const addTaskBtn = document.getElementById("addTaskBtn");
const titleInput = document.getElementById("titleInput");
const dueDateInput = document.getElementById("dueDateInput");
const descriptionInput = document.getElementById("descriptionInput");
const displayTaskRow = document.querySelector(".display-tasks-row");

// add tasks functions
const addTask = () => {
  // get form input values
  const getTaskTitle = titleInput.value;
  const getDueDate = dueDateInput.value;
  const getTaskDescription = descriptionInput.value;

  // validate if title is not empty
  if (getTaskTitle.trim() === "") {
    alert("Task title is required!");
    return;
  }

  // Create a new task box
  const newTaskBox = document.createElement("div");
  newTaskBox.className = "box border border-warning p-5";
  newTaskBox.innerHTML = `<h3>${getTaskTitle}</h3> <p><strong>Due Date:</strong> ${getDueDate}</p> <p><strong>Description:</strong> ${getTaskDescription}</p>`;

  // append the new task box to the task container
  displayTaskRow.appendChild(newTaskBox);

  // clear the input fields
  titleInput.value = "";
  dueDateInput.value = "";
  descriptionInput.value = "";

  // Close the modal using Bootstrap method
  const modal = new bootstrap.Modal(document.getElementById("addTaskModal"));
  modal.hide();
};

addTaskBtn.addEventListener("click", addTask);
