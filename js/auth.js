
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

let users = JSON.parse(localStorage.getItem("users")) || [];

signupForm.onsubmit = function(e) {
    e.preventDefault();
    let username = signupUsername.value;
    let email = signupEmail.value;
    let password = signupPassword.value;

    if(users.find(u => u.username === username)){
        alert("Username exists");
        return;
    }

    users.push({username,email,password});
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("loggedInUser", username);
    window.location.href="dashboard.html";
};

loginForm.onsubmit = function(e){
    e.preventDefault();
    let user = users.find(u =>
        u.username === loginUsername.value &&
        u.password === loginPassword.value
    );

    if(user){
        localStorage.setItem("loggedInUser", user.username);
        window.location.href="dashboard.html";
    } else {
        alert("Invalid credentials");
    }
};

forgotForm.onsubmit = function(e){
    e.preventDefault();
    let user = users.find(u => u.email === resetEmail.value);
    if(user){
        user.password = newPassword.value;
        localStorage.setItem("users", JSON.stringify(users));
        alert("Password updated");
        showLogin();
    } else {
        alert("Email not found");
    }
};
