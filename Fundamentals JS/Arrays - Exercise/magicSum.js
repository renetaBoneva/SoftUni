function magicSum(arr, n) {

    let arrL = arr.length;
    for (let i = 0; i < arrL; i++) {
        for (let j = i + 1; j < arrL; j++) {
            let firstNum = Number(arr[i]);
            let secondNum = Number(arr[j]);
            let sum = firstNum + secondNum;
            if (sum === n) {
                console.log(`${firstNum} ${secondNum}`)
            }

        }
    }

}
magicSum([14, 20, 60, 13, 7, 19, 8], 27)