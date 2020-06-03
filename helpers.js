const randBetween = ([x, y]) => {
    return Math.floor(Math.random() * (y - x + 1) + x)
}
const randIndex = num => Math.floor(Math.random() * num);
const randNum = num => randIndex(num) + 1;


export {randIndex, randBetween, randNum }