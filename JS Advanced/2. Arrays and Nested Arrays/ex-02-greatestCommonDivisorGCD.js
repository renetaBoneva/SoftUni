function greatestCommonDivisorGCD(firstNumber, secondNumber){
 
    let result ;
    let isFound = true;
    let i = 2;
    while(isFound){
        if(i > firstNumber && i > secondNumber){
            isFound = false;
        } 
        if( (firstNumber/i === Math.round(firstNumber/i)) &&
            (secondNumber/i === Math.round(secondNumber/i))){
            result = i;            
        }
        i++;
    }
    console.log(result);    
}
greatestCommonDivisorGCD(15, 5);
greatestCommonDivisorGCD(2154, 458);
