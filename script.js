// Get the button element
const generateBtn = document.getElementById('generateBtn');

// Array of random colors
const colors = ['#FF5733', '#3498DB', '#E74C3C', '#27AE60', '#F39C12', '#9B59B6', '#1ABC9C', '#D35400'];

// Function to generate a random color
function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Event listener for button click
generateBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});
