// Get form elements properly
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const forgotForm = document.getElementById("forgotForm");

const loginUsername = document.getElementById("loginUsername");
const loginPassword = document.getElementById("loginPassword");

const signupUsername = document.getElementById("signupUsername");
const signupEmail = document.getElementById("signupEmail");
const signupPassword = document.getElementById("signupPassword");

const resetEmail = document.getElementById("resetEmail");
const newPassword = document.getElementById("newPassword");

// Toggle Functions
function showLogin() {
    loginForm.classList.remove("hidden");
    signupForm.classList.add("hidden");
    forgotForm.classList.add("hidden");
}

function showSignup() {
    signupForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
    forgotForm.classList.add("hidden");
}

function showForgot() {
    forgotForm.classList.remove("hidden");
    loginForm.classList.add("hidden");
}

// Load users
let users = JSON.parse(localStorage.getItem("users")) || [];

// Signup
signupForm.onsubmit = function(e) {
    e.preventDefault();

    const username = signupUsername.value.trim();
    const email = signupEmail.value.trim();
    const password = signupPassword.value.trim();

    if (users.find(u => u.username === username)) {
        alert("Username already exists");
        return;
    }

    users.push({ username, email, password });
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", username);

    window.location.href = "dashboard.html";
};

// Login
loginForm.onsubmit = function(e) {
    e.preventDefault();

    const user = users.find(u =>
        u.username === loginUsername.value.trim() &&
        u.password === loginPassword.value.trim()
    );

    if (user) {
        localStorage.setItem("loggedInUser", user.username);
        window.location.href = "dashboard.html";
    } else {
        alert("Invalid credentials");
    }
};

// Forgot Password
forgotForm.onsubmit = function(e) {
    e.preventDefault();

    const user = users.find(u => u.email === resetEmail.value.trim());

    if (user) {
        user.password = newPassword.value.trim();
        localStorage.setItem("users", JSON.stringify(users));
        alert("Password updated successfully");
        showLogin();
    } else {
        alert("Email not found");
    }
};

// Google Button (Demo Only)
const googleBtn = document.querySelector(".google-btn");

if (googleBtn) {
    googleBtn.onclick = function () {
        window.open("https://accounts.google.com", "_blank");
    };
}
