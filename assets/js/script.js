const startBtn = document.querySelector("#startBtn")

const question1 = {
    question: "Objects in JavaScript are alway enclosed by what?",
    answers: ['Square Brakets','Parentheses','Quotes', 'Curly Brakets'],
    correctAsr: 3
};

const question2 = {
    question: "What JavaScript function allows you to use CSS selectors?",
    answers: ['.addEventListener', '.querySelector', 'getElementbyId', '.setAttribute'],
    correctAsr: 1
};

const question3 = {
    question: "What is the other piece to an 'if' statement?",
    answers: ['Else', 'When', 'Otherwise', 'For'],
    correctAsr: 0
};

const question4 = {
    question: "How do you define a global variable?",
    answers: ['const', 'let', 'var', 'global'],
    correctAsr: 0
};

const question5 = {
    question: "When compaing two variables, which of the following means 'or'?",
    answers: ['&&', '!==', '||', '<='],
    correctAsr: 2
}

let timer=75

function countdown(){
    let timerInterval = setInterval(function(){
        timer--;
        x.textContent = timer + "Seconds Remaining";

        if(timer === 0) {
            clearInterval(timerinterval);
        }
    }, 1000);
}

startBtn.addEventListener("click", function(event) {
    event.preventDefault();

});