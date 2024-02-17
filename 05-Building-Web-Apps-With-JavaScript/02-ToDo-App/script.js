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

// validate task title
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

// validate due date
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

// validate description
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

// define an array to store the form inputs
let modalFormData = [];

const modalFormValidation = (event) => {
  event.preventDefault(); // prevent default form submission

  const modalTitleInputIsValid = validateModalTitleInput(modalTitleInput.value);
  const modalDueDateInputIsValid = validateModalDueDateInput(
    modalDueDateInput.value
  );
  const modalDescriptionInputIsValid = validateModalDescriptionInput(
    modalDescriptionInput.value
  );

  if (
    modalTitleInputIsValid &&
    modalDueDateInputIsValid &&
    modalDescriptionInputIsValid
  ) {
    // Hanlde form submission

    // Call a separate helper function for clearing
    clearFormFields();

    // create a data object
    const newModalFormEntry = {
      title: modalTitleInput.value,
      dueDate: modalDueDateInput.value,
      description: modalDescriptionInput.value,
    };
    // push data into array
    modalFormData.push(newModalFormEntry);

    // do something with the modalFormData
    console.log("Form submitted successfully! Data:", modalFormData);

    // create a new task element
    const newTaskDiv = document.createElement("div");
    newTaskDiv.classList.add("task-item", "border", "border-primary", "p-3");

    // populate content based on data
    const latestEntry = modalFormData[modalFormData.length];
    newTaskDiv.innerHTML = `<h3>Title: ${latestEntry.title}</h3> <p>Due Date: ${latestEntry.dueDate}</p>
    <p>Description: ${latestEntry.description}</p><div class="task-actions"></div>`;

    // append the new task to the container
    tasksContainer.appendChild(newTaskDiv);

    // create then editIcon element
    const editIcon = document.createElement("i");
    editIcon.className = "fas fa-edit edit-icon";
    // Append the edit icon to the .task-actions element
    newTaskDiv.querySelector(".task-actions").appendChild(editIcon);

    // Create the delete icon element
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fas fa-trash delete-icon";
    // Append the delete icon after the edit icon
    newTaskDiv.querySelector(".task-actions").appendChild(deleteIcon);
  } else {
    // Display an appropriate message if form submission is blocked due to errors
    console.log("Form submission failed due to validation errors!");
    // You can also display an alert or message to the user here
  }
};
// Attach event listener
modalFormToAddTasks.addEventListener("submit", modalFormValidation);

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

// define delete task functionality
const handleDeleteTask = (taskItemToDelete) => {
  tasksContainer.removeChild(taskItemToDelete);
};
// attach an event handler to delete a task
tasksContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("delete-icon")) {
    handleDeleteTask(clickedElement.closest(".task-item"));
  }
});

// Add event listener for edit icon clicks
tasksContainer.addEventListener("click", (event) => {
  const clickedElement = event.target;
  if (clickedElement.classList.contains("edit-icon")) {
    handleEditTask(clickedElement.closest(".task-item"));
  }
});
// define function to handle edit form submission
const handleEditFormSubmission = (event) => {
  event.preventDefault();

  // Validate the updated data (reuse existing validation functions)
  if (
    validateModalTitleInput(modalDueDateInput.value) &&
    validateModalDueDateInput(modalDueDateInput.value) &&
    validateModalDescriptionInput(modalDescriptionInput.value)
  ) {
    // Update the task data in the array
    const index = modalFormData.findIndex(
      (task) => task.title === taskData.title
    ); // assuming title is unique
    modalFormData[index] = {
      title: modalTitleInput.value,
      dueDate: modalDueDateInput.value,
      description: modalDescriptionInput.value,
    };
    // Update the task item content in the HTML
    taskItemToEdit.querySelector("h3").textContent = modalTitleInput.value;
    taskItemToEdit.querySelector("p:nth-child(2)").textContent =
      modalDueDateInput.value;
    taskItemToEdit.querySelector("p:nth-child(3)").textContent =
      modalDescriptionInput.value;

    // Hide the modal
    modalFormToAddTasks.style.display = "none";

    // Clear form fields
    clearFormFields();

    // Remove the specific submit event listener for editing
    modalFormToAddTasks.removeEventListener("submit", handleEditFormSubmission);
  } else {
    // Handle validation errors
  }
};
// Define function to handle task editing
const handleEditTask = (taskItemToEdit) => {
  // get the task data from the task item
  const taskData = {
    title: taskItemToEdit.querySelector("h3").textContent.trim(),
    dueDate: taskItemToEdit.querySelector("p:nth-child(2)").textContent.trim(),
    description: taskItemToEdit
      .querySelector("p:nth-child(3)")
      .textContent.trim(),
  };

  // pre-fill the modal form with the task data
  modalTitleInput.value = taskData.title;
  modalDueDateInput.value = taskData.dueDate;
  modalDescriptionInput.value = taskData.description;

  // Show the modal
  modalFormToAddTasks.style.display = "block";

  // Add a submit event listener specifically for editing
  modalFormToAddTasks.addEventListener("submit", handleEditFormSubmission);
};