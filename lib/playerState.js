let playerLevel = 0;
let playerPts = 0;
let nextLevel = 10;
let currentAnswer = 0;
let streak = 1;

//For later
const localStorage = {};

const getAnswer = () => currentAnswer;
const setAnswer = (num) => (currentAnswer = num);

const getPts = () => playerPts;
const setPts = (pts) => {
  if (playerPts + pts >= nextLevel) {
    userState.setLvl(1);
    playerPts = playerPts + pts - nextLevel;
    nextLevel = Math.round(nextLevel * 1.2);
  } else {
    playerPts = playerPts + pts;
  }
};

const getLvl = () => playerLevel;
const setLvl = (amt) => (playerLevel = playerLevel + amt);

const handleCorrect = () => {
  const lvlBefore = playerLevel;
  setPts(1 * streak);
  streak = streak + 1;
  return lvlBefore !== playerLevel;
};
const handleIncorrect = () => {
  const lvlBefore = playerLevel;
  setPts(-1 * streak);
  streak = 1;
  return lvlBefore !== playerLevel;
};

const getScores = () => ({
  playerLevel,
  playerPts,
  nextLevel,
  currentAnswer,
  streak,
});

const userState = {
  getAnswer,
  setAnswer,
  getPts,
  setPts,
  getLvl,
  setLvl,
  getScores,
  handleCorrect,
  handleIncorrect,
};

export { userState as default };
