// Get elements
const openPopupBtn = document.getElementById('openPopupBtn');
const closePopupBtn = document.getElementById('closePopupBtn');
const popup = document.getElementById('popup');
const goBtn = document.getElementById('goBtn');
const userInput = document.getElementById('userInput');

// Open the popup when the button is clicked
openPopupBtn.addEventListener('click', () => {
    popup.classList.add('show');
});

// Close the popup when the close button is clicked
closePopupBtn.addEventListener('click', () => {
    popup.classList.remove('show');
});

// Redirect if the "Go" button is clicked and the input is correct
goBtn.addEventListener('click', () => {
    const userValue = userInput.value.trim();

    // Replace 'correctAnswer' with the actual correct value you want
    const correctAnswer = "Breathing"; // Change this to your actual answer

    if (userValue === correctAnswer) {
        // Redirect to a different website if the input is correct
        window.location.href = "suprise.html"; // Replace with your desired URL
    } else {
        alert("Incorrect answer. Please try again.");
    }
});
