function sumOfNumbersNM(firstNum, secondNum){

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);
    let sum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        sum += i;        
    }
    console.log(sum);
}
sumOfNumbersNM('1', '5');
sumOfNumbersNM('-8', '20')