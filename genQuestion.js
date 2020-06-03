import {
    randBetween, 
    randIndex,
    findRelevantOperators,
    findNumberRange, 
}
from './helpers.js'


const getOp = (lvl) => {
    const availableOps = findRelevantOperators(lvl)
    return availableOps[randIndex(availableOps.length)]
}
const getNum = (lvl) => {  
   return randBetween(findNumberRange(lvl))
}

const generateQuestion = ({numLvl, opLvl, numOpLvl}) => {
    let stringStart = getNum(numLvl)
    for(let i = 0; i < numOpLvl; i++){
        stringStart = ` ${stringStart} ${getOp(opLvl)} ${getNum(numLvl)}`
    }
    return stringStart
}

export {generateQuestion}
