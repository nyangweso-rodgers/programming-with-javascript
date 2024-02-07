# ToDo App

## Table Of Contents

## Step: Data Handling Options

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

## Step: Display Elements to show Submitted Tasks

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
      document.querySelector(".tasks-container").appendChild(newTaskDiv);

      // create then editIcon element
      const editIcon = document.createElement("i");
      editIcon.className = "fas fa-edit edit-icon";
      // Append the edit icon to the .task-actions element
      document.querySelector(".task-actions").appendChild(editIcon);
    } else {
      // Display an appropriate message if form submission is blocked due to errors
      console.log("Form submission failed due to validation errors!");
      // You can also display an alert or message to the user here
    }
  };

  modalFormToAddTasks.addEventListener("submit", modalFormValidation);
  ```

## Step: Integrating Task Deletion using Font Awesome

## Step: Integrating Task Editing using Font Awesome

# Bonus Contents

## Dockerize the application

# Resources
