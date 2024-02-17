//
const getNextButton = document.querySelector(".next-button");
const questionContainer = document.querySelector(".exam-body-row");

// Store the questions and their corresponding answers
const questions = [
  {
    question:
      "Which is a fastest way to change data inputs for a python script?",
    answers: [
      "Use the argv.system command line argument",
      "Use the sys.argv command line argument",
      "Modify the function in the text editor before re-executing the function",
    ],
    correctAnswer: 1, // Index of the correct answer
  },
  // Add more questions here
  {
    question: "What is the most common way to iterate over a list in Python?",
    answers: ["For loop", "While loop", "Do-while loop", "Switch statement"],
    correctAnswer: 0, // Index of the correct answer
  },
  {
    question: "How do you call a Python Shell from the command line?",
    answers: [
      "start,python",
      "python.run",
      "python.start",
      "python",
      "run.python",
    ],
  },
];

let currentQuestionIndex = 0;

// Function to display the current question
const displayQuestion = () => {
  const question = questions[currentQuestionIndex];
  questionContainer.textContent = question.question;

  // Clear previous answers and display new ones
  const answerElements = questionContainer.querySelectorAll(".form-check");
  answerElements.forEach((element) => {
    element.remove();

    question.answers.forEach((answer, index) => {
      const label = document.createElement("label");
      label.classList.add("form-check-label");
      label.textContent = answer;

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.classList.add("form-check-input");
      radio.name = "question-answer";
      radio.id = `answer-${index}`;

      questionContainer.appendChild(radio);
      questionContainer.appendChild(label);
    });
  });
};

// Initial display of the first question
displayQuestion();

// Event listener for the Next button click
getNextButton.addEventListener("click", () => {
  currentQuestionIndex++;

  // Check if we've reached the last question
  if (currentQuestionIndex === questions.length) {
    // Handle the last question scenario (e.g., display a finish message)
    // You can implement submission logic here
    alert("You've reached the end of the exam! Submitting answers...");
  } else {
    displayQuestion();
  }
});
