// To Do App

// get document elements
const modalTitleInput = document.getElementById("modalTitleInput");
const modalDueDateInput = document.getElementById("modalDueDateInput");
const modalDescriptionInput = document.getElementById("modalDescriptionInput");
const modalSubmitButton = document.getElementById("modalSubmitButton");
const containerToDisplayTasks = document.getElementById(
  "containerToDisplayTasks"
);
// create an array of modal inputs
const data = [];

// define function to get data inputs from the modal form
const acceptData = () => {
  data.push({
    title: modalTitleInput.value,
    dueDate: modalDueDateInput.value,
    description: modalDescriptionInput.value,
  });
  console.log(data);

  createTasks();
};

// define a fuction to clear modal form data fields
const resetForm = () => {
  modalTitleInput.value = "";
  modalDueDateInput.value = "";
  modalDescriptionInput.value = "";
};

// define a function to display listed tasks
const createTasks = () => {
  // clear existing content
  containerToDisplayTasks.innerHTML = "";

  // iterate through the array of tasks
  data.forEach((task) => {
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
      deleteTask(divToDisplayTasks);
    });

    // add event listeners to edit icons
    editIcon.addEventListener("click", () => {
      editTask(divToDisplayTasks);
    });
  });
  resetForm();
};

// define a function delete displayed tasks
const deleteTask = (taskToDelete) => {
  containerToDisplayTasks.removeChild(taskToDelete);
  //taskToDelete.parentElement.remove(); //TODO: this will remove the entire container
};

// define a function to edit displayed tasks
const editTask = (taskToEdit) => {
  // 1. Get reference to edit icon within the task element
  const editIcon = taskToEdit.querySelector(".fa-pen-to-square");

  // 2. Toggle edit mode on click
  editIcon.addEventListener("click", () => {
    const taskTitle = taskToEdit.querySelector("h3").textContent.split(": ")[1]; // Extract title
    const taskDueDate = taskToEdit
      .querySelector("h4")
      .textContent.split(": ")[1]; // Extract due date
    const taskDescription = taskToEdit.querySelector("p").textContent; // Extract description

    // 3. Hide original display elements
    taskToEdit.querySelector("h3").style.display = "none";
    taskToEdit.querySelector("h4").style.display = "none";
    taskToEdit.querySelector("p").style.display = "none";
    editIcon.style.display = "none";

    // 4. Create editable input fields
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.value = taskTitle;

    const dueDateInput = document.createElement("input");
    dueDateInput.type = "date";
    dueDateInput.value = taskDueDate;

    const descriptionInput = document.createElement("textarea");
    descriptionInput.value = taskDescription;

    // 5. Create update button
    const updateButton = document.createElement("button");
    updateButton.textContent = "Update";

    // 6. Append input fields and update button to task element
    taskToEdit.appendChild(titleInput);
    taskToEdit.appendChild(dueDateInput);
    taskToEdit.appendChild(descriptionInput);
    taskToEdit.appendChild(updateButton);

    // 7. Add update button click handler
    updateButton.addEventListener("click", () => {
      // Update task data in array based on input values
      const updatedTask = {
        title: titleInput.value,
        dueDate: dueDateInput.value,
        description: descriptionInput.value,
      };

      // Replace existing task data in array
      const taskIndex = data.findIndex((task) => task.title === taskTitle);
      data[taskIndex] = updatedTask;

      // Re-render the task list with updated data
      createTasks();

      // 8. Restore original display elements and remove edit mode elements
      taskToEdit.querySelector("h3").textContent = `Title: ${titleInput.value}`;
      taskToEdit.querySelector("h3").style.display = "block";
      taskToEdit.querySelector(
        "h4"
      ).textContent = `Due Date: ${dueDateInput.value}`;
      taskToEdit.querySelector("h4").style.display = "block";
      taskToEdit.querySelector("p").textContent = descriptionInput.value;
      taskToEdit.querySelector("p").style.display = "block";
      editIcon.style.display = "inline-block";

      titleInput.remove();
      dueDateInput.remove();
      descriptionInput.remove();
      updateButton.remove();
    });
  });
};

// define a function to open the modal dialog
const openModal = () => {
  const myModal = new bootstrap.Modal(
    document.getElementById("modalToAddTask")
  );
  myModal.show();
};

// define a function to close Modal
const closeModal = () => {
  const myModal = new bootstrap.Modal(
    document.getElementById("modalToAddTask")
  );
  myModal.hide();
};

// Define a reusable function to populate the modal form fields:
const populateFormForEdit = (task) => {
  // populate the modal form with task data
  modalTitleInput.value = task.title;
  modalDueDateInput.value = task.dueDate;
  modalDescriptionInput.value = task.description;
};
submitTaskButton.addEventListener("click", () => {
  acceptData();
});
