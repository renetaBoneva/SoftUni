function lastKNumbersSequance(n, k){

    let result = [1];
    
    for (let i = 0; n > i; i+) {
        result.push(result[i] + result[i+1])        
    }
    console.log(result);


}
lastKNumbersSequance()