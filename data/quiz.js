console.log("quiz.js loaded");

let currentLanguage = "";
let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let timer = 600;
let timerInterval = null;

function startQuiz(language) {

    if (!QUESTIONS[language]) {
        alert("Questions not found for " + language);
        return;
    }

    currentLanguage = language;
    currentQuestions = [...QUESTIONS[language]];
    currefunctionntQuestion = 0;
    score = 0;
    timer = 600;

    renderQuiz();
    startTimer();
}

function renderQuiz() {

    let q = currentQuestions[currentQuestion];

    document.body.innerHTML = `
    <div class="quiz-container" style="max-width:900px;margin:30px auto;padding:20px;">

        <h1>${currentLanguage.toUpperCase()} QUIZ</h1>

        <div id="timer" style="font-size:20px;margin-bottom:15px;">
            Time Left : ${timer}s
        </div>

        <h2>
            Question ${currentQuestion + 1} of ${currentQuestions.length}
        </h2>

        <p style="font-size:20px;">
            ${q.q}
        </p>

        <div class="options">

            ${q.o.map((opt,index)=>`
                <button
                    class="option-btn"
                    onclick="checkAnswer(${index})"
                    style="
                        display:block;
                        width:100%;
                        padding:15px;
                        margin:10px 0;
                        cursor:pointer;
                        font-size:16px;
                    ">
                    ${opt}
                </button>
            `).join("")}

        </div>

        <div id="result" style="margin-top:15px;"></div>

        <div style="margin-top:20px;">

            <button
                id="nextBtn"
                onclick="nextQuestion()"
                style="
                    display:none;
                    padding:12px 20px;
                    cursor:pointer;
                ">
                Next Question
            </button>

            <button
                onclick="finishQuiz()"
                style="
                    padding:12px 20px;
                    cursor:pointer;
                    margin-left:10px;
                ">
                Submit Quiz
            </button>

        </div>

    </div>
    `;
}

function checkAnswer(selected) {

    let q = currentQuestions[currentQuestion];

    let buttons =
        document.querySelectorAll(".option-btn");

    buttons.forEach(btn => {
        btn.disabled = true;
    });

    if (selected === q.a) {

        score++;

        buttons[selected].style.background =
            "#22c55e";

        document.getElementById("result").innerHTML =
            `<h3>✅ Correct Answer</h3>
             <p>${q.e}</p>`;

    } else {

        buttons[selected].style.background =
            "#ef4444";

        buttons[q.a].style.background =
            "#22c55e";

        document.getElementById("result").innerHTML =
            `<h3>❌ Wrong Answer</h3>
             <p>${q.e}</p>`;
    }

    document.getElementById("nextBtn")
        .style.display = "inline-block";
}

function nextQuestion() {

    currentQuestion++;

    if (currentQuestion >= currentQuestions.length) {
        finishQuiz();
        return;
    }

    renderQuiz();
}
function finishQuiz() {


alert("finishQuiz called");

clearInterval(timerInterval);

let percent = Math.round(
    (score / currentQuestions.length) * 100
);

if (typeof user !== "undefined") {

    user.xp += score * 10;

    user.badges += Math.floor(score / 5);

    if (user.xp >= user.level * 100) {
        user.level++;
    }

    saveUser();

    console.log("User Saved:", user);
}

document.body.innerHTML = `
<div style="padding:50px;text-align:center;">

    <h1>🎉 Quiz Finished</h1>

    <h2>Score: ${score}/${currentQuestions.length}</h2>

    <h2>Percentage: ${percent}%</h2>

    <button onclick="location.reload()">
        Back Home
    </button>

</div>
`;


}

function startTimer() {

    clearInterval(timerInterval);

    timerInterval = setInterval(() => {

        timer--;

        let timerBox =
            document.getElementById("timer");

        if (timerBox) {
            timerBox.innerHTML =
                "Time Left : " + timer + "s";
        }

        if (timer <= 0) {
            finishQuiz();
        }

    }, 1000);
}