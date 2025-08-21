// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Change <h1> text to welcome message
    const welcomeTitle = document.getElementById('welcome-title');
    if (welcomeTitle) {
        welcomeTitle.textContent = 'Welcome, Team Challenge!';
    }

    // Log message to console
    console.log("Congrats, you're closer to the password! 🚀");
});
