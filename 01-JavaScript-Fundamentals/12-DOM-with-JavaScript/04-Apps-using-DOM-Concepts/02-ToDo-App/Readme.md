# ToDo App

## Table Of Contents.

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

## Step 2: Define Validation Functions

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

  ```js
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
        // rest of the code
      }
  ```

### Data Handling Option 1

- We can push modal form inputs inside the `modalFormValidation` function. Pros of this approach include:
  - **Conditional creation**: Push inputs into the array only when validation is successful, avoiding unnecessary array modifications on failed attempts.
  - **Data encapsulation**: Keeps validated data within the validation function, potentially useful for modularity or security reasons in specific cases.
- Here is how to implement form handling:

  ```js
  const modalFormValidation = (event) => {
    event.preventDefault(); // prevent default form submission

    const modalTitleInputIsValid = validateModalTitleInput(
      modalTitleInput.value
    );
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
      // create a data array
      const modalFormData = {
        title: modalTitleInput.value,
        dueDate: modalDueDateInput.value,
        description: modalDescriptionInput.value,
      };
      // do something with the modalFormData
      console.log("Form submitted successfully! Data:", modalFormData);
    } else {
      // Display an appropriate message if form submission is blocked due to errors
      console.log("Form submission failed due to validation errors!");
      // You can also display an alert or message to the user here
    }
  };

  modalFormToAddTasks.addEventListener("submit", modalFormValidation);
  ```

### Data Handling Option 2

- It's generally considered better practice to define the `modalFormData` array outside the `modalFormValidation` function and push inputs into it within the function, rather than defining it inside the function. Here's why:
  - **Scope and Reusability**: The array remains accessible outside the function, allowing you to use it for other purposes or potentially pass it between functions if needed.
  - **Initialization**: Creating the empty array outside ensures it's always initialized even if the validation fails the first time.
  - **Clarity**: It separates data storage from the validation logic, making the code more readable and maintainable.
- Here is how to adjust the code:

  ```js
  // define an array to store the form inputs
  let modalFormData = [];

  const modalFormValidation = (event) => {
    event.preventDefault(); // prevent default form submission

    const modalTitleInputIsValid = validateModalTitleInput(
      modalTitleInput.value
    );
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
    } else {
      // Display an appropriate message if form submission is blocked due to errors
      console.log("Form submission failed due to validation errors!");
      // You can also display an alert or message to the user here
    }
  };

  modalFormToAddTasks.addEventListener("submit", modalFormValidation);
  ```

### Data Handling Option 3: Data Persistence: Using Local Storage

## Step 4: Display Elements to show Submitted Tasks

- Here's how you can integrate the `modalFormData` array and display elements to show submitted tasks:
  - **Create a container element**: Add a `div` with a suitable class (e.g., `tasks-container`) within your `main` section to display the tasks
  - **Update** `modalFormValidation`: After successfully pushing data into `modalFormData`, modify the function to include:
    - Create a new `div` element: Inside the `if` block where data is added, create a new `div` element with appropriate classes (e.g., `task-item`).
    - Set content based on `modalFormData`: Access the latest added entry using `modalFormData[modalFormData.length - 1]` and populate the `div` with `title`, `due date`, and `description` from the entry object.
    - Append the new `div` to the container: Use `document.querySelector('.tasks-container').appendChild(newDiv)` to add the created `div` to the container element you created before.
- Code implementation:

  ```js
  // define an array to store the form inputs
  let modalFormData = [];

  const modalFormValidation = (event) => {
    event.preventDefault(); // prevent default form submission

    const modalTitleInputIsValid = validateModalTitleInput(
      modalTitleInput.value
    );
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
      const latestEntry = modalFormData[modalFormData.length - 1];
      newTaskDiv.innerHTML = `<h3>Title: ${latestEntry.title}</h3> <p>Due Date: ${latestEntry.dueDate}</p>
        <p>${latestEntry.description}</p><div class="task-actions"></div>`;

      // append the new task to the container
      //document.querySelector(".tasks-container").appendChild(newTaskDiv);
      // or
      tasksContainer.appendChild(newTaskDiv);
    } else {
      // Display an appropriate message if form submission is blocked due to errors
      console.log("Form submission failed due to validation errors!");
      // You can also display an alert or message to the user here
    }
  };

  modalFormToAddTasks.addEventListener("submit", modalFormValidation);
  ```

## Step 5: Integrating Task Deletion and Editing Elements using Font Awesome

- Use Font Awesome to add icons to edit and delete submitted tasks:

  ```js
  // define an array to store the form inputs
  let modalFormData = [];

  const modalFormValidation = (event) => {
    event.preventDefault(); // prevent default form submission

    const modalTitleInputIsValid = validateModalTitleInput(
      modalTitleInput.value
    );
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
      const latestEntry = modalFormData[modalFormData.length - 1];
      newTaskDiv.innerHTML = `<h3>Title: ${latestEntry.title}</h3> <p>Due Date: ${latestEntry.dueDate}</p>
        <p>Description: ${latestEntry.description}</p><div class="task-actions"></div>`;

      // append the new task to the container
      //document.querySelector(".tasks-container").appendChild(newTaskDiv);
      // or
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
  ```

## Step 6: Implement Delete Functionality

- Implement logic for removing data from `modalFormData` and DOM on delete.
  ```js
  // define delete task functionality
  const handleDeleteTask = (taskToBeDeleted) => {
    tasksContainer.removeChild(taskToBeDeleted);
  };
  ```
- attach `deleteIcon` to `click` event:

  ```js
  const modalFormValidation = (event) => {
    // rest of the code
    if (
      modalTitleInputIsValid &&
      modalDueDateInputIsValid &&
      modalDescriptionInputIsValid
    ) {
      // rest of the code

      // attach event listener to deleteIcon element
      deleteIcon.addEventListener(
        "click",
        () => {
          handleDeleteTask(newTaskDiv);
        },
        true
      );
    }
  };
  ```

- we can also **implement Event Deligation** by replacing the above `deleteIcon` event listener setup with event delegation using `tasksContainer.addEventListener`. This will make the code more efficient and avoid potential conflicts with other listeners.

  ```js
  const modalFormValidation = (event) => {
    // rest of the code
    if (
      modalTitleInputIsValid &&
      modalDueDateInputIsValid &&
      modalDescriptionInputIsValid
    ) {
      // rest of the code

      // attach event listener to deleteIcon element
      // event delegation for deleting tasks
      tasksContainer.addEventListener("click", (event) => {
        const clickedElement = event.target;
        if (clickedElement.classList.contains("delete-icon")) {
          handleDeleteTask(clickedElement.closest(".task-item"));
        }
      });
    }
  };
  ```

## Step 7: Implement Edit Functionality

- Implement logic for pre-populating modal form on edit and updating data.

## Step 8: Implement A Function to clear modal form data fields after submission

- Here are two ways you can implement a function to clear modal form data fields after submission:
- Clearing Using `reset` method:

  - This approach directly sets the values of each input field and error element to empty strings.

    ```js

    // Use it after successful submission
    if (
      modalTitleInputIsValid &&
      modalDueDateInputIsValid &&
      modalDescriptionInputIsValid
    ) {
      // Handle submission
      ...

      // Clear the form data
      clearModalFormData();
    }

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
    ```

## Step 9: Attach Event Listener

- Attache the `modalFormValidation` function to the form's `"submit"` event, ensuring validation runs when the form is submitted.
  ```js
  // Attach event listener
  modalFormToAddTasks.addEventListener("submit", modalFormValidation);
  ```

# Bonus Contents

## Dockerize the application

# Resources
