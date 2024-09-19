// Function to toggle between login and signup forms
function toggleForms() {
    const loginForm = document.getElementById("login-form");
    const signupForm = document.getElementById("signup-form");
    const loginButton = document.getElementById("login-btn");

    // Toggle visibility between the login form, login button, and signup form
    if (loginForm.style.display === "none") {
        loginForm.style.display = "block";
        loginButton.style.display = "block";
        signupForm.style.display = "none";
    } else {
        loginForm.style.display = "none";
        loginButton.style.display = "none";
        signupForm.style.display = "block";
    }
}

// Set initial visibility of forms and buttons
window.onload = function() {
    document.getElementById("login-form").style.display = "block";
    document.getElementById("login-btn").style.display = "block";
    document.getElementById("signup-form").style.display = "none";
}

