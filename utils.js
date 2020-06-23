//DATA
const opLvl = {
  1: ["+", "-"],
  2: ["+", "-", "*"],
  3: ["+", "-", "*", "/"],
  4: ["+", "-", "*", "/"],
  5: ["+", "-", "*", "/"],
};
const numLvl = {
  1: [1, 7],
  2: [1, 10],
  3: [1, 12],
  4: [1, 15],
  5: [1, 18],
};
const ops = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "/": (a, b) => a / b,
  "*": (a, b) => a * b,
};

const regex = {
  "+-": /\(?(-?\d+\.?\d*)\s([+\-])\s(-?\d+\.?\d*)\)?/,
  "*/": /\(?(-?\d+\.?\d*)\s([/*])\s(-?\d+\.?\d*)\)?/,
};
const template = {
  numLvl: 1,
  opLvl: 1,
  numOpLvl: 1,
};

//Can refactor this mess later with curry method
const randomIndex = (num) => Math.floor(Math.random() * num);
const randomRange = ([min, max]) => randomIndex(max - min + 1) + min;
const randomArrItem = (arr) => arr[randomIndex(arr.length)];
const randomKey = (obj) => randomArrItem(Object.keys(obj));

const utils = {
  roundDecimal: (num) => {
    if (typeof num === "string") {
      num = parseFloat(num);
    }
    return parseFloat(num.toFixed(2));
  },
  getOp: (lvl) => randomArrItem(opLvl[lvl]),
  getNum: (lvl) => randomRange(numLvl[lvl]),
  getRegex: (op) => regex[op],
  calcOperation: (match, num1, op, num2) => {
    return ops[op](parseFloat(num1), parseFloat(num2));
  },
  createFalseGuess: (answer) => {
    return utils.roundDecimal(
      utils.calcOperation(null, answer, randomKey(ops), utils.getNum(4))
    );
  },
  getVectors: (difficulty) => {
    let obj = { ...template };
    while (difficulty > 0) {
      difficulty = difficulty - 1;
      obj[randomKey(obj)]++;
    }
    return obj;
  },
};

export default utils;
