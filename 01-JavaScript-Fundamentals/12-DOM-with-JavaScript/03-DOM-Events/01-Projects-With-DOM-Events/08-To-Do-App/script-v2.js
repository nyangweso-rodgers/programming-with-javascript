// To Do App

// get document elements
const modalTitleInput = document.getElementById("modalTitleInput");
const modalDueDateInput = document.getElementById("modalDueDateInput");
const modalDescriptionInput = document.getElementById("modalDescriptionInput");
const modalAddTaskButton = document.getElementById("modalAddTaskButton");
const displayTasksBox = document.getElementById("displayTasksBox");

// create an error message array
const errorMessages = [];

// handle modalAddTaskButton
modalAddTaskButton.addEventListener("click", () => {
  formValidationFunction();
});

// Function to Open Modal
const openModalFunction = () => {
  const myModal = new bootstrap.Modal(
    document.getElementById("modalToAddTask")
  );
  myModal.show();
};

// Function to Close the modal
const closeModalFunction = () => {
  const myModal = new bootstrap.Modal(
    document.getElementById("modalToAddTask")
  );

  myModal.hide();
};

// edit submitted task
const editTaskFunction = (taskToEdit) => {
  // open the modal for editing
  openModalFunction();

  // Populate the modal with the details from the taskToEdit
  const titleValue = taskToEdit.querySelector("h3").textContent;

  //
  modalTitleInput.value = titleValue;

  // add a click event listener to the within the modal
  modalAddTaskButton.addEventListener("click", () => {
    saveEditedTaskFunction(taskToEdit);
  });
};

//
const saveEditedTaskFunction = (taskToEdit) => {
  const editedTaskValue = modalTitleInput.value;

  taskToEdit.querySelector("h3").textContent = editedTaskValue;

  // close the modal
  closeModalFunction();

  // clear the modal input fields
  modalTitleInput.value = "";
  modalDueDateInput.value = "";
  modalDescriptionInput.value = "";
};

// create task div elements
const createContainerToDisplayTask = () => {
  const taskDiv = document.createElement("div");
  taskDiv.className = "row p-3 border border-danger";
  taskDiv.style.backgroundColor = "#33EA73";
  taskDiv.style.color = "#649272";

  // create seperate element for display tiles
  const titleElement = document.createElement("h3");
  titleElement.textContent = `Title: ${modalTitleInput.value}`;
  taskDiv.appendChild(titleElement);

  // create seperate element for display due date
  const dueDateElement = document.createElement("p");
  dueDateElement.textContent = `Due Date: ${modalDueDateInput.value}`;
  taskDiv.appendChild(dueDateElement);

  // create seperate element for display description
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = `Description: ${modalDescriptionInput.value}`;
  taskDiv.appendChild(descriptionElement);

  // create a container for edit and delete icons
  const editAndDeleteElement = document.createElement("div");

  // create an edit icon element
  const editElement = document.createElement("i");
  editElement.className = "fa-solid fa-pen-to-square p-3";
  editAndDeleteElement.appendChild(editElement);
  // add an event handler for the editElement icon
  editElement.addEventListener("click", () => {
    editTaskFunction(taskDiv);
  });

  // create a delete icon element
  const deleteElement = document.createElement("i");
  deleteElement.className = "fa-solid fa-trash";
  editAndDeleteElement.appendChild(deleteElement);
  // add an event listener to the deleteElement icon
  deleteElement.addEventListener("click", () => {
    deleteTaskFunction(taskDiv);
  });

  // append icons container to taskDiv
  taskDiv.appendChild(editAndDeleteElement);

  // append taskDiv to displayTasksRow
  displayTasksBox.appendChild(taskDiv);

  // clear the modal input fields
  modalTitleInput.value = "";
  modalDueDateInput.value = "";
  modalDescriptionInput.value = "";

  return taskDiv;
};

// form validation
const formValidationFunction = () => {
  // clear previous error message
  errorMessages.length = 0;

  // get values from the elements
  const getTitleValue = modalTitleInput.value;
  const getDueDateValue = modalDueDateInput.value;
  const getDescriptionValue = modalDescriptionInput.value;

  // valdate task title
  if (!getTitleValue) {
    errorMessages.push("Task title is required!");
  } else if (getTitleValue.length > 99) {
    errorMessages.push("Title must be less than 100 characters.");
  }

  // validate due date
  try {
    const dateObj = new Date(getDueDateValue);
    console.log(dateObj);
    console.log(new Date());
    if (dateObj < new Date()) {
      errorMessages.push("Date cannot be in the past.");
    }
  } catch (error) {
    errorMessages.push("Invalid Due Date!");
  }

  // validate description
  if (!getDescriptionValue) {
    errorMessages.push("Description is required!");
  } else if (getDescriptionValue.length > 201) {
    errorMessages.push("Description must be less than 201 characters.");
  }

  // Display Error Messages
  if (errorMessages.length > 0) {
    // Display Error Message to the user
    alert(errorMessages.join("\n")); // Join multiple errors into a single alert
  } else {
    // form is valid, proceed with submission
    createContainerToDisplayTask(); //

    // clear the input fields
    modalTitleInput.value = "";
    modalDueDateInput.value = "";
    modalDescriptionInput.value = "";
  }
};

// Delete Submitted Tasks
const deleteTaskFunction = (taskToDelete) => {
  displayTasksBox.removeChild(taskToDelete);
};
