// To Do App

// select elements
const addTaskBtn = document.getElementById("addTaskBtn");
const titleInput = document.getElementById("titleInput");
const dueDateInput = document.getElementById("dueDateInput");
const descriptionInput = document.getElementById("descriptionInput");
const displayTaskRow = document.querySelector(".display-tasks-row");

// create task box element
const createTaskBoxElement = () => {
  // get form input values
  const getTaskTitle = titleInput.value;
  const getDueDate = dueDateInput.value;
  const getTaskDescription = descriptionInput.value;

  // validate if title is not empty
  if (getTaskTitle.trim() === "") {
    alert("Task title is required!");
    return;
  }

  const taskBoxElement = document.createElement("div");
  taskBoxElement.className = "border border-primary";
  taskBoxElement.innerHTML = `<h3>${getTaskTitle}</h3> <p><strong>Due Date:</strong> ${getDueDate}</p> <p><strong>Description:</strong> ${getTaskDescription}</p>`;

  //
  taskBoxElement.appendChild(createEditAndDeleteElement());

  return taskBoxElement;
};

// add edit and delete icons to the createTaskBoxElement
const createEditAndDeleteElement = () => {
  const editAndDeleteElement = document.createElement("div");
  editAndDeleteElement.className = "border border-danger";

  const editElement = document.createElement("i");
  editElement.className = "fa-solid fa-pen-to-square";
  editElement.addEventListener("click", () => {
    handleEditTask(editAndDeleteElement.parentElement);
  });

  const deleteElement = document.createElement("i");
  deleteElement.className = "fa-solid fa-trash";
  deleteElement.addEventListener("click", () => {
    handleDeleteTask(editAndDeleteElement.parentElement);
  });

  // append icons to the editAndDeleteElement
  editAndDeleteElement.appendChild(editElement); //
  editAndDeleteElement.appendChild(deleteElement); //

  return editAndDeleteElement;
};

// Delete the task element
const handleDeleteTask = (taskElement) => {
  // Implement logic to delete the corresponding task
  displayTaskRow.removeChild(taskElement);
};

// Edit the task element
const handleEditTask = (taskElement) => {
  // Implement logic to edit the corresponding task
  // You can open a modal, show an input form, etc.

  // Extract task details from the task element
  const taskTitle = taskElement.querySelector("h3").textContent;
  const dueDate = taskElement.querySelector(".due-date").textContent;
  const description =
    taskElement.querySelector(".task-description").textContent;

  // Populate the modal with task details
  document.getElementById("editTaskTitle").value = taskTitle;
  document.getElementById("editDueDate").value = dueDate;
  document.getElementById("editDescription").value = description;

  // Open the edit modal
  const editModal = new bootstrap.Modal(
    document.getElementById("editTaskModal")
  );
  editModal.show();

  // Remove existing event listeners on the "Save Changes" button
  const saveChangesBtn = document.getElementById("saveChangesBtn");
  const newSaveChangesBtn = saveChangesBtn.cloneNode(true);
  saveChangesBtn.parentNode.replaceChild(newSaveChangesBtn, saveChangesBtn);

  // Implement logic to save changes when the user closes the modal
  newSaveChangesBtn.addEventListener("click", () => {
    // Update task details in the task element
    taskElement.querySelector("h3").textContent =
      document.getElementById("editTaskTitle").value;
    taskElement.querySelector(".due-date").textContent =
      document.getElementById("editDueDate").value;
    taskElement.querySelector(".task-description").textContent =
      document.getElementById("editDescription").value;

    // Close the modal
    editModal.hide();
  });
};

// add tasks functions
const addTask = () => {
  // append the new task box to the task container
  displayTaskRow.appendChild(createTaskBoxElement());

  // clear the input fields
  titleInput.value = "";
  dueDateInput.value = "";
  descriptionInput.value = "";

  // Close the modal using Bootstrap method
  const modal = new bootstrap.Modal(document.getElementById("addTaskModal"));
  modal.hide();
};

addTaskBtn.addEventListener("click", addTask);
