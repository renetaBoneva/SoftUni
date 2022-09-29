function amazingNum(inputNum){
    
    let num = inputNum.toString();
    let sumDigits = 0;

    for( let i = 0; i <= num.length - 1; i++){
        sumDigits += Number(num[i]);
    }

    sumDigits = sumDigits.toString();

    if(sumDigits.includes('9')){
        console.log(`${num} Amazing? True`);
    } else {        
        console.log(`${num} Amazing? False`);
    }
}
amazingNum(999)
