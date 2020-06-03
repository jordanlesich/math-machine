import { generateQuestion}from  './genQuestion.js';
import { generateAnswer } from  './genAnswer.js';
import {vectors} from './helpers.js';
import {distributeDifficulty} from './genVectors.js';

function createAndSolve(vectors){
    
    const difficulty = distributeDifficulty(vectors)
    const question = generateQuestion(difficulty)
    const answer = generateAnswer(question)
    const evilAnswer = eval(question)
    
    console.log(`Question: ${question} = ${answer}`)
    return evilAnswer == answer
}

console.log(createAndSolve(vectors))
