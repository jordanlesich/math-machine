import utils from "./utils.js";
import UI from "./UI.js";
import state from "./playerState.js";
import generateChallenge from "./generator.js";

const askQuestion = () => {
  const QnA = generateChallenge(utils.getVectors(4));
  UI.setQuestion(QnA.question);
  UI.setGuesses([
    QnA.answer,
    //TODO refactor
    utils.createFalseGuess(QnA.answer),
    utils.createFalseGuess(QnA.answer),
    utils.createFalseGuess(QnA.answer),
  ]);
  state.setAnswer(QnA.answer);
};

function checkAnswer(answer) {
  const correct = answer === state.getAnswer();
  if (correct) {
    const didLvlUp = state.handleCorrect();
    //TODO
    // if (didLvlUp) UI.handleLvlUp(state.getLvl);
  } else {
    const didLvlDown = state.handleIncorrect();
    //TODO
    // if (didLvlDown) UI.handleLvlDown(state.getLvl);
  }
  return { correct, scores: state.getScores() };
}

generateChallenge(utils.getVectors(4));
UI.init_UI({ askQuestion, checkAnswer });
