# To App

## Description

- Design to-do app

# Objective

- Learn CRUD (Create, Read, Update, Delete) Operations in JavaScript by building a Todo App.

# App Structure

- App
  - Button Click -> Submit
  - Form Validation
    - Failure
      - Error Message
    - Success
      - Accept and Store Data
      - Upload on screen
        - update
        - delete

# Steps

## Step 1: Form Input Handling

- Create `functionTogetDataFromModalForm` function which gathers form input data into an object.
- Data Storage: The code uses an array, `data` to store task objects in memory.

## Step 2: Form Input validation

- Create `functionToValidateFormInputs` function validates the form input data, checking for errors related to the `title`, `due date`, and `description`. The error messages are stored in the `errorMessagesArray`, and the function returns a boolean indicating whether the input is valid.

## Step 3: Storing Form data

- Create `functionToStoreFormData` function which stores valid form data in the `arrayForModalFormData` array.

## Step 4: Clearing Form Fields

- Create `functionToclearFormDataFields` function clears the form fields after successful submission.

## Step 5: Displaying Form Tasks

- Create a `functionToDisplayTaks` function to dynamically creates `HTML` elements to display tasks based on the data stored in `arrayForModalFormData`.

## Step 6: Error Handling

- If there are validation errors, an `alert` is displayed, informing the user to fill in all required fields.

# Bonus

## Consider Using Local Storage

- If you want to persist the tasks even after refreshing the page, consider using `localStorage` to store and retrieve your tasks.

  ```js
  // save tassk to local Storage
  localStorage.setItem("tasks", JSON.stringify(arrayForModalDataInputs));

  // retrieve tasks from local Storage
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  ```
