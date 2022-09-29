function evenAndOddSubtraction(arr){

    let oddSum = 0;
    let evenSum = 0;

    for (let el of arr) {
        if(el % 2 === 0 ){
            evenSum += el;
        } else{
            oddSum += el;
        }
    }

    let dif = evenSum - oddSum;
    console.log(dif);

}
evenAndOddSubtraction([1,2,3,4,5,6])