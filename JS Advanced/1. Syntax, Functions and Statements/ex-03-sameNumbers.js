function sameNumbers(num){

    num = num + '';
    let previous;
    let sum = 0;
    let isSame = true;

    for(let digit of num){
        sum += Number(digit);
        if( (previous !== digit) && (typeof(previous) !== 'undefined') ){
            isSame = false;
        }
        previous = digit;
    }
    console.log(isSame);
    console.log(sum);
}
sameNumbers(2222222)
sameNumbers(1234)