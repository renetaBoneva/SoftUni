function processOddPosition(array){

    let result = [];
    for (let i = 1; i < array.length; i+= 2) {
        let element = Number(array[i])*2;
        result.unshift(element);        
    }
    console.log(result.join(' '));
}
processOddPosition([10, 15, 20, 25])
processOddPosition([3, 0, 10, 4, 7, 3])