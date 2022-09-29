function negativePositiveNumbers(array){

    let result = [];
    for(let el of array){
        if(el >= 0){
            result.push(el);
        } else{
            result.unshift(el);
        }
    }
    for(let el of result){
        console.log(el);
    }
}
negativePositiveNumbers([7, -2, 8, 9])
console.log('-------------');
negativePositiveNumbers([3, -2, 0, -1])