'useStrict'

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const vectors = Object.freeze({ numLvl: 1, opLvl: 1, numOpLvl: 1 })

const operators = {
    1: ['+', '-'],
    2: ['+', '-', '*'],
    3: ['+', '-', '*', '/'],
    4: ['+', '-', '*', '/'],
}
const numbers ={
    1: [1,7],
    2: [1,10],
    3: [1,12],
    4: [1,15],
    5: [1,18],
}
const orderOps = [['*', '/'], ['+', '-']]
const mathFns = Object.freeze({
    '*' : multiply,
    '/' : divide,
    '+' : add,
    '-' : subtract
})

const getOrderOps = () => Object.freeze(orderOps)
const findRelevantOperators = (lvl) => Object.freeze(operators[lvl])
const findNumberRange = (lvl) => Object.freeze(numbers[lvl])
const getMathFn = (symbol) => mathFns[symbol]

export {findRelevantOperators, findNumberRange, getOrderOps, getMathFn, vectors}