const quizQuestions = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        correctAnswer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        correctAnswer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        correctAnswer: "Pacific Ocean"
    },
    {
        question: "Who wrote 'Hamlet'?",
        options: ["William Wordsworth", "Charles Dickens", "William Shakespeare", "Jane Austen"],
        correctAnswer: "William Shakespeare"
    },
    {
        question: "What is the square root of 64?",
        options: ["6", "8", "10", "12"],
        correctAnswer: "8"
    },
    {
        question: "Which is the smallest country in the world?",
        options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        correctAnswer: "Vatican City"
    },
    {
        question: "How many bones are there in the human body?",
        options: ["206", "210", "215", "201"],
        correctAnswer: "206"
    },
    {
        question: "Which gas do plants absorb from the atmosphere?",
        options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
        correctAnswer: "Carbon Dioxide"
    },
    {
        question: "Which is the longest river in the world?",
        options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        correctAnswer: "Nile River"
    },
    {
        question: "Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "India"],
        correctAnswer: "Japan"
    }
];

console.log(quizQuestions);

let currQuestion = quizQuestions[0];
let

document.getElementById("question-box").innerHTML = `<h2 id="question">Q:${questionIndex + 1} ${currQuestion.question}</h2>
                                                        <div class="options-container">
                                                            <button class="option">A) ${currQuestion.options[0]}</button>
                                                            <button class="option">A) ${currQuestion.options[1]}</button>
                                                            <button class="option">A) ${currQuestion.options[2]}</button>
                                                            <button class="option">A) ${currQuestion.options[3]}</button>
                                                            
                                                        </div>`


document.getElementById("next").addEventListener("click", ()=>{
    let questionIndex = quizQuestions.indexOf(currQuestion)
    console.log(questionIndex)
    if ((questionIndex + 1) < quizQuestions.length) {
        currQuestion = quizQuestions[questionIndex + 1]
        document.getElementById("question-box").innerHTML = `<h2 id="question">Q:${questionIndex + 1} ${currQuestion.question}</h2>
                                                        <div class="options-container">
                                                            <button class="option">A) ${currQuestion.options[0]}</button>
                                                            <button class="option">A) ${currQuestion.options[1]}</button>
                                                            <button class="option">A) ${currQuestion.options[2]}</button>
                                                            <button class="option">A) ${currQuestion.options[3]}</button>
                                                            
                                                        </div>`

    } else {
        console.log("No Next Question Available")
        document.getElementById("question-box").innerHTML = `<h2 id="question">No Next Question Available</h2>`
    }
})