const compose = (...fns) => {
    return (result) => {
        for(let i = fns.length - 1; i >= 0; i--){
           result = fns[i](result)
        }
        return result
    }
}
const pipe = (...fns) => {
    return (result) => {
        for(let fn of fns){
            result = fn(result)
        }
        return result
    } 
}


const loopNLog = (fn, reps, arg) => {

    const obj = {}
  
    for(let i = 0; i < reps; i++){
        const res = fn(arg)
        obj[res]? obj[res]++ : obj[res] = 1;
    }
    return obj
}
  