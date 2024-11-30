// Sample quiz data (could be expanded with more questions)
const quizData = [
  {
    question: "What is 2 + 2?",
    options: ["2", "4", "6", "8"],
    correctAnswer: "4",
  },
  {
    question: "What is the capital of France?",
    options: ["London", "Berlin", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
];

// Function to populate the quiz content into HTML
function loadQuiz() {
  const questionElement = document.getElementById("question");
  const optionsElement = document.getElementById("options");
  
  const currentQuestion = quizData[0]; // Assuming we display the first question

  questionElement.textContent = currentQuestion.question;
  
  // Clear previous options
  optionsElement.innerHTML = "";
  
  // Create radio buttons for each option
  currentQuestion.options.forEach((option, index) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    
    input.type = "radio";
    input.name = "answer";
    input.value = option;

    label.appendChild(input);
    label.appendChild(document.createTextNode(option));

    optionsElement.appendChild(label);
    optionsElement.appendChild(document.createElement("br"));
  });
}

// Function to check the user's answer
function checkAnswer() {
  const feedbackElement = document.getElementById("feedback");
  const submitButton = document.getElementById("submit-answer");

  // Retrieve the correct answer from the quiz data
  const correctAnswer = quizData[0].correctAnswer;

  // Retrieve the user's selected answer
  const userAnswer = document.querySelector('input[name="answer"]:checked');

  if (userAnswer) {
    if (userAnswer.value === correctAnswer) {
      feedbackElement.textContent = 'That’s correct! Great job!';
    } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
    }
  } else {
    feedbackElement.textContent = "Please select an answer!";
  }

  // Optionally disable the submit button after submission
  submitButton.disabled = true;
}

// Add event listener to submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);

// Load the quiz when the page loads
window.onload = loadQuiz;
