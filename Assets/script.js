const initializeQuiz = document.getElementById("start-btn");
const nextQuestion = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questLoveElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
var score = 0;
var timer = 100;
var timerid;

initializeQuiz.addEventListener("click", beginGame);
nextQuestion.addEventListener("click", () => {
  cQI++;
  showNextQuestion();
});

function beginGame() {
  initializeQuiz.classList.add("hide");
  randomQuestion = questions.sort(() => Math.random() - 0.5);
  cQI = 0;
  questionContainerElement.classList.remove("hide");
  document.getElementById('timer').textContent=timer;
  timerid=setInterval(countDown, 1000);
  showQuestion(randomQuestion[cQI]);
}
function countDown() {
  timer--;
  document.getElementById('timer').textContent=timer;
  if (timer === 0) {
    clearInterval(timerid)
  }
}
function showNextQuestion() {
  cQI++;
  showQuestion(randomQuestion[cQI]);
}

function showQuestion(question) {
  questLoveElement.innerText = question.question;
  answerButton.innerHTML = '';
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    button.dataset.correct = answer.correct;
    button.addEventListener("click", selectAnswer);
    answerButton.appendChild(button);
  });
}

function reset() {
  clearStatusClass(document.body);
  nextQuestion.classList.add("hide");
  while (answerButton.firstChild) {
    answerButton.removeChild(answerButton.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct === 'true'){
    console.log('Correct')
    score++;
  }
  else {
   timer--;   
  }

  Array.from(answerButton.children).forEach((button) => {
    defineStatusClass(button, button.dataset.correct);
  });
  if (randomQuestion.length > cQI + 1) {
   setTimeout(showNextQuestion, 500);
  } else {
    initializeQuiz.innerText = "Restart";
    initializeQuiz.classList.remove("hide");
    alert(score);
  }
}

function defineStatusClass(element, correct) {
  if (correct === 'true'){
  element.classList.add("correct");
  } else {
    element.classList.add("wrong");
  }
}

function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function add1() {
  score = score + 1;
}

const questions = [
  {
    question: "Inside which HTML element do we put the JavaScript?",
    answers: [
      { text: "<script>", correct: true },
      { text: "<scripting>", correct: false },
      { text: "<js>", correct: false },
      { text: "<javaScript>", correct: false },
    ],
  },
  {
    question:
      'What is the correct syntax for referring to an external script called "xxx.js"?',
    answers: [
      { text: '<script name="xyz.js>', correct: false },
      { text: '<script src="xyz.js>', correct: true },
      { text: '<script href="xyz.js>', correct: false },
      { text: "None of the Above", correct: false },
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function:myFunction()", correct: false },
      { text: "function myFunction()", correct: true },
      { text: "function = myFunction()", correct: false },
      { text: "None of the Above", correct: false },
      
    ],
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      { text: "for (i <= 5; i++)", correct: false },
      { text: "for (i=0; i<=5; i++)", correct: true },
      { text: "for (i=1; i==5; I==)", correct: false },
      { text: "None of the Above", correct: false },
    ],
  },
  {
    question: "Commonly used data types DO NOT include:",
    answers: [
      { text: "strings", correct: false },
      { text: "booleans", correct: false },
      { text: "numbers", correct: false },
      { text: "alerts", correct: true },
    ],
  },
  {
    question:
      "The condition in an if / else statement is enclosed within ____.",
    answers: [
      { text: "quotes", correct: false },
      { text: "curly brackets", correct: false },
      { text: "parentheses", correct: true },
      { text: "square brackets", correct: false },
    ],
  },
  {
    question: "Arrays in JavaScript can be used to store ____.",
    answers: [
      { text: "Numbers & Strings", correct: false },
      { text: "other arrays", correct: false },
      { text: "booleans", correct: false },
      { text: "all of the above", correct: true },
    ],
  },
  {
    question:
      "String values must be enclosed within ____ when being assigned to variables.",
    answers: [
      { text: "commas", correct: false },
      { text: "curly brackets", correct: false },
      { text: "quotes", correct: true },
      { text: "parentheses", correct: false },
    ],
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    answers: [
      { text: "JavaScript", correct: false },
      { text: "terminal / bash", correct: false },
      { text: "for loops", correct: true },
      { text: "console.log", correct: false },
    ],
  },
];