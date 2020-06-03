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