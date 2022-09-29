function sortigNumbers(data){

    data.sort((a, b) => {return a - b});
    let count = data.length / 2;
    //[-3, 1, 3, 18, 31, 48, 52, 56, 63, 65]
    let result = [];
    for (let i = 0; i < Math.ceil(count); i++) {
        if (count % 1 > 0 && i === Math.ceil(count)-1) {
            result.push(data.shift());
        } else{
            result.push(data.shift());
            result.push(data.pop());
        }        
    }
    return result;
}
sortigNumbers([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])