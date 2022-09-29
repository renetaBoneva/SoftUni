function mathOperations(firstNum, secondNum, operator){

    firstNum = Number(firstNum);
    secondNum = Number(secondNum);

    if(operator === '+'){
        console.log(firstNum + secondNum);
    } else if(operator === '-'){
        console.log(firstNum - secondNum);
    } else if(operator === '/'){
        console.log(firstNum / secondNum);
    } else if(operator === '*'){
        console.log(firstNum * secondNum);
    } else if(operator === '%'){
        console.log(firstNum % secondNum);
    } else if(operator === '**'){
        console.log(firstNum ** secondNum);
    }
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*')