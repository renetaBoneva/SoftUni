function signCheck(numOne, numTwo, numThree){
    let result = 0;
    if(numOne < 0){
        result ++;
    } 
    if(numTwo < 0){
        result ++;
    } 
    if(numThree < 0){
        result ++;
    } 
    if (result == 1 || result == 3) {
        console.log("Negative");
    } else{
        console.log('Positive');
    } 
}
signCheck(5,
    12,
   -15
   )