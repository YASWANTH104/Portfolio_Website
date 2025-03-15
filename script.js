// Display current date and time
function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('current-date-time').textContent = dateTimeString;
  }
  
  // Display current year
  document.getElementById('current-year').textContent = new Date().getFullYear();
  
  // Update date and time every second
  setInterval(updateDateTime, 1000);
  
  // Form validation
  document.getElementById('contact-form').addEventListener('submit', function (e) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
  
    if (!name || !email || !message) {
      e.preventDefault();
      alert('Please fill out all fields.');
    } else if (!validateEmail(email)) {
      e.preventDefault();
      alert('Please enter a valid email address.');
    }
  });
  
  // Email validation helper function
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }