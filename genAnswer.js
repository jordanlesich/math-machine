'use strict';

import { getOrderOps, getMathFn } from './helpers.js'


const reIndex = (expression) => expression.map((char, index) => {
    return {...char, id : index}
});
const getRelevantOps = (expression, ops) => expression.filter(char => {
    return ops.find( op => char.val === op)
})

const processOperator = (charData) => {
    const orderOps = [...getOrderOps()]
    let expression = [...charData]
    for(let ops of orderOps){
        let relevantOps = getRelevantOps(expression, ops)
        while (relevantOps.length > 0){
            const operator = relevantOps[0]    
            const numBefore = expression[operator.id - 1]
            const numAfter = expression[operator.id + 1]
            const result = operator.fn(Number(numBefore.val), Number(numAfter.val))
            expression = reIndex([
            ...expression.slice(0, numBefore.id), 
            {
                type: 'num',
                val: '' + result,
                id: operator.id
            }, 
            ...expression.slice(numAfter.id + 1) 
                ])
            relevantOps = getRelevantOps(expression, ops)
        }
    }
    return expression[0].val 
}

const parseString = (string) => { 
    const chars = string.trim().split(' ');
    const charsParsed =  chars.map( (char, index) => isNaN(char)? 
     {type: 'op', val: char, id: index, fn: getMathFn(char)} 
     :
     {type: 'num', val: char, id: index}
     )
    return charsParsed;
}

const generateAnswer = (string) => {
    return processOperator(parseString(string))
}

export {generateAnswer}