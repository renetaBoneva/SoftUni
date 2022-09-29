function lastKNumbersSequence(n, k){

    let result = [];

    if(n >= 1){
        result.push(1);
    }

    while(result.length < Number(n)){

        let sum = 0;

        if(result.length <= k){
            for (let j = 0; j < result.length; j++) {
                sum += result[j];                
            }
        } else {
            for (let j = result.length-1; j >= result.length - k; j--) {
                sum += result[j];                
            }
        }
        result.push(sum)
    }
    console.log(result);
}
lastKNumbersSequence(6, 3)
lastKNumbersSequence(8, 2)