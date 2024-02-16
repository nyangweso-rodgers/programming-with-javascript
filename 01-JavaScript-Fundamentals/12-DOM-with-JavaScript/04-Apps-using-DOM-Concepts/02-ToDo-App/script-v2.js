// ToDo App

// get document elements
const modalFormToAddTasks = document.getElementById("modalFormToAddTasks");
const modalTitleInput = document.getElementById("modalTitleInput");
const modalDueDateInput = document.getElementById("modalDueDateInput");
const modalDescriptionInput = document.getElementById("modalDescriptionInput");

// get elements for displaying error messages
const titleErrorElement = document.getElementById("titleErrorElement");
const dueDateErrorElement = document.getElementById("dueDateErrorElement");
const descriptionErrorElement = document.getElementById(
  "descriptionErrorElement"
);

// get task container element
const tasksContainer = document.querySelector(".tasks-container");

// Attach event listener
modalFormToAddTasks.addEventListener("submit", (event) => {
  event.preventDefault(); // prevent default form submission

  if (validateModalForm()) {
    createAndDisplayTasks();
  }
});
// define an array to store the form inputs
let modalFormData = [];

/*
// create and display submitted tasks
let createAndDisplayTasks = () => {
  modalFormData.push({
    title: modalTitleInput.value,
    dueDate: modalDueDateInput.value,
    description: modalDescriptionInput.value,
  });

  const newTaskDiv = document.createElement("div");
  newTaskDiv.classList.add("task-item", "border", "border-primary", "p-3");

  // populate content based on data
  const latestEntry = modalFormData[modalFormData.length - 1];

  const titleElement = document.createElement("h3");
  titleElement.innerHTML = `${latestEntry.title}`;

  const dueDateElement = document.createElement("p");
  dueDateElement.innerHTML = `${latestEntry.dueDate}`;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = `${latestEntry.description}`;

  // Create edit icon element with styles (optional)
  const editIcon = document.createElement("i");
  editIcon.classList.add("fas", "fa-edit", "edit-icon");
  editIcon.style.cursor = "pointer"; // Optional: add hover/clickable behavior

  // Create the delete icon element
  const deleteIcon = document.createElement("i");
  deleteIcon.className = "fas fa-trash delete-icon";

  const editAndDeleteElement = document.createElement("span");
  editAndDeleteElement.appendChild(editIcon);
  editAndDeleteElement.appendChild(deleteIcon);

  // append the new task to the container
  newTaskDiv.appendChild(titleElement);
  newTaskDiv.appendChild(dueDateElement);
  newTaskDiv.appendChild(descriptionElement);
  newTaskDiv.appendChild(editAndDeleteElement);
  tasksContainer.appendChild(newTaskDiv);

  clearFormFields();
  console.log("modalFormData:", modalFormData); //TODO: log submitted form data
};
*/
let createAndDisplayTasks = (taskData) => {
  if (taskData) {
    // If taskData is provided, it means we're editing an existing task
    const taskItemToEdit = tasksContainer.querySelector(
      `[data-title="${taskData.title}"]`
    );
    if (taskItemToEdit) {
      // Update the existing task item with the edited data
      taskItemToEdit.querySelector("p:nth-child(2)").textContent =
        taskData.dueDate;
      taskItemToEdit.querySelector("p:nth-child(3)").textContent =
        taskData.description;
    }

    // Update the task data in modalFormData
    const index = modalFormData.findIndex(
      (task) => task.title === taskData.title
    );
    if (index !== -1) {
      modalFormData[index] = taskData;
    }
  } else {
    // If taskData is not provided, it means we're creating a new task
    // Push the new task data into the modalFormData array
    const newTaskData = {
      title: modalTitleInput.value,
      dueDate: modalDueDateInput.value,
      description: modalDescriptionInput.value,
    };
    modalFormData.push(newTaskData);

    // Create new task item and append it to the tasksContainer
    const newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("task-item", "border", "border-primary", "p-3");
    newTaskDiv.setAttribute("data-title", newTaskData.title);

    // Populate content based on the latest entry in modalFormData
    const titleElement = document.createElement("h3");
    titleElement.innerHTML = newTaskData.title;

    const dueDateElement = document.createElement("p");
    dueDateElement.innerHTML = newTaskData.dueDate;

    const descriptionElement = document.createElement("p");
    descriptionElement.innerHTML = newTaskData.description;

    // Create edit icon element with styles (optional)
    const editIcon = document.createElement("i");
    editIcon.classList.add("fas", "fa-edit", "edit-icon");
    editIcon.style.cursor = "pointer"; // Optional: add hover/clickable behavior

    // Create the delete icon element
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash delete-icon";

    const editAndDeleteElement = document.createElement("span");
    editAndDeleteElement.appendChild(editIcon);
    editAndDeleteElement.appendChild(deleteIcon);

    // Append elements to the new task div
    newTaskDiv.appendChild(titleElement);
    newTaskDiv.appendChild(dueDateElement);
    newTaskDiv.appendChild(descriptionElement);
    newTaskDiv.appendChild(editAndDeleteElement);

    // Append the new task div to the tasksContainer
    tasksContainer.appendChild(newTaskDiv);
  }

  // Clear form fields and display the submitted form data
  clearFormFields();
  console.log("modalFormData:", modalFormData);
};

// define a helper function that consolidates the logic of 3 validation functions for the title, due date and description
let validateModalForm = () => {
  if (
    validateModalTitleInput(modalTitleInput.value) &&
    validateModalDueDateInput(modalDueDateInput.value) &&
    validateModalDescriptionInput(modalDescriptionInput.value)
  ) {
    return true; // Indicate successful validation
  } else {
    // Display an appropriate message if form submission is blocked due to errors
    console.log("Form submission failed due to validation errors!"); // You can also display an alert or message to the user here}
    return false; // Indicate validation errors
  }
};

// clear form fields
const clearFormFields = () => {
  modalTitleInput.value = "";
  modalDueDateInput.value = "";
  modalDescriptionInput.value = "";

  // reset any error message
  titleErrorElement.innerHTML = "";
  dueDateErrorElement.innerHTML = "";
  descriptionErrorElement.innerHTML = "";
};

//ToDo: define a

//TODO: Define deleteTask Function
/*
const deleteTask = (taskItemToDelete) => {
  tasksContainer.removeChild(taskItemToDelete);
  //modalFormData.splice(taskItemToDelete.id, 1);
  console.log("Form Data After Deletion: ", modalFormData); // Output after deletion
};
*/
const deleteTask = (taskItemToDelete) => {
  // Find the index of the task to delete in modalFormData
  const index = modalFormData.findIndex(
    (task) => task.title === taskItemToDelete.querySelector("h3").textContent
  );
  if (index !== -1) {
    // Remove the task from modalFormData
    modalFormData.splice(index, 1);
    console.log("Form Data After Deletion: ", modalFormData); // Output after deletion
  }

  // Remove the task item from the DOM
  tasksContainer.removeChild(taskItemToDelete);
};

// setup delete event listener
tasksContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("delete-icon")) {
    deleteTask(clickedElement.closest(".task-item"));
  }
});

//TODO: Define editTask Function
// define handleEditTask function to pre-fill the modal form with the task data when the edit icon is clicked:
const handleEditTask = (taskItemToEdit) => {
  // get the task data from the task item
  const taskData = {
    title: taskItemToEdit.querySelector("h3").textContent,
    dueDate: taskItemToEdit.querySelector("p:nth-child(2)").textContent,
    description: taskItemToEdit.querySelector("p:nth-child(3)").textContent,
  };

  // pre-fill the modal form with the task data
  modalTitleInput.value = taskData.title;
  modalDueDateInput.value = taskData.dueDate;
  modalDescriptionInput.value = taskData.description;

  // Show the modal
  const modal = bootstrap.Modal.getInstance(modalFormToAddTasks);
  modal.show();

  // Remove any existing submit event listener and add a new one
  //modalFormToAddTasks.removeEventListener("submit", handleEditFormSubmission);
  //modalFormToAddTasks.addEventListener("submit", handleEditFormSubmission);
};

// update the event listener to call handleEditTask when the edit icon is clicked:
tasksContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("edit-icon")) {
    handleEditTask(clickedElement.closest(".task-item"));
  }
});

