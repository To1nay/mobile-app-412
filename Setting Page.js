// app.js
const accountSection = document.querySelector('.account');

// Example user data (replace with actual data)
const userData = {
  username: 'Rana',
  passwordInfo: '********', // Display masked password
};

// Populate the account section
accountSection.innerHTML = `
  <div class="user-info">
    <span class="username">${userData.username}</span>
    <span class="password-info">${userData.passwordInfo}</span>
  </div>
`;

// app.js
const helpBtn = document.getElementById('helpBtn');
const feedbackBtn = document.getElementById('feedbackBtn');
const languageBtn = document.getElementById('languageBtn');

helpBtn.addEventListener('click', () => {
  // Handle "Help" button click (e.g., show a modal with help content)
  console.log('Help button clicked');
});

feedbackBtn.addEventListener('click', () => {
  // Handle "Send Feedback" button click (e.g., open a feedback form)
  console.log('Send Feedback button clicked');
});

languageBtn.addEventListener('click', () => {
  // Handle "Language" button click (e.g., show language options)
  console.log('Language button clicked');
});
