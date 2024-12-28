// Quiz data
const quizData = [
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5"],
    correctAnswer: "4",  // Correct answer
  },
  // Add more questions here if needed
];

// Function to check the answer
function checkAnswer() {
  // Get the user's selected answer
  const userAnswer = document.querySelector('input[name="answer"]:checked');
  
  // Get the feedback element to display results
  const feedbackElement = document.getElementById("feedback");
if (userAnswer === correctAnswer) {
    console.log("Correct! Well done.");
} else {
    console.log("Incorrect. Try again.");
}

  // Check if the user has selected an answer
  if (!userAnswer) {
    feedbackElement.textContent = "Please select an answer!";
    return;
  }

  // Get the correct answer from the quiz data
  const correctAnswer = quizData[0].correctAnswer;

  // Correct comparison: Check if the value of the selected radio button matches the correct answer
  if (userAnswer === correctAnswer) {
    console.log("Correct!");
} else {
    console.log("Try again!");
}

  if (userAnswer.value === correctAnswer) {  // Correct comparison
    feedbackElement.textContent = "That’s correct! Great job!";
  } else {
    feedbackElement.textContent = "That's incorrect. Try again!";
  }
}

// Add event listener to the submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
