function bonusScore(input){
    let numInput = Number(input[0]);
    let bonus = 0;

    if(numInput <= 100){
        bonus = bonus + 5;
    } else if(numInput <= 1000){
        bonus = numInput * 0.2;
    } else if(numInput > 1000){
        bonus = numInput * 0.1;
    }

    if(numInput % 2 == 0){
        bonus += 1;
    }

    if(numInput % 10 == 5){
        bonus += 2;
    }

    let numOutput = bonus + numInput;
    console.log(bonus);
    console.log(numOutput);
}
bonusScore(['20'])