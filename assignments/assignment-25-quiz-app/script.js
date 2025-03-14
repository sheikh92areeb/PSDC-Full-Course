let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let username = "";

// Fetch questions from JSON Server
async function fetchQuestions() {
    try {
        console.log("Fetching Questions")
        const res = await fetch("http://localhost:3000/questions");
        questions = await res.json();
        showQuestion();
        console.log("Calling Show Question")
    } catch (error) {
        console.error("Error fetching questions:", error);
    }
}

// Start quiz
function startQuiz() {
    console.log("Start Quiz ...")
    username = document.getElementById("username").value;
    if (!username) {
        alert("Please enter your name!");
        return;
    }
    document.getElementById("user-info").classList.add("hidden");
    document.getElementById("quiz-box").classList.remove("hidden");
    console.log("Calling Fetching Question")
    fetchQuestions();
}

// Show question
function showQuestion() {
    console.log("Showing Question")
    if (currentQuestionIndex >= questions.length) {
        return endQuiz();
    }
    
    const questionData = questions[currentQuestionIndex];
    document.getElementById("question-text").innerText = questionData.question;

    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    questionData.options.forEach((option, index) => {
        const btn = document.createElement("button");
        btn.innerText = option;
        btn.onclick = () => {
            console.log("Option Clicked")
            console.log("Calling Check Answer")
            checkAnswer(index)
        };
        optionsContainer.appendChild(btn);
    });
}

// Check answer
function checkAnswer(selectedIndex) {
    console.log("Checking Answer")
    const questionData = questions[currentQuestionIndex];

    if (selectedIndex === questionData.correct) {
        score += 10;
        document.querySelectorAll("#options-container button")[selectedIndex].classList.add("correct");
    } else {
        document.querySelectorAll("#options-container button")[selectedIndex].classList.add("wrong");
    }

    document.querySelectorAll("#options-container button").forEach(btn => btn.disabled = true);
}

// Next question
function nextQuestion() {
    console.log("Next Questions")
    currentQuestionIndex++;
    console.log("Calling Show Questions")
    showQuestion();
}

// End quiz & save user score
async function endQuiz() {
    console.log("Ending Quiz")
    document.getElementById("quiz-box").classList.add("hidden");
    document.getElementById("result-box").classList.remove("hidden");
    document.getElementById("result-text").innerText = `Congrats ${username}! Your score is: ${score}`;

    console.log("Post Request")
    try {
        await fetch("http://localhost:3000/users", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name: username, score })
        });
    } catch (error) {
        console.error("Error saving user data:", error);
    }
}

// Restart quiz
function restartQuiz() {
    console.log("Resart Quiz")
    location.reload();
}