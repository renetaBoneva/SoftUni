function addAndSubtract(array){

    let arrL = array.length;
    let sumBefore = 0;
    let sumAfter = 0;

    for(let i = 0; i < arrL; i++){
        let currentNum = array[i];
        sumBefore += currentNum;
        if(currentNum % 2 === 0){
            array[i] += i;
        } else {
            array[i] -= i;
        }
        sumAfter += array[i]; 
    }

    let printArr = array.join(', ');

    console.log(`[ ${printArr} ]`);
    console.log(sumBefore);
    console.log(sumAfter);
}
addAndSubtract([5, 15, 23, 56, 35])
