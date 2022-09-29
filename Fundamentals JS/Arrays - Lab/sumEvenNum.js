function sumEvenNum(arr){

    let sum = 0;

    for (let el of arr) {
        el = Number(el);
        if(el %2===0){
            sum += el;
        }
    }

    console.log(sum);
}
sumEvenNum(['1','2','3','4','5','6'])