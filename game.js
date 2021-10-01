const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = []
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Spot the odd one out",
        choice1: "var",
        choice2: "const",
        choice3: "let",
        choice4: "function",
        answer: 4,
    },
    {
        question: "In which year was the WWW invented?",
        choice1: "1994",
        choice2: "1991",
        choice3: "1988",
        choice4: "1989",
        answer: 4,
    },
    {
        question: "What is the technical term for #?",
        choice1: "Hashtag",
        choice2: "Octothorp",
        choice3: "Octothorn",
        choice4: "Octagon",
        answer: 2,
    },
    {
        question: "Who created Python?",
        choice1: "Brendan Eich",
        choice2: "Guido van Rossum",
        choice3: "Dennis Ritchie",
        choice4: "Satoshi Nakamoto",
        answer: 2,
    },
    {
        question: "How do you create a function in JavaScript?",
        choice1: "function myFunction()",
        choice2: "function = myFunction()",
        choice3: "function: myFunction()",
        choice4: "let myFunction()",
        answer: 1,
    },
    {
        question: "What will the following code return: Boolean(3>2)",
        choice1: "undefined",
        choice2: "false",
        choice3: "NaN",
        choice4: "true",
        answer: 4,
    },
]