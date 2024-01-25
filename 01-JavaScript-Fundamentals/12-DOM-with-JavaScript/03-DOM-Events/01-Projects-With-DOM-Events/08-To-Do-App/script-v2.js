// To Do App'

// get document elements
const taskTitle = document.getElementById("taskTitle");
const dueDate = document.getElementById("dueDate");
const description = document.getElementById("description");
const addTaskBtn = document.getElementById("addTaskBtn");
const displayTasksRow = document.getElementById("displayTasksRow");

// create an error message array
const errorMessages = [];

// handle addTaskBtn
addTaskBtn.addEventListener("click", () => {
  formValidation();
});

// create task div elements
const createDisplayTaskRow = () => {
  const taskDiv = document.createElement("div");
  taskDiv.className = "row p-5 border border-danger";

  // create seperate element for display tiles
  const titleElement = document.createElement("h3");
  titleElement.textContent = taskTitle.value;
  taskDiv.appendChild(titleElement);

  // create seperate element for display due date
  const dueDateElement = document.createElement("p");
  dueDateElement.textContent = dueDate.value;
  taskDiv.appendChild(dueDateElement);

  // create seperate element for display description
  const descriptionElement = document.createElement("p");
  descriptionElement.textContent = description.value;
  taskDiv.appendChild(descriptionElement);

  // create a container for edit and delete icons
  const editAndDeleteElement = document.createElement("div");

  // create an edit icon element
  const editElement = document.createElement("i");
  editElement.className = "fa-solid fa-pen-to-square";
  editAndDeleteElement.appendChild(editElement);

  // create a delete icon element
  const deleteElement = document.createElement("i");
  deleteElement.className = "fa-solid fa-trash";
  editAndDeleteElement.appendChild(deleteElement);

  // append icons container to taskDiv
  taskDiv.appendChild(editAndDeleteElement);

  // append taskDiv to displayTasksRow
  displayTasksRow.appendChild(taskDiv);

  return taskDiv;
};

// form validation
const formValidation = () => {
  // get values from the elements
  const getTitle = taskTitle.value;
  const getDueDate = `Due Date: ${dueDate.value}`;
  const getDescription = description.value;

  // valdate task title
  if (!getTitle) {
    errorMessages.push("Task title is required!");
  } else if (getTitle.length > 99) {
    errorMessages.push("Title must be less than 100 characters.");
  }

  // validate due date
  try {
    const dateObj = new Date(getDueDate);
    console.log(dateObj);
    console.log(new Date());
    if (dateObj < new Date()) {
      errorMessages.push("Date cannot be in the past.");
    }
  } catch (error) {
    errorMessages.push(
      "Invalid due date. Please enter a valid date in YYYY-MM-DD format."
    );
  }

  // validate description
  if (!getDescription) {
    errorMessages.push("Description is required!");
  } else if (getDescription.length > 201) {
    errorMessages.push("Description must be less than 201 characters.");
  }

  // Display Error Messages
  if (errorMessages.length > 0) {
    // Display Error Message to the user
    alert(errorMessages.join("\n")); // Join multiple errors into a single alert
  } else {
    // form is valid, proceed with submission
    createDisplayTaskRow(); //

    // clear the input fields
    taskTitle.value = "";
    dueDate.value = "";
    description.value = "";
  }
};
