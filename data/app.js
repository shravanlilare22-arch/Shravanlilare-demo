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

let chart = null;

function saveName() {


let name = document.getElementById("playerName").value;

if (name.trim() === "") {
    alert("Enter your name");
    return;
}

user.name = name;

saveUser();
updateUI();


}

function updateUI() {


let username = document.getElementById("username");
if (username) username.innerText = user.name;

let xp = document.getElementById("xp");
if (xp) xp.innerText = user.xp;

let level = document.getElementById("level");
if (level) level.innerText = "Level " + user.level;

let levelDisplay = document.getElementById("levelDisplay");
if (levelDisplay) levelDisplay.innerText = user.level;

let badges = document.getElementById("badges");
if (badges) badges.innerText = user.badges;

updateChart();


}

function saveUser() {
localStorage.setItem(
"cca_user",
JSON.stringify(user)
);
}

function loadUser() {


let data = localStorage.getItem("cca_user");

if (data) {
    user = JSON.parse(data);
}

updateUI();


}

function createChart() {


let chartDiv = document.querySelector("#chart");

if (!chartDiv) return;

chart = new ApexCharts(chartDiv, {
    chart: {
        type: "radialBar",
        height: 350
    },

    series: [
        user.xp,
        user.level * 10,
        user.badges * 20
    ],

    labels: [
        "XP",
        "Level",
        "Badges"
    ]
});

chart.render();


}

function updateChart() {


if (!chart) return;

chart.updateSeries([
    user.xp,
    user.level * 10,
    user.badges * 20
]);


}

window.onload = function () {
console.log("Current User:", user);

loadUser();

if (typeof ApexCharts !== "undefined") {
    createChart();
}


};
