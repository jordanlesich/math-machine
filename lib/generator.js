"use strict";

import utils from "./utils.js";

const getAnswer = (expression) => {
  if (utils.getRegex("*/").test(expression)) {
    expression = expression.replace(utils.getRegex("*/"), utils.calcOperation);
  } else if (utils.getRegex("+-").test(expression)) {
    expression = expression.replace(utils.getRegex("+-"), utils.calcOperation);
  }
  return /\s/.test(expression) ? getAnswer(expression) : expression;
};

const getQuestion = ({ numLvl, opLvl, numOpLvl }) => {
  let stringStart = utils.getNum(numLvl);
  for (let i = 0; i < numOpLvl; i++) {
    stringStart = `${stringStart} ${utils.getOp(opLvl)} ${utils.getNum(
      numLvl
    )}`;
  }
  return stringStart;
};

const generateChallenge = () => {
  const vectors = utils.getVectors(4);
  const question = getQuestion(vectors);
  const answer = utils.roundDecimal(getAnswer(question));

  return {
    question,
    answer,
  };
};

export { generateChallenge as default, getQuestion, getAnswer };
