# ToDo App

## Table Of Contents

# Objective

- Learn CRUD (Create, Read, Update, Delete) Operations in JavaScript by building a Todo App.

## Step 1:Retrieve Element References

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

## Step 2: Define Modal Form Validation Functions

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

## Step 3: Form Submission Handler

- define `modalFormValidation` function Prevents default form submission and coordinates validation by calling the 3 valdation functions for each input.

### Data Handling Option 2

- It's generally considered better practice to define the `modalFormData` array outside the `modalFormValidation` function and push inputs into it within the function, rather than defining it inside the function. Here's why:
  - **Scope and Reusability**: The array remains accessible outside the function, allowing you to use it for other purposes or potentially pass it between functions if needed.
  - **Initialization**: Creating the empty array outside ensures it's always initialized even if the validation fails the first time.
  - **Clarity**: It separates data storage from the validation logic, making the code more readable and maintainable.
- Here is how to adjust the code:

### Data Handling Option 3: Data Persistence: Using Local Storage

## Step 4: Display Elements to show Submitted Tasks

## Step 6: Implement Delete Functionality

- Implement logic for removing data from `modalFormData` and DOM on delete.

  ```js
  //TODO: Define deleteTask Function
  const deleteTask = (taskItemToDelete) => {
    tasksContainer.removeChild(taskItemToDelete);
    modalFormData.splice(taskItemToDelete.id, 1);
    console.log("Form Data After Deletion: ", modalFormData); // Output after deletion
  };
  ```

- Next, step is to attach an event handler to the `tasksContainer`:
  ```js
  tasksContainer.addEventListener("click", (event) => {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("delete-icon")) {
      deleteTask(clickedElement.closest(".task-item"));
    }
  });
  ```

## Step 7: Implement Edit Functionality

- Implement logic for pre-populating modal form on edit and updating data.
- Step #1:

  - create `handleEditTask` function to pre-fill the modal form with the task data when the edit icon is clicked:

    ```js
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

- Step #2:
  - next, update the event listener to call `handleEditTask` when the edit icon is clicked:
    ```js
    // update the event listener to call handleEditTask when the edit icon is clicked:
    tasksContainer.addEventListener("click", (event) => {
      const clickedElement = event.target;
      if (clickedElement.classList.contains("edit-icon")) {
        handleEditTask(clickedElement.closest(".task-item"));
      }
    });
    ```
- Step #3

  - Finally, implement the `handleEditFormSubmission` function to update the task item content when the form is submitted:

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
      if (validateModalForm) {
        // Update the task item content in the HTML
        taskItemToEdit.querySelector("h3").textContent = taskData.title;
        taskItemToEdit.querySelector("p:nth-child(2)").textContent =
          taskData.dueDate;
        taskItemToEdit.querySelector("p:nth-child(3)").textContent =
          taskData.description;

        // Hide the modal
        const modal = bootstrap.Modal.getInstance(modalFormToAddTasks);
        modal.hide();
      } else {
        // Handle validation errors
      }
    };
    ```

## Step 8: Implement A Function to clear modal form data fields after submission

## Step 9: Attach Event Listener

- Attache the `modalFormValidation` function to the form's `"submit"` event, ensuring validation runs when the form is submitted.
  ```js
  // Attach event listener
  modalFormToAddTasks.addEventListener("submit", modalFormValidation);
  ```

# Bonus Contents

## Dockerize the application

# Resources
