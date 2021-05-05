const initializeQuiz = document.getElementById("start-btn");
const nextQuestion = document.getElementById("next-btn");
const containmentOfQuestion = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");

let randomQuestion, cQI;

initializeQuiz.addEventListener("click", beginGame);
nextQuestion.addEventListener("click", () => {
  cQI++;
  showNextQuestion();
});

function beginGame() {
  initializeQuiz.classList.add("hide");
  randomQuestion = questions.sort(() => Math.random() - 0.5);
  cQI = 0;
  containmentofQuestion.classList.remove("hide");
  showNextQuestion();
}

function showNextQuestion() {
  resetState();
  showQuestion(randomQuestion[cQI]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

function resetState() {
  clearStatusClass(document.body);
  nextQuestion.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  defineStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    defineStatusClass(button, button.dataset.correct);
  });
  if (randomQuestion.length > cQI + 1) {
    nextQuestion.classList.remove("hide");
  } else {
    initializeQuiz.innerText = "Restart";
    initializeQuiz.classList.remove("hide");
  }
}

function defineStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
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
  alert("Adding 1 to your score!");
  score = score + 1;
  alert(score);
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
    ],
  },
  {
    question: "How do you create a function in JavaScript?",
    answers: [
      { text: "function:myFunction()", correct: false },
      { text: "function myFunction()", correct: true },
      { text: "function = myFunction()", correct: false },
    ],
  },
  {
    question: "How does a FOR loop start?",
    answers: [
      { text: "for (i <= 5; i++)", correct: false },
      { text: "for (i=0; i<=5; i++)", correct: true },
      { text: "for (i=1; i==5; I==)", correct: false },
    ],
  },
];
