function sumDigits(number){

    let num = number.toString();
    let sum = 0;

    for( let i = 0; i <= num.length - 1; i++){
        sum += Number(num[i]);
    }

    console.log(sum);
}
sumDigits(543)