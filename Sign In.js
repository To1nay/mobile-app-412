const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const signInButton = document.getElementById('sign-in-button');

// Event listener for the "Sign In" button
signInButton.addEventListener('click', () => {
    const email = emailInput.value;
    const password = passwordInput.value;

    // Validate email and password (you can add more validation logic)
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (password.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }

    // Perform sign-in operation (e.g., send data to server, authenticate user)
    // Replace the following line with your actual sign-in logic
    console.log('User signed in:', email);

    // Redirect to the home page
    window.location.href = 'homepage.html'; // Change 'home.html' to the actual URL of your home page
});

// Function to validate email format
function isValidEmail(email) {
    // You can use a regular expression or any other validation method
    // For simplicity, let's assume any non-empty string is a valid email
    return email.trim() !== '';
}