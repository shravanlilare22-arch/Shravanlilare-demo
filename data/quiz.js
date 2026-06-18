console.log("quiz.js loaded");

let currentLanguage = "";
let currentQuestions = [];
let currentQuestion = 0;
let score = 0;
let timer = 300;
let timerInterval = null;

function startQuiz(language) {

    if (!user || user.name === "Guest") {
        alert("Please Sign In First!");
        return;
    }

    if (!QUESTIONS[language]) {
        alert("Questions not found!");
        return;
    }

    currentLanguage = language;
    currentQuestions = [...QUESTIONS[language]];
    currentQuestion = 0;
    score = 0;
    timer = 300;

    renderQuiz();
    startTimer();
}

function renderQuiz() {

    let q = currentQuestions[currentQuestion];

    document.body.innerHTML = `
    <div class="quiz-container">

        <h1>${currentLanguage.toUpperCase()} QUIZ</h1>

        <div id="timer">
            ⏱ Time Left : ${timer}s
        </div>

        <h2>
            Question ${currentQuestion + 1} of ${currentQuestions.length}
        </h2>

        <p>${q.q}</p>

        <div class="options">

            ${q.o.map((opt,index)=>`
                <button
                    class="option-btn"
                    onclick="checkAnswer(${index})">
                    ${opt}
                </button>
            `).join("")}

        </div>

        <div id="result"></div>

        <button
            id="nextBtn"
            onclick="nextQuestion()"
            style="display:none;">
            Next Question
        </button>

        <button onclick="finishQuiz()">
            Submit Quiz
        </button>

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
            `
            <h3>✅ Correct Answer</h3>
            <p>${q.e}</p>
            `;

    } else {

        buttons[selected].style.background =
            "#ef4444";

        buttons[q.a].style.background =
            "#22c55e";

        document.getElementById("result").innerHTML =
            `
            <h3>❌ Wrong Answer</h3>
            <p>${q.e}</p>
            `;
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

    clearInterval(timerInterval);

    let percent = Math.round(
        (score / currentQuestions.length) * 100
    );

    user.quizzesPlayed =
        (user.quizzesPlayed || 0) + 1;

    user.totalScore =
        (user.totalScore || 0) + percent;

    user.averageScore =
        Math.round(
            user.totalScore /
            user.quizzesPlayed
        );

    user.xp += score * 10;

    if (score >= 8) {
        user.badges++;
    }

    while (user.xp >= user.level * 100) {
        user.level++;
    }
    let students =
    JSON.parse(
        localStorage.getItem("cca_students")
    ) || [];

let index =
    students.findIndex(
        s => s.name === user.name
    );

if(index !== -1){

    students[index] = {
        name:user.name,
        xp:user.xp,
        level:user.level,
        badges:user.badges,
        quizzesPlayed:user.quizzesPlayed,
        averageScore:user.averageScore
    };

}else{

    students.push({
        name:user.name,
        xp:user.xp,
        level:user.level,
        badges:user.badges,
        quizzesPlayed:user.quizzesPlayed,
        averageScore:user.averageScore
    });
}

localStorage.setItem(
    "cca_students",
    JSON.stringify(students)
);

    saveUser();

    document.body.innerHTML = `
    <div style="padding:50px;text-align:center;">

        <h1>🎉 Quiz Finished</h1>

        <h2>Score: ${score}/${currentQuestions.length}</h2>

        <h2>Percentage: ${percent}%</h2>

        <hr style="margin:20px 0">

        <h3>XP: ${user.xp}</h3>

        <h3>Level: ${user.level}</h3>

        <h3>Badges: ${user.badges}</h3>

        <h3>Average Score: ${user.averageScore}%</h3>

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
                "⏱ Time Left : " + timer + "s";
        }

        if (timer <= 0) {
            finishQuiz();
        }

    }, 1000);
}