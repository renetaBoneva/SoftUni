function maxSequenceOfEqualElements(arr) {

    let arrL = arr.length;
    let maxArr = [];
    let resultArr = [];
    for (let i = 0; i < arrL; i++) {

        let maxArrL = maxArr.length;
        let resultArrL = resultArr.length;
        let currentNum1 = arr[i];
        let currentNum2 = arr[i + 1];

        if (currentNum1 == currentNum2) {
            if (maxArrL == 0) {
                maxArr.push(currentNum1);
            }
            maxArr.push(currentNum2);
            maxArrL = maxArr.length;
            if(resultArrL < maxArrL){
                resultArr = maxArr;
            }
        } else {
            maxArr = [];
        }

    }
    console.log(resultArr.join(' '));
}
maxSequenceOfEqualElements([1, 1, 1, 2, 3, 1, 3, 3])