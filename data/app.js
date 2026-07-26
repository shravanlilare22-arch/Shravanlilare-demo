console.log("app.js loaded");

let user = {
    name: "Guest",
    xp: 0,
    level: 1,
    badges: 0,
    quizzesPlayed: 0,
    totalScore: 0,
    averageScore: 0
};

function saveName() {

    let name =
        document.getElementById("playerName").value;

    if (name.trim() === "") {
        alert("Enter Your Name");
        return;
    }

    user.name = name.trim();

    let students =
        JSON.parse(
            localStorage.getItem("cca_students")
        ) || [];

    let exists =
        students.find(
            s => s.name.toLowerCase() ===
                user.name.toLowerCase()
        );

    if (!exists) {

        students.push({
            name: user.name,
            xp: 0,
            level: 1,
            badges: 0,
            quizzesPlayed: 0,
            averageScore: 0
        });

        localStorage.setItem(
            "cca_students",
            JSON.stringify(students)
        );
    }

    saveUser();
    updateUI();

    alert("Welcome " + user.name);
}
function updateUI() {

    let username =
        document.getElementById("username");

    if (username)
        username.innerText = user.name;

    let xp =
        document.getElementById("xp");

    if (xp)
        xp.innerText = user.xp;

    let level =
        document.getElementById("level");

    if (level)
        level.innerText =
            "Level " + user.level;

    let levelDisplay =
        document.getElementById("levelDisplay");

    if (levelDisplay)
        levelDisplay.innerText =
            user.level;

    let badges =
        document.getElementById("badges");

    if (badges)
        badges.innerText =
            user.badges;

    let avg =
        document.getElementById("averageScore");

    if (avg)
        avg.innerText =
            (user.averageScore || 0) + "%";

    let qp =
        document.getElementById("quizzesPlayed");

    if (qp)
        qp.innerText =
            user.quizzesPlayed || 0;

    updateEnrollment();
}

function updateEnrollment() {

    let body = document.getElementById("enrollmentBody");

    if (!body) return;

    let students =
        JSON.parse(
            localStorage.getItem("cca_students")
        ) || [];

    body.innerHTML = "";

    students.forEach(student => {

        body.innerHTML += `
        <tr>
            <td>${student.name}</td>
            <td>${student.level}</td>
            <td>${student.xp}</td>
            <td>${student.badges}</td>
            <td>${student.quizzesPlayed}</td>
            <td>${student.averageScore}%</td>
        </tr>
        `;

    });
}

function saveUser() {

    localStorage.setItem(
        "cca_user",
        JSON.stringify(user)
    );

    console.log("User Saved:", user);
}

function loadUser() {

    // Login page se current user load karo
    let currentUser =
        localStorage.getItem("cca_current_user");

    if (currentUser) {

        user = JSON.parse(currentUser);

        // app compatibility ke liye save bhi kar do
        localStorage.setItem(
            "cca_user",
            JSON.stringify(user)
        );

    } else {

        let data =
            localStorage.getItem("cca_user");

        if (data) {

            user = JSON.parse(data);

        }

    }

    user.quizzesPlayed = user.quizzesPlayed || 0;
    user.totalScore = user.totalScore || 0;
    user.averageScore = user.averageScore || 0;

    updateUI();
    updateEnrollment();
}

function resetUser() {

    let ok =
        confirm(
            "Reset all progress?"
        );

    if (!ok) return;

    localStorage.removeItem(
        "cca_user"
    );

    user = {
        name: "Guest",
        xp: 0,
        level: 1,
        badges: 0,
        quizzesPlayed: 0,
        totalScore: 0,
        averageScore: 0
    };

    updateUI();

    alert(
        "Progress Reset Successfully"
    );
}
function logoutUser() {

    localStorage.removeItem("cca_user");
    localStorage.removeItem("cca_current_user");

    window.location.href = "login.html";

}
function deleteCurrentStudent() {

    if (user.name === "Guest") {
        alert("No student selected");
        return;
    }

    let students =
        JSON.parse(
            localStorage.getItem("cca_students")
        ) || [];

    students = students.filter(
        student => student.name !== user.name
    );

    localStorage.setItem(
        "cca_students",
        JSON.stringify(students)
    );

    localStorage.removeItem("cca_user");

    alert(user.name + " deleted successfully");

    location.reload();
}

window.onload = function () {

    console.log(
        "Loading User..."
    );

    loadUser();

    console.log(
        "Current User:",
        user
    );
};
function clearAllStudents() {

    if (confirm("Delete all student records?")) {

        localStorage.removeItem("cca_students");
        localStorage.removeItem("cca_user");
        localStorage.removeItem("cca_current_user");
        localStorage.removeItem("cca_users");

        location.reload();
    }

}s