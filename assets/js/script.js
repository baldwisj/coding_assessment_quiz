const questions = [
    {
        question: "Objects in JavaScript are always enclosed by what?",
        answers: ['Square Brakets', 'Parentheses', 'Quotes', 'Curly Brakets'],
        correctAsr: 'Curly Brakets'

    },
    {
        question: "What JavaScript method allows you to use CSS selectors?",
        answers: ['.addEventListener', '.querySelector', 'getElementbyId', '.setAttribute'],
        correctAsr: '.querySelector'
    },
    {
        question: "What is the other piece to an 'if' statement?",
        answers: ['Else', 'When', 'Otherwise', 'For'],
        correctAsr: 'Else'
    },
    {
        question: "How do you define a global variable?",
        answers: ['const', 'let', 'var', 'global'],
        correctAsr: 'const'
    },
    {
        question: "When compaing two variables, which of the following means 'or'?",
        answers: ['&&', '!==', '||', '<='],
        correctAsr: '||'
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

        if (timer <= 0) {
            gameOver()
        };
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

    for (let i = 0; i < questions[quizQuestion].answers.length; i++) {
        let btn = document.createElement("button");
        btn.textContent = questions[quizQuestion].answers[i]

        btn.addEventListener('click', function () {
            const answerSelect = this.textContent;

            if (rightAns !== answerSelect) {
                timer -= 10;
                score -= 10;
                clock.textContent = timer + " Seconds Remaining";
            } else {
                score = score + 10;
            }
            quizQuestion++;
            console.log(score);
             if (quizQuestion === questions.length || timer <= 0) {
                gameOver()
            }
            else {
                nextQuestion()
            };

        })
        buttonDivEl.append(btn);
    }


    h1El.textContent = questions[quizQuestion].question;

    divEl.append(h1El, buttonDivEl)
    qstAndAswers.append(divEl)

}; //This function changes the content of the question and answer choice elements


function gameOver(){
    qstAndAswers.innerHTML = '';
    clearInterval(timerInterval);
    let formEl = document.createElement("form");
    let h3El = document.createElement("h3");
    let intImput = document.createElement("input");
    let submitBtn = document.createElement("button");
    let submitP = document.createElement("p");
    formEl.setAttribute("method", "post");
    formEl.setAttribute("action", "submit.php");
    intImput.setAttribute("type","text");
    intImput.setAttribute("name", "initials");
    intImput.setAttribute("placeholder", "Initials");
    intImput.setAttribute("id", "initialsForm")
    submitBtn.setAttribute("value", "Submit");
    submitBtn.setAttribute("id", "submitScoreId")
    submitBtn.setAttribute("onclick", "./scores.html")
    h3El.setAttribute("id", "scoreValue")

    formEl.appendChild(intImput);
    formEl.appendChild(submitBtn);

    submitP.textContent = "Enter your initials to save your HighScore."
    submitBtn.textContent = "Submit"
    h3El.textContent = "Your score is " + score;
    qstAndAswers.append(h3El);
    qstAndAswers.append(formEl);
    qstAndAswers.append(submitP);


    const highScoreInitials = document.getElementById("initialsForm");
 
    scoreSubmit.addEventListener("click", function(event) {
        event.preventDefault();

        const studentScore = {
            initals: highScoreInitials.value.trim(),
            scores: score,
        }

        localStorage.setItem('initialsForm',JSON.stringify(getInitials));
        
    })
};

//This function initiates the event after the start quiz button is clicked
startBtn.addEventListener("click", start);