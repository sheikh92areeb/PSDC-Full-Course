// const quizQuestions = [
//     {
//         question: "What is the capital of France?",
//         options: ["Berlin", "Madrid", "Paris", "Rome"],
//         correctAnswer: "Paris"
//     },
//     {
//         question: "Which planet is known as the Red Planet?",
//         options: ["Earth", "Mars", "Jupiter", "Venus"],
//         correctAnswer: "Mars"
//     },
//     {
//         question: "What is the largest ocean on Earth?",
//         options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
//         correctAnswer: "Pacific Ocean"
//     },
//     {
//         question: "Who wrote 'Hamlet'?",
//         options: ["William Wordsworth", "Charles Dickens", "William Shakespeare", "Jane Austen"],
//         correctAnswer: "William Shakespeare"
//     },
//     {
//         question: "What is the square root of 64?",
//         options: ["6", "8", "10", "12"],
//         correctAnswer: "8"
//     },
//     {
//         question: "Which is the smallest country in the world?",
//         options: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
//         correctAnswer: "Vatican City"
//     },
//     {
//         question: "How many bones are there in the human body?",
//         options: ["206", "210", "215", "201"],
//         correctAnswer: "206"
//     },
//     {
//         question: "Which gas do plants absorb from the atmosphere?",
//         options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
//         correctAnswer: "Carbon Dioxide"
//     },
//     {
//         question: "Which is the longest river in the world?",
//         options: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
//         correctAnswer: "Nile River"
//     },
//     {
//         question: "Which country is known as the Land of the Rising Sun?",
//         options: ["China", "Japan", "Thailand", "India"],
//         correctAnswer: "Japan"
//     }
// ];

// console.log(quizQuestions);

// let currQuestion = quizQuestions[0];
// let

// document.getElementById("question-box").innerHTML = `<h2 id="question">Q:${questionIndex + 1} ${currQuestion.question}</h2>
//                                                         <div class="options-container">
//                                                             <button class="option">A) ${currQuestion.options[0]}</button>
//                                                             <button class="option">A) ${currQuestion.options[1]}</button>
//                                                             <button class="option">A) ${currQuestion.options[2]}</button>
//                                                             <button class="option">A) ${currQuestion.options[3]}</button>
                                                            
//                                                         </div>`


// document.getElementById("next").addEventListener("click", ()=>{
//     let questionIndex = quizQuestions.indexOf(currQuestion)
//     console.log(questionIndex)
//     if ((questionIndex + 1) < quizQuestions.length) {
//         currQuestion = quizQuestions[questionIndex + 1]
//         document.getElementById("question-box").innerHTML = `<h2 id="question">Q:${questionIndex + 1} ${currQuestion.question}</h2>
//                                                         <div class="options-container">
//                                                             <button class="option">A) ${currQuestion.options[0]}</button>
//                                                             <button class="option">A) ${currQuestion.options[1]}</button>
//                                                             <button class="option">A) ${currQuestion.options[2]}</button>
//                                                             <button class="option">A) ${currQuestion.options[3]}</button>
                                                            
//                                                         </div>`

//     } else {
//         console.log("No Next Question Available")
//         document.getElementById("question-box").innerHTML = `<h2 id="question">No Next Question Available</h2>`
//     }
// })


// const questions = [
//     ["Which language was used to create Facebook?", "Python", "French", "JavaScript", "PHP", 4],
//     ["What is the capital of France?", "Berlin", "Madrid", "Paris", "Rome", 3],
//     ["Which planet is known as the Red Planet?", "Earth", "Mars", "Jupiter", "Venus", 2],
//     ["What is the largest ocean?", "Atlantic", "Indian", "Arctic", "Pacific", 4],
//     ["Who wrote 'Hamlet'?", "Wordsworth", "Dickens", "Shakespeare", "Austen", 3],
//     ["What is the square root of 64?", "6", "8", "10", "12", 2],
//     ["Which is the smallest country?", "Monaco", "Vatican City", "San Marino", "Liechtenstein", 2],
//     ["How many bones are in the human body?", "206", "210", "215", "201", 1],
//     ["Which gas do plants absorb?", "Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen", 3],
//     ["Which is the longest river?", "Amazon", "Nile", "Yangtze", "Mississippi", 2]
// ];

// const levels = [1000, 2000, 3000, 5000, 10000, 20000, 40000, 80000, 160000, 320000];

// let money = 0;

// for (let i = 0; i < questions.length; i++) {
//     let question = questions[i];

//     console.log(`\n\nQuestion for Rs. ${levels[i]}`);
//     console.log(`\n\nQuestion ${i + 1}. ${question[0]}`);
//     console.log(`a. ${question[1]}          b. ${question[2]}`);
//     console.log(`c. ${question[3]}          d. ${question[4]}`);

//     let reply = prompt("Enter your answer (1-4) or 0 to quit:");

//     if (reply === null) break; // Stop if user cancels the prompt

//     reply = parseInt(reply);

//     if (reply === 0) {
//         money = i > 0 ? levels[i - 1] : 0;
//         break;
//     }

//     if (reply === question[5]) {
//         console.log(`Correct answer! You have won Rs. ${levels[i]}`);
//         if (i === 4) money = 10000;
//         else if (i === 9) money = 320000;
//         else if (i === 14) money = 10000000;
//     } else {
//         console.log("Wrong answer!");
//         break;
//     }
// }

// console.log(`Your take-home money is Rs. ${money}`);
