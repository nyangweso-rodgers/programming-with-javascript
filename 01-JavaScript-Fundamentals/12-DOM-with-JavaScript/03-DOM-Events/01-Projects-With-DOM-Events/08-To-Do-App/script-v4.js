// To Do App

// get document elements
const modalTitleInput = document.getElementById("modalTitleInput");
const modalDueDateInput = document.getElementById("modalDueDateInput");
const modalDescriptionInput = document.getElementById("modalDescriptionInput");
const modalButtonToAddTask = document.getElementById("modalButtonToAddTask");
const containerToDisplayTasks = document.getElementById(
  "containerToDisplayTasks"
);
// create an array of modal inputs
const arrayForModalDataInputs = [];

// define function to get data inputs from the modal form
const functionToGetModalInputs = () => {
  return {
    title: modalTitleInput.value,
    dueDate: modalDueDateInput.value,
    description: modalDescriptionInput.value,
  };
};

// function to store modal data inputs into arrayForModalFormData array
const functionToStoreFormData = (modalFormInput) => {
  arrayForModalDataInputs.push(modalFormInput);
};

// define a fuction to clear modal form data fields
const functionToClearModalFormData = () => {
  modalTitleInput.value = "";
  modalDueDateInput.value = "";
  modalDescriptionInput.value = "";
};

// define a function to display listed tasks
const functionToDisplayTasks = () => {
  // clear existing content
  containerToDisplayTasks.innerHTML = "";

  // iterate through the array of tasks
  arrayForModalDataInputs.forEach((task) => {
    // create a div to display tasks
    const divToDisplayTasks = document.createElement("div");
    divToDisplayTasks.className = "row border border-primary p-3";

    // create a document fragment
    const fragment = document.createDocumentFragment();

    // create an element to display title
    const titleElement = document.createElement("h3");
    titleElement.textContent = `Title: ${task.title}`;
    fragment.appendChild(titleElement);

    // create an element to display due date
    const dueDateElement = document.createElement("h4");
    dueDateElement.textContent = `Due Date: ${task.dueDate}`;
    fragment.appendChild(dueDateElement);

    // create an element to display task description
    const descriptionElement = document.createElement("p");
    descriptionElement.textContent = `${task.description}`;
    fragment.appendChild(descriptionElement);

    // create edit icon with font-awesome
    const editIcon = document.createElement("i");
    editIcon.className = "fa-solid fa-pen-to-square p-3";
    fragment.appendChild(editIcon);

    // create delete icon with font-awesome
    const deleteIcon = document.createElement("i");
    deleteIcon.className = "fa-solid fa-trash";
    fragment.appendChild(deleteIcon);

    // append the document fragment to the container
    divToDisplayTasks.appendChild(fragment);

    containerToDisplayTasks.appendChild(divToDisplayTasks);

    // add event listeners to delete icon
    deleteIcon.addEventListener("click", () => {
      functionToDeleteDisplayedTask(divToDisplayTasks);
    });

    // add event listeners to edit icons
    editIcon.addEventListener("click", () => {
      functionToEditDisplayedTask(divToDisplayTasks);
    });
  });
  return containerToDisplayTasks;
};

// define a function delete displayed tasks
const functionToDeleteDisplayedTask = (deleteDisplayedTask) => {
  containerToDisplayTasks.removeChild(deleteDisplayedTask);
};

// define a function to edit displayed tasks
const functionToEditDisplayedTask = (editDisplayedTask) => {
  // extract displayed tasks
  const title = editDisplayedTask.querySelector("h3").textContent;
  const dueDate = editDisplayedTask.querySelector("h4").textContent;
  const description = editDisplayedTask.querySelector("p").textContent;

  // populate the modal form with task data
  modalTitleInput.value = title;
  modalDueDateInput.value = dueDate;
  modalDescriptionInput.value = description;

  // show the modal for editing
  functionToOpenModal();

  // add an event listener to handle the update
  modalButtonToAddTask.removeEventListener(
    "click",
    functionToHandleModalInputs
  );
  modalButtonToAddTask.addEventListener("click", () => {
    // update the existing task with new data
    const updatedTask = functionToGetModalInputs();
    // You need to determine the index of the task in your array and update it
    // For simplicity, let's assume you have a variable selectedIndex to store the index
    arrayForModalDataInputs[selectedIndex] = updatedTask;

    // clear the modal form and display updated tasks
    functionToClearModalFormData();
    functionToDisplayTasks();

    // close the modal
    functionToCloseModal();
  });
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
// define function to handle input fields from the Modal
const functionToHandleModalInputs = () => {
  const modalInputData = functionToGetModalInputs();
  functionToStoreFormData(modalInputData);
  functionToClearModalFormData();
  functionToDisplayTasks();

  console.log(arrayForModalDataInputs);
};

// add event handler to the functionToHandleModalInputs function
modalButtonToAddTask.addEventListener("click", () => {
  functionToHandleModalInputs();
});
