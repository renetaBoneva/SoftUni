function oddAndEvenSum(num){

    let number = num.toString();
    let numberL = number.length;
    let oddSum = 0;
    let evenSum = 0;

    for(let i = 0; i< numberL; i++){
        let currentDigit = Number(number[i]);
        if(currentDigit % 2 === 0){
            evenSum += currentDigit;
        } else{
            oddSum += currentDigit;
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}
oddAndEvenSum(1000435);