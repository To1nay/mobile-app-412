// app.js

// Get references to DOM elements
const heading = document.getElementById('app-heading');
const illustration = document.getElementById('illustration');
const getStartedBtn = document.getElementById('get-started-btn');

// Set the heading text
heading.textContent = 'Share The Magic Of Reading';

// Load the illustration (assuming it's an image)
illustration.style.backgroundImage = 'url("path/to/illustration.png")';
illustration.style.backgroundSize = 'cover'; // Adjust as needed

// Add an event listener to the button
getStartedBtn.addEventListener('click', () => {
    // Handle button click (e.g., navigate to another page)
    // You can customize this behavior based on your app's requirements
    console.log('Button clicked!'); // Replace with your logic
});
