function sumFirstAndLast(array){

    let arr = array.slice().map(Number);
    let firstNum = arr.shift();
    let lastNum = arr.pop();

    return firstNum + lastNum;

}
console.log(sumFirstAndLast(['20', '30', '40']));
