function firstAndLastKNumbers(array){

    let arr = array.slice();
    let k = arr.shift();
    let firstCouple = arr.splice(0,k);    
    let lastCouple = array.splice(-k);
    console.log(firstCouple.join(' '));
    console.log(lastCouple.join(' '));
}
firstAndLastKNumbers([2, 7, 8, 9])