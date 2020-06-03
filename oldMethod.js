'use-strict';


const add = (a) => (b) => a + b;
const subtract = (a) => (b) => a - b;
const multiply = (a) => (b) => a * b;
const divide = (a) => (b) => a / b;

const levelOneNumbers = [1,10];
const levelOneOperators = [
    {
        string: '+',
        fn: add,
        orderOps: 20
    },
    {
        string: '-',
        fn: subtract,
        orderOps: 20
    },
    {
        string: '*',
        fn: multiply,
        orderOps: 30
    },
    {
        string: '/',
        fn: divide,
        orderOps: 30
    },
];
const randBetween = ([x, y]) => {
    return Math.floor(Math.random() * (y - x + 1) + x)
}

const operatorGetter = (operators) => {
    return {...operators[randBetween([0, (operators.length - 1)])]}
}
const numberGetter = (range) => randBetween(range);

const buildExpression = (op, y) => {
    const newOp = {...op}
    const prebuiltFn = newOp.fn(y)
    return (x) => {
        return {
            string: `${y} ${newOp.string} ${x.string}`,
            total: prebuiltFn(x.total)
        }
    }
}
const buildOperation = (op, y) => {
    const newOp = {...op}
    const prebuiltFn = newOp.fn(y)
    return (x) => {
        console.log(x)
        return Object.freeze({
            string: `${y} ${newOp.string} ${x}`,
            total: prebuiltFn(x)
        })
    }
}


const generateExpressionObjects = (amt, getOp, opLvl) => {
    const expressions = []
    for (let i = 0; i < amt ; i++){

        const expObj = getOp(opLvl)
        console.log((amt - i))

        const tag = (amt - i) 
        expObj.orderOps = expObj.orderOps + tag
        expressions.push(expObj)
    }
    return expressions
}
const orderOperations = (expressions) => {
    const newExpressions = [...expressions]
    newExpressions.sort( (a, b) => {
        if(a.orderOps < b.orderOps){
            return -1;
        }
        if(a.orderOps > b.orderOps){
            return 1;
        }
        return 0
    } )
    console.log(newExpressions)
    return newExpressions
}
const buildExpressions = (expressions) => expressions.map(ex => {
   let fn = buildExpression(ex, numberGetter(levelOneNumbers))
   return fn 
})

const pipe = (fns) => {
    return (result) => {
        for(let fn of fns){
            result = fn(result)
        }
        return result
    } 
}

const getStarterNum = (num) => {

    return {
        string: '' + num,
        total: num,
        fn: add(0)(num)
    }
}

console.log(
    pipe(
    buildExpressions(
    orderOperations(
        generateExpressionObjects(
            3, 
            operatorGetter, 
            levelOneOperators
    ))))(getStarterNum(8)))

const generateBareExpressions = (expressions) => {
    const newExpressions = [...expressions]
    return 
}









const loopNLog = (fn, reps, arg) => {

    const obj = {}
  
    for(let i = 0; i < reps; i++){
        const res = fn(arg)
        obj[res]? obj[res]++ : obj[res] = 1;
    }
    return obj
}


