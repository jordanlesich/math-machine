//questionScreen
const quiz_DOM = document.querySelector(".quiz");
const question_DOM = document.querySelector(".question");
const upOption_DOM = document.querySelector(".up-option");
const downOption_DOM = document.querySelector(".down-option");
const rightOption_DOM = document.querySelector(".right-option");
const leftOption_DOM = document.querySelector(".left-option");
//feedbackScreen
const feedback_DOM = document.querySelector(".feedback");
const feedbackText_DOM = document.querySelector(".feedback-text");
const continueButton_DOM = document.querySelector(".continue-button");
//Scoreboard
const score_DOM = document.querySelector(".score");
const streak_DOM = document.querySelector(".streak");
const currentLvl_DOM = document.querySelector(".current-level");
const nextLvl_DOM = document.querySelector(".next-level");

let parentFns = {};

addEventListener("keydown", (e) => {
  if (!quiz_DOM.classList.contains("hidden")) {
    switch (e.key) {
      case "ArrowUp":
        handleGuess(upOption_DOM);
        break;
      case "ArrowDown":
        handleGuess(downOption_DOM);
        break;
      case "ArrowRight":
        handleGuess(rightOption_DOM);
        break;
      case "ArrowLeft":
        handleGuess(leftOption_DOM);
        break;
      default:
        return;
    }
  }
  if (!feedback_DOM.classList.contains("hidden")) {
    switch (e.key) {
      case "Enter":
        startQuestion();
        break;
      case " ":
        startQuestion();
        break;
    }
  }
});
continueButton_DOM.addEventListener("click", (e) => {
  if (e.target === continueButton_DOM) {
    startQuestion();
  }
});

const toggleScreen = () => {
  quiz_DOM.classList.toggle("hidden");
  feedback_DOM.classList.toggle("hidden");
};

const setQuestion = (question) => (question_DOM.textContent = question);
const setGuesses = (guesses) => {
  const options = [
    upOption_DOM,
    downOption_DOM,
    rightOption_DOM,
    leftOption_DOM,
  ];
  const shuffledGuesses = [...guesses].sort(() => Math.random() - 0.5);
  options.forEach(
    (option, index) => (option.textContent = shuffledGuesses[index])
  );
};

const updateScoreboard = ({ scores, correct }) => {
  score_DOM.textContent = `Points: ${scores.playerPts}`;
  streak_DOM.textContent = `Hot Streak: ${scores.streak}`;
  currentLvl_DOM.textContent = `Level: ${scores.playerLevel}`;
  nextLvl_DOM.textContent = `Points to Next Level: ${
    scores.nextLevel - scores.playerPts
  }`;
  score_DOM.classList.add(correct ? "correct" : "incorrect");
  setTimeout(() => {
    score_DOM.classList.remove("correct");
    score_DOM.classList.remove("incorrect");
  }, 200);
};

const handleGuess = (node) => {
  const reply = parentFns.checkAnswer(parseFloat(node.textContent));
  node.parentElement.classList.add(reply.correct ? "correct" : "incorrect");
  setTimeout(() => {
    toggleScreen();
    node.parentElement.classList.remove("correct");
    node.parentElement.classList.remove("incorrect");
    feedbackText_DOM.textContent = reply.correct ? "Correct!" : "Dumbass!";
    continueButton_DOM.textContent = "Continue";
  }, 200);
  updateScoreboard(reply);
};

function init_UI(fns) {
  quiz_DOM.classList.toggle("hidden");
  parentFns = { ...fns };
}
const startQuestion = () => {
  toggleScreen();
  parentFns.askQuestion();
};

const UI = { setQuestion, setGuesses, init_UI };

export { UI as default };