// implement the handleEditFormSubmission function to update the task item content when the form is submitted:
/*
const handleEditFormSubmission = (event) => {
  event.preventDefault();

  // Get the task item to edit
  const taskItemToEdit = event.target.closest(".task-item");

  // Get the task data from the form
  const taskData = {
    title: modalTitleInput.value,
    dueDate: modalDueDateInput.value,
    description: modalDescriptionInput.value,
  };

  // Validate the updated data (reuse existing validation functions)
  if (validateModalForm) {
    // Call createAndDisplayTasks with edited task data
    createAndDisplayTasks(taskData);

    // Hide the modal
    const modal = bootstrap.Modal.getInstance(modalFormToAddTasks);
    modal.hide();
  } else {
    // Handle validation errors
  }
};
*/
/*
const handleEditFormSubmission = (event) => {
  event.preventDefault();

  // Get the task item to edit
  const taskItemToEdit = event.target.closest(".task-item");

  // Get the task data from the form
  const taskData = {
    title: modalTitleInput.value,
    dueDate: modalDueDateInput.value,
    description: modalDescriptionInput.value,
  };

  // Validate the updated data (reuse existing validation functions)
  if (validateModalForm()) {
    // Update the task item content in the HTML
    taskItemToEdit.querySelector("h3").textContent = taskData.title;
    taskItemToEdit.querySelector("p:nth-child(2)").textContent =
      taskData.dueDate;
    taskItemToEdit.querySelector("p:nth-child(3)").textContent =
      taskData.description;

    // Update modalFormData
    const index = modalFormData.findIndex(
      (task) => task.title === taskData.title
    );
    if (index !== -1) {
      modalFormData[index] = taskData;
    }

    // Hide the modal
    const modal = bootstrap.Modal.getInstance(modalFormToAddTasks);
    modal.hide();

    // Update modalFormData
    console.log("Updated modalFormData:", modalFormData);
  } else {
    // Handle validation errors
  }
};
*/
/*
const handleEditFormSubmission = (event) => {
  event.preventDefault();

  // Get the task item to edit
  const taskItemToEdit = event.target.closest(".task-item");

  // Get the task data from the form
  const taskData = {
    title: modalTitleInput.value,
    dueDate: modalDueDateInput.value,
    description: modalDescriptionInput.value,
  };

  // Validate the updated data (reuse existing validation functions)
  if (validateModalForm()) {
    // Delete the old task data from modalFormData
    deleteTask(taskItemToEdit);

    // Update the task item content in the HTML
    taskItemToEdit.querySelector("h3").textContent = taskData.title;
    taskItemToEdit.querySelector("p:nth-child(2)").textContent =
      taskData.dueDate;
    taskItemToEdit.querySelector("p:nth-child(3)").textContent =
      taskData.description;

    // Update modalFormData with the edited task data
    modalFormData.push(taskData);

    // Hide the modal
    const modal = bootstrap.Modal.getInstance(modalFormToAddTasks);
    modal.hide();
  } else {
    // Handle validation errors
  }
};*/

const handleEditFormSubmission = (event) => {
  event.preventDefault();

  // Get the task item to edit
  const taskItemToEdit = event.target.closest(".task-item");

  // Get the task data from the form
  const taskData = {
    title: modalTitleInput.value,
    dueDate: modalDueDateInput.value,
    description: modalDescriptionInput.value,
  };

  // Validate the updated data (reuse existing validation functions)
  if (validateModalForm()) {
    // Debug: Log the task data to check if it's correct
    console.log("Task Data:", taskData);

    // Debug: Log modalFormData before deletion
    console.log("Modal Form Data Before Deletion:", modalFormData);

    // Delete the old task data from modalFormData
    deleteTask(taskItemToEdit);

    // Debug: Log modalFormData after deletion
    console.log("Modal Form Data After Deletion:", modalFormData);

    // Update the task item content in the HTML
    taskItemToEdit.querySelector("h3").textContent = taskData.title;
    taskItemToEdit.querySelector("p:nth-child(2)").textContent =
      taskData.dueDate;
    taskItemToEdit.querySelector("p:nth-child(3)").textContent =
      taskData.description;

    // Update modalFormData with the edited task data
    modalFormData.push(taskData);

    // Debug: Log modalFormData after updating
    console.log("Modal Form Data After Updating:", modalFormData);

    // Hide the modal
    const modal = bootstrap.Modal.getInstance(modalFormToAddTasks);
    modal.hide();
  } else {
    // Handle validation errors
  }
};

//TODO: validate task title
const validateModalTitleInput = (titleInput) => {
  if (titleInput.trim() === "") {
    //alert("Title Input is blank!"); //TODO: uncomment to for an alert box to dipaly error message
    titleErrorElement.innerHTML = "Title cannot be blank!";
    return false;
  } else if (titleInput.length > 20) {
    titleErrorElement.innerHTML = "Title Input is too long!";
    return false;
  }
  // Clear any previous error message
  titleErrorElement.innerHTML = "";
  return true;
};

//TODO: validate due date
const validateModalDueDateInput = (dueDateInput) => {
  try {
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
    const dueDateObj = new Date(dueDateInput);
    dueDateObj.setHours(0, 0, 0, 0);
    if (dueDateObj < currentDate) {
      dueDateErrorElement.innerHTML = "Date cannot be in the past!";
      return false;
    }
    // Clear any previous error message
    dueDateErrorElement.innerHTML = "";
    return true;
  } catch (error) {
    dueDateErrorElement.innerHTML = "Invalid due date!";
    return false;
  }
};

//TODO: validate description
const validateModalDescriptionInput = (descriptionInput) => {
  if (descriptionInput.trim() == "") {
    descriptionErrorElement.innerHTML = "Description Input is blank!";
    return false;
  } else if (descriptionInput.length > 99) {
    descriptionErrorElement.innerHTML =
      "Description must be less than 100 characters!";
    return false;
  }
  // clear any previous description error message
  descriptionErrorElement.innerHTML = "";
  return true;
};
