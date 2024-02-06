// To Do App

// get document elements
const modalTitleInput = document.getElementById("modalTitleInput");
const modalDueDateInput = document.getElementById("modalDueDateInput");
const modalDescriptionInput = document.getElementById("modalDescriptionInput");
const modalAddTaskButton = document.getElementById("modalAddTaskButton");
const containerToDisplayTasks = document.getElementById(
  "containerToDisplayTasks"
);

// create an error message array
const errorMessagesArray = [];
// create an array of modal inputs
const arrayForModalFormData = [];

modalAddTaskButton.addEventListener("click", () => {
  functionToHandleModalFormInput();
});

// Function to handle form input changes
const functionToHandleModalFormInput = () => {
  const modalFormData = functionTogetDataFromModalForm();

  if (functionToValidateFormInputs(modalFormData)) {
    functionToStoreFormData(modalFormData);
    functionToclearFormDataFields();
    functionToDisplayTaks();
  } else {
    alert("Please fill in all the required fields");
  }

  //console.log(modalFormData);
};

// Function to get form input data
const functionTogetDataFromModalForm = () => {
  return {
    title: modalTitleInput.value.trim(),
    dueDate: modalDueDateInput.value.trim(),
    description: modalDescriptionInput.value.trim(),
  };
};
// Function to store form data
const functionToStoreFormData = (modalFormData) => {
  arrayForModalFormData.push(modalFormData);
  console.log(arrayForModalFormData);
};

// Function to clear form fields
const functionToclearFormDataFields = () => {
  modalTitleInput.value = "";
  modalDueDateInput.value = "";
  modalDescriptionInput.value = "";
};

// define a function to delete a task
const functionToDeleteTask = (deleteModalFormData) => {
  containerToDisplayTasks.removeChild(deleteModalFormData);
};

// define a function to edit a task
const functionToEditTask = (editModalFormData) => {
  // Extract submitted tasks details
  modalTitleInput.value = editModalFormData.querySelector("h3").textContent;
  modalDueDateInput.value = editModalFormData.querySelector("h4").textContent;
  modalDescriptionInput.value = editModalFormData.querySelector("p").textContent;

  // open the modal for editing
  functionToOpenModal();

  //
  modalAddTaskButton.removeEventListener("click", saveEditedTaskFunction);

  // add an event listener to the modalAddTaskButton for saving the edited task
  modalAddTaskButton.addEventListener("click", () => {
    saveEditedTaskFunction(editModalFormData);
  });
};

// define a function to save edited tasks
const saveEditedTaskFunction = (editedTaskContainer) => {
  // Find the index of the edited task in the array
  const indexOfEditedTask = arrayForModalFormData.indexOf(
    arrayForModalFormData.find((item) => item.container === editedTaskContainer)
  );

  // Update the values of the edited task with the new values from the modal inputs
  editedTaskContainer.querySelector(
    "h3"
  ).textContent = `Title: ${modalTitleInput.value}`;
  editedTaskContainer.querySelector(
    "h4"
  ).textContent = `Due Date: ${modalDueDateInput.value}`;
  editedTaskContainer.querySelector("p").textContent =
    modalDescriptionInput.value;

  // update the task data in the array with the new values
  arrayForModalFormData[indexOfEditedTask] = {
    title: modalTitleInput.value,
    dueDate: modalDueDateInput.value,
    description: modalDescriptionInput.value,
  };

  functionToDisplayTaks(); // Re-render tasks

  // close the  modal after saving the changes
  functionToCloseModal();

  // clear the modal input fields
  functionToclearFormDataFields();
};

// define a function to open the modal dialog
const functionToOpenModal = () => {
  const myModal = new bootstrap.Modal(
    document.getElementById("modalToAddTask")
  );
  myModal.show();
};

// define a function to close Modal
const functionToCloseModal = () => {
  const myModal = new bootstrap.Modal(
    document.getElementById("modalToAddTask")
  );
  myModal.hide();
};

// function to display tasks
const functionToDisplayTaks = () => {
  // clear existing content
  containerToDisplayTasks.innerHTML = "";

  arrayForModalFormData.forEach((modalFormData) => {
    const divToDisplayTasks = document.createElement("div");
    divToDisplayTasks.className = "row border border-primary p-3";

    // create a document fragment
    const fragment = document.createDocumentFragment();

    // create an element to display title
    const titleElement = document.createElement("h3");
    titleElement.textContent = `Title: ${modalFormData.title}`;
    fragment.appendChild(titleElement);

    // create an element to display due date
    const dueDateElement = document.createElement("h4");
    dueDateElement.textContent = `Due Date: ${modalFormData.dueDate}`;
    fragment.appendChild(dueDateElement);

    // create an element to display task description
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = `${modalFormData.description}`;
    fragment.appendChild(descriptionElement);

    // create an edit icon
    const editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pen-to-square p-3";
    fragment.appendChild(editIcon);

    // create delete icon
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash";
    fragment.appendChild(deleteIcon);

    // append the document fragment to the container
    divToDisplayTasks.appendChild(fragment);

    // add event listeners to delete and edit icons
    deleteIcon.addEventListener("click", () => {
      functionToDeleteTask(divToDisplayTasks);
    });

    editIcon.addEventListener("click", () => {
      functionToEditTask(divToDisplayTasks);
    });

    containerToDisplayTasks.appendChild(divToDisplayTasks);

    //return divToDisplayTasks;
  });
};
