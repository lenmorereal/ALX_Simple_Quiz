// Sample quiz data
const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris"
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: "Mars"
  }
  // Add more questions as needed
];

// Function to load a question
function loadQuestion(index) {
  const questionData = quizData[index];
  const questionElement = document.getElementById('question');
  const optionsElement = document.getElementById('options');

  questionElement.textContent = questionData.question;
  optionsElement.innerHTML = '';

  questionData.options.forEach((option, i) => {
    const optionElement = document.createElement('input');
    optionElement.type = 'radio';
    optionElement.name = 'answer';
    optionElement.value = option;
    const label = document.createElement('label');
    label.textContent = option;
    
    optionsElement.appendChild(optionElement);
    optionsElement.appendChild(label);
    optionsElement.appendChild(document.createElement('br'));
  });
}

// Function to check the user's answer
function checkAnswer() {
  const userAnswer = document.querySelector('input[name="answer"]:checked');
  const feedbackElement = document.getElementById('feedback');

  if (userAnswer) {
    const correctAnswer = quizData[0].correctAnswer; // Assume we're checking the first question for now
    if (userAnswer.value === correctAnswer) {
      feedbackElement.textContent = 'That’s correct! Great job!';
    } else {
      feedbackElement.textContent = "That's incorrect. Try again!";
    }
  } else {
    feedbackElement.textContent = "Please select an answer before submitting.";
  }
}

// Event listener for the "Submit Answer" button
const submitButton = document.getElementById('submit-answer');
submitButton.addEventListener('click', checkAnswer);

// Example function to start the quiz
function startQuiz() {
  loadQuestion(0); // Load the first question
}

// Call startQuiz to initialize the quiz
startQuiz();
