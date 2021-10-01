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
    }
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 6

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`       //calculates what question the user is on and make a % of that

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions(questionsIndex)
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice + number']
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers)return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 1000)
    } )
})

incrementScore = num => {
    score +=num
    scoreText.innerText = score
}

startGame()