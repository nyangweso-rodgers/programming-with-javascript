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
  titleElement.innerHTML = `Title: ${latestEntry.title}`;

  const dueDateElement = document.createElement("p");
  dueDateElement.innerHTML = `Due Date: ${latestEntry.dueDate}`;

  const descriptionElement = document.createElement("p");
  descriptionElement.innerHTML = `Description: ${latestEntry.description}`;

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

// define a funcgion to validate the form
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

//TODO: Vvalidate the three form input fields seperately

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
