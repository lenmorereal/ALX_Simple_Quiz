// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Define the correct answer
    const correctAnswer = '4';
    
    // Select DOM elements
    const submitButton = document.getElementById('submit-answer');
    const feedback = document.getElementById('feedback');

    // Define the checkAnswer function
    function checkAnswer() {
        // Retrieve the selected answer
        const selectedOption = document.querySelector('input[name="quiz"]:checked');
        
        // Check if an option is selected
        if (!selectedOption) {
            feedback.textContent = "Please select an answer!";
            feedback.style.color = "orange";
            return;
        }

        // Get the value of the selected answer
        const userAnswer = selectedOption.value;

        // Compare user's answer with the correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "Incorrect. Try again!";
            feedback.style.color = "red";
        }
    }

    // Add event listener to the submit button
    submitButton.addEventListener('click', checkAnswer);
});
