# ToDo App

![](./images/to-do-list-apps.png)

## Table Of Contents

- [ToDo App](#todo-app)
  - [Table Of Contents](#table-of-contents)
- [Objective](#objective)
- [Steps to building a Todo App with JavaScript](#steps-to-building-a-todo-app-with-javascript)
  - [Step 1:Retrieve HTML Element References](#step-1retrieve-html-element-references)
  - [Step 2: Handle Form Validations](#step-2-handle-form-validations)
  - [Step 3: Handling Form Submission Data](#step-3-handling-form-submission-data)
  - [Step 4: Clear Form After Submission](#step-4-clear-form-after-submission)
  - [Step 6: Implement Delete Functionality](#step-6-implement-delete-functionality)
  - [Step 7: Implement Edit Functionality](#step-7-implement-edit-functionality)
  - [Step 9: Attach Event Listener](#step-9-attach-event-listener)
- [Bonus Content](#bonus-content)
  - [1. Deploy Application to Vercel](#1-deploy-application-to-vercel)
  - [2. Dockerize the application](#2-dockerize-the-application)
  - [3. Consider Frontend Framework](#3-consider-frontend-framework)
- [Next Steps](#next-steps)
- [Resources and References](#resources-and-references)

# Objective

- To learn CRUD (Create, Read, Update, Delete) Operations in JavaScript by building a Todo App.

# Steps to building a Todo App with JavaScript

- The steps outlined covers various functionalities including adding,editing, and deleting tasks, as well as form validations.
- We structure the code in a such away that it seperate various concerns. Functions are defined to handle specific tasks, such as validation, creation,deletion and, editing of tasks.

## Step 1:Retrieve HTML Element References

- Obtain references to the form, input fields, and error message elements using `document.getElementById`.

  ```js
  // ToDo App

  // get document elements
  const modalFormToAddTasks = document.getElementById("modalFormToAddTasks");
  const modalTitleInput = document.getElementById("modalTitleInput");
  const modalDueDateInput = document.getElementById("modalDueDateInput");
  const modalDescriptionInput = document.getElementById(
    "modalDescriptionInput"
  );

  // get elements for displaying error messages
  const titleErrorElement = document.getElementById("titleErrorElement");
  const dueDateErrorElement = document.getElementById("dueDateErrorElement");
  const descriptionErrorElement = document.getElementById(
    "descriptionErrorElement"
  );

  // get task container element
  const tasksContainer = document.querySelector(".tasks-container");
  ```

## Step 2: Handle Form Validations

- We define three seperate validation functions (`validateModalTitleInput`, `validateModalDueDateInput`, and `validateModalDescriptionInput`) to check for empty inputs, inputs lengths, and due dates. Task due date should not be set in the past. You may consider enhancing the validation logic based on your specific requirements.

- `validateModalTitleInput` function ensures the `title` is not blank, not too long, and displays appropriate error messages..
  ```js
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
  ```
- `validateModalDueDateInput` function validates the **due date** format, prevents past dates, and handles invalid input.
  ```js
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
  ```
- `validateModalDescriptionInput` function checks for blank descriptions and enforces a character limit.
  ```js
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
  ```
- We can define an **helper function**, `validateModalForm`, for the above 3 seperate functions:
  ```js
  //TODO: define a helper function that consolidates the logic of 3 validation functions for the title, due date and description
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
  ```

## Step 3: Handling Form Submission Data

- We define, `createAndDisplayTasks()` function to handle form submission with validation. The function stores submitted tasks data in `modalFormData` array. And then dynamically, creates tasks items in HTML:

  ```js
  //TODO: define createAndDisplayTasks function to handle submitted tasks
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
      newTaskDiv.classList.add("task-item", "p-3");
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
  ```

- **Remarks**:
  - It's generally considered better practice to define an array, like `modalFormData`, outside the `modalFormValidation` function and push inputs into it within the function, rather than defining it inside the function. Here's why:
    - **Scope and Reusability**: The array remains accessible outside the function, allowing you to use it for other purposes or potentially pass it between functions if needed.
    - **Initialization**: Creating the empty array outside ensures it's always initialized even if the validation fails the first time.
    - **Clarity**: It separates data storage from the validation logic, making the code more readable and maintainable.

## Step 4: Clear Form After Submission

- We define `clearFormFields` function which clears the form fields and any error messages after form submission. The goal is to improve user experience by resetting the form for the next entry.

  ```js
  //TODO: Define clearFormFields function to clear the form inputs after data submission
  const clearFormFields = () => {
    modalTitleInput.value = "";
    modalDueDateInput.value = "";
    modalDescriptionInput.value = "";

    // reset any error message
    titleErrorElement.innerHTML = "";
    dueDateErrorElement.innerHTML = "";
    descriptionErrorElement.innerHTML = "";
  };
  ```

## Step 6: Implement Delete Functionality

- We define `deleteTask` function which removes task(s) from both UI and `modalFormData` array. The goal is to ensure consistency between the displayed tasks and the data structure.

  ```js
  //TODO: Define deleteTask Function to delete submitted tasks
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
  ```

- attach the `deleteTask` function to the `tasksContainer`:
  ```js
  tasksContainer.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("delete-icon")) {
      deleteTask(clickedElement.closest(".task-item"));
    }
  });
  ```

## Step 7: Implement Edit Functionality

- The edit functionality allows users to modify existing tasks. When an edit icon is clicked, the form fields are pre-filled with the task data, enabling easy editing. After editing, the task data is updated in both the UI and the `modalFormData` array.
- First, we define `handleEditTask` function to pre-fill the modal form with the task data when the edit icon is clicked:

  ```js
  //TODO: Define editTask Function to edit submitted functions
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
  ```

- Secondly, we update the event listener to call `handleEditTask` when the edit icon is clicked
  ```js
  // update the event listener to call handleEditTask when the edit icon is clicked:
  tasksContainer.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("edit-icon")) {
      handleEditTask(clickedElement.closest(".task-item"));
    }
  });
  ```
- Finally, we define `handleEditFormSubmission` function to update the task item content when the form is submitted

  ```js
  // implement the handleEditFormSubmission function to update the task item content when the form is submitted:
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
  ```

## Step 9: Attach Event Listener

- Final step is to attach an event listener to the `modalFormToAddTasks` form element.

  ```js
  // Attach event listener
  modalFormToAddTasks.addEventListener("submit", (event) => {
    event.preventDefault(); // prevent default form submission

    if (validateModalForm()) {
      createAndDisplayTasks();
    }
  });
  ```

# Bonus Content

## 1. Deploy Application to Vercel

- [Live Preview](https://building-a-to-do-app-with-javascript.vercel.app/)
- [GitHub Repository](https://github.com/nyangweso-rodgers/Programming-with-JavaScript/tree/main/05-Building-Web-Apps-With-JavaScript/02-ToDo-App)

## 2. Dockerize the application

## 3. Consider Frontend Framework

- If you're building a larger app, using a framework like **React** or **Vue** for component-based structure and state management could be beneficial.

# Next Steps

- Create the ToDo App with Next.js and Persist data in a MongoDB collection.

# Resources and References

1. [getbootstrap.com - Modal](https://getbootstrap.com/docs/5.0/components/modal/)
2. [freecodecamp - Learn CRUD Operations in JavaScript by Building TODO APP](https://www.freecodecamp.org/news/learn-crud-operations-in-javascript-by-building-todo-app/)
