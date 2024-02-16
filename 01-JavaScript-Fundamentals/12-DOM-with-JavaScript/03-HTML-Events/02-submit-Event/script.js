// handling form submission

const form = document.getElementById("form");

const handleFormSubmission = (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // perform any additional form handling logic here

  alert("Form is successfully submitted!");

  // clear the form inputs
  form.reset();
};

// Attach event listener to the "submit" event of the form
form.addEventListener("submit", handleFormSubmission);
