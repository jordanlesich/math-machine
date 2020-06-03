import { generateQuestion, generateAnswer } from  './generate.js'
import {vectors} from './gameParams.js'
import {distributeDifficulty} from './compose.js'

function createAndSolve(vectors){

    const difficulty = distributeDifficulty(vectors)
    const question = generateQuestion(difficulty)
    const answer = generateAnswer(question)
    const evilAnswer = eval(question)
    
    return evilAnswer == answer
}

console.log(createAndSolve(vectors))

// const loopNLog = (fn, reps, arg) => {

//     const obj = {}
  
//     for(let i = 0; i < reps; i++){
//         const res = fn(arg)
//         obj[res]? obj[res]++ : obj[res] = 1;
//     }
//     return obj
// }
// console.log(loopNLog(createAndSolve, 1000, (vectors)))
