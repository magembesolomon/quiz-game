const data =[
    {
        id: 1,
        question: "Whats the highest grossing Movie of all time",
        answers:[
            {answer: "Avengers", isCorrect:false},
            {answer: "Titanic", isCorrect:false},
            {answer: "Avatar", isCorrect:true},
            {answer: "End Game", isCorrect:false},
        ]
    },
    {
        id: 2,
        question: "Which song has most weeks in the Billboard Hot 100",
        answers:[
            {answer: "Blinding lights", isCorrect:false},
            {answer: "Believer", isCorrect:false},
            {answer: "Heat waves", isCorrect:true},
            {answer: "Dont start Now", isCorrect:false},
        ]
    },
    {
        id: 1,
        question: "Who won the 2021 Academy award for best Actress",
        answers:[
            {answer: "Jessica chastain", isCorrect:true},
            {answer: "Lady gaga", isCorrect:false},
            {answer: "Meryl Strip", isCorrect:false},
            {answer: "Gonzalez Eze", isCorrect:false},
        ]
    }
]

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0
let correctCount = 0
let wrongCount = 0
let total = 0
let selectedAnswer;

const playAgain = () =>{
     qIndex = 0
     correctCount = 0
     wrongCount = 0
     total = 0

    showQuestion(qIndex);
};

play.addEventListener("click", ()=>{
    resultScreen.style.display = "none"
    gameScreen.style.display = "block"
    playAgain()
})

const showResult = ()=>{
    resultScreen.style.display = "block"
    gameScreen.style.display = "none"

    resultScreen.querySelector(".correct").textContent =
    `Correct Answers: ${correctCount}`

    resultScreen.querySelector(".wrong").textContent =
    `Wrong Answers: ${wrongCount}`

    resultScreen.querySelector(".correct").textContent =
    `Score : ${(correctCount - wrongCount) *10}`
}

const showQuestion = (qNumber) => {
    if(qIndex === data.length) return showResult()
    selectedAnswer = null;
    question.textContent = data[qNumber].question
    answersContainer.innerHTML = data[qNumber].answers.map((item, index) =>
    `
    <div class="answer">
    <input name="answer" type="radio" id=${index} value=${item.isCorrect}>
    <label for="1">${item.answer}</label>
    </div> 
    `
    ).join("");
    selectAnswer()
};
const selectAnswer = ()=>{
    answersContainer.querySelectorAll("input").forEach(el=>{
        el.addEventListener("click",(e)=>{
            selectedAnswer = e.target.value;
        });
    });
};

const submitAnswer = ()=>{
    submit.addEventListener("click",(e)=>{
        if(selectedAnswer !== null){
        selectedAnswer === "true" ? correctCount++ : wrongCount++
        qIndex++
        showQuestion(qIndex)
        }else alert("Select an answer!");
        
    });
};

showQuestion(qIndex); 
submitAnswer();