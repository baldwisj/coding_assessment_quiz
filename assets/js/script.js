const questions = [
    {
        question: "Objects in JavaScript are always enclosed by what?",
        answers: ['Square Brakets', 'Parentheses', 'Quotes', 'Curly Brakets'],
        correctAsr: 3

    },
    {
        question: "What JavaScript method allows you to use CSS selectors?",
        answers: ['.addEventListener', '.querySelector', 'getElementbyId', '.setAttribute'],
        correctAsr: 1
    },
    {
        question: "What is the other piece to an 'if' statement?",
        answers: ['Else', 'When', 'Otherwise', 'For'],
        correctAsr: 0
    },
    {
        question: "How do you define a global variable?",
        answers: ['const', 'let', 'var', 'global'],
        correctAsr: 0
    },
    {
        question: "When compaing two variables, which of the following means 'or'?",
        answers: ['&&', '!==', '||', '<='],
        correctAsr: 2
    }] //Objects containing each question, the four possible answers, and the correct index


let quizQuestion = 0;

let rightAns = questions[quizQuestion].correctAsr;

const startBtn = document.getElementById("startBtn");
//This is the ID selector associated with the start button

const clock = document.querySelector(".clock");
//This is the ID selector associated with the count down clock shown on the page

const qstWindow = document.getElementById("question-window")
//This is the ID selector associated with the the question window that will display all the questions

const srtMessage = document.querySelector(".starting-message");
//This creates a constant using the class selector of the starting message within the question window

const qstAndAswers = document.querySelector(".qstAndAnswer");

let timer = 75 //This sets the initial timer countdown
let score = 0;
let timerInterval;

function start() {
    countdown();//The countdown function is called

    srtMessage.setAttribute("style", "display:none;");//The initial message is hidden


    nextQuestion();//function is called to display first question

}

//This function defines how the timer counts and the interval
function countdown() {
     timerInterval = setInterval(function () {
        timer--;
        clock.textContent = timer + " Seconds Remaining";

        if (timer === 0) {
            gameOver()
        }
    }, 1000);
}

function nextQuestion() {
    qstAndAswers.innerHTML = '';
    //The following code creates and appends new question elements to the HTML document
    //function
    let divEl = document.createElement("div");
    let h1El = document.createElement("h1");
    let buttonDivEl = document.createElement("div")


    //This function creates buttons for each string in the second indexed array (answers) in the object

    for (var i = 0; i < questions[quizQuestion].answers.length; i++) {
        var btn = document.createElement("button");
        btn.textContent = questions[quizQuestion].answers[i]

        btn.addEventListener('click', function () {
            const answerSelect = this.textContent;

            if (rightAns !== answerSelect) {
                timer -= 10
                clock.textContent = timer + " Seconds Remaining";
            }
            quizQuestion++;
            if (quizQuestion === questions.length || timer <= 0) {
                gameOver()
            }
            else {
                nextQuestion()
            }

        })
        buttonDivEl.append(btn)
    }


    h1El.textContent = questions[quizQuestion].question;

    divEl.append(h1El, buttonDivEl)
    qstAndAswers.append(divEl)

}; //This function changes the content of the question and answer choice elements


function gameOver(){
    clearInterval(timerInterval);
}

//This function initiates the event after the start quiz button is clicked
startBtn.addEventListener("click", start);