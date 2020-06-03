const getDifficulty = () => 6;
const getRandom = num => Math.floor(Math.random() * num);

const distributeDifficulty = (template) => {
    const vectorKeys = Object.keys(template);
    const remainingDifficulty = getDifficulty() - vectorKeys.length;
    const newObj = { ...template };
    for(let i = 0; i < remainingDifficulty; i++){
        newObj[vectorKeys[getRandom(vectorKeys.length)]]++;
    }
    return newObj
}

export {distributeDifficulty}

// const vectorTemplate = ['operations', 'numSize', 'numOperations']
// Object.freeze(vectorTemplate)

// const getDifficulty = () => 6
// const getRandom = num => Math.floor(Math.random() * num)
// const randVector = () => vectorTemplate[getRandom(vectorTemplate.length)]

// const assembleVectors = template => template.reduce(((obj, item) => {
//    obj[item]? obj[item]++ : obj[item] = 1;
//    return obj 
// }),{})

// const disributeDifficulty = (template) => {
//     const extraPts =  getDifficulty() - vectorTemplate.length
//     const newTemplate = [...template]
//         for(let i = 0; i < extraPts; i++){
//             newTemplate.push(randVector())
//         }
//     return assembleVectors(newTemplate)
// }s