console.log("login.js loaded");

/* ============================
   Current Logged User
============================ */

let currentUser = null;

/* ============================
   Load User
============================ */

window.onload = function () {

    let data = localStorage.getItem("cca_current_user");

    if (data) {

        currentUser = JSON.parse(data);

    }

};

/* ============================
   Toggle Password
============================ */

function togglePassword() {

    let password = document.getElementById("password");
    let eye = document.getElementById("togglePassword");

    if (password.type === "password") {

        password.type = "text";

        eye.classList.remove("fa-eye");
        eye.classList.add("fa-eye-slash");

    } else {

        password.type = "password";

        eye.classList.remove("fa-eye-slash");
        eye.classList.add("fa-eye");

    }

}

/* ============================
   Open Register Popup
============================ */

function openRegister() {

    document.getElementById("registerModal").style.display = "flex";

}

/* ============================
   Close Register Popup
============================ */

function closeRegister() {

    document.getElementById("registerModal").style.display = "none";

}
/* ============================
   CREATE ACCOUNT
============================ */

function createAccount() {

    let name = document.getElementById("newUsername").value.trim();

    let email = document.getElementById("newEmail").value.trim().toLowerCase();

    let password = document.getElementById("newPassword").value.trim();

    if (name === "" || email === "" || password === "") {

        alert("Please fill all fields.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("cca_users")) || [];

    let alreadyExists = users.find(user => user.email === email);

    if (alreadyExists) {

        alert("Email already registered!");
        return;
    }

    let newUser = {

        name: name,
        email: email,
        password: password,

        xp: 0,
        level: 1,
        badges: 0,

        quizzesPlayed: 0,
        totalScore: 0,
        averageScore: 0

    };

    users.push(newUser);

    localStorage.setItem(
        "cca_users",
        JSON.stringify(users)
    );

   alert("🎉 Account Created Successfully!");

// Current user ko login bhi kar do
localStorage.setItem(
    "cca_current_user",
    JSON.stringify(newUser)
);

// Loader dikhao
document.getElementById("loader").style.display = "flex";

// 1.8 sec baad main page kholo
setTimeout(() => {

    window.location.href = "index.html";

}, 1800);
}
/* ============================
   LOGIN
============================ */

function loginUser() {

    let email = document.getElementById("email").value.trim().toLowerCase();

    let password = document.getElementById("password").value;

    if (email === "" || password === "") {

        alert("Please enter Email and Password.");

        return;

    }

    let users =
        JSON.parse(localStorage.getItem("cca_users")) || [];
    console.log("Saved Users:", users);
    console.log("Entered Email:", email);
    console.log("Entered Password:", password);

    let user =
        users.find(u =>
            u.email === email &&
            u.password === password
        );
    console.log("Matched User:", user);

    if (!user) {

        alert("Invalid Email or Password");

        return;

    }

    localStorage.setItem(
        "cca_current_user",
        JSON.stringify(user)
    );

    document.getElementById("loader").style.display = "flex";

    setTimeout(() => {

        window.location.href = "index.html";

    }, 1800);

}
