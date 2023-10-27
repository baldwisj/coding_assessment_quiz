const startBtn = document.getElementById("startBtn");
const clock = document.querySelector(".clock");


const questions = [{
    question: "Objects in JavaScript are alway enclosed by what?",
    answers: ['Square Brakets','Parentheses','Quotes', 'Curly Brakets'],
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
}]



let timer=75

function countdown(){
    let timerInterval = setInterval(function() {
        timer--;
        clock.textContent = timer + "Seconds Remaining";

        if(timer === 0) {
            clearInterval(timerinterval);
        }
    }, 1000);
}

countdown();


const qstWindow = document.getElementById("question-window")

questions.forEach(allQuestions =>{
    let divEl = document.createElement("div");
    let h1El = document.createElement("h1");
    let ulEl = document.createElement("ul");
    let liEl = document.createElement("li");
    h1E1.textContent = allQuestions.question;
    liEl.textContent = allQuestions.answers;

    divEl.append(h1El,ulEl,liEl);
    qstWindow.appendChild(divEl)
});

startBtn.addEventListener("click", function(event) {
    event.preventDefault();

});