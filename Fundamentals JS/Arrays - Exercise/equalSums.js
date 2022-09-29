function equalSums(arr) {

    let arrL = arr.length;

    if (arrL == 1) {
        console.log(`0`);
    } else if ((arrL == 2)) {
        console.log(`no`);
    } else {

        let isNumer = true;
        for (let i = 0; i < arrL; i++) {
            let leftSum = 0;
            let rightSum = 0;
            for (let j = 0; j < i; j++) {
                leftSum += arr[j];
            }
            for (let g = i + 1; g < arrL; g++) {
                rightSum += arr[g];
            }
            if (leftSum === rightSum) {
                console.log(i);
                isNumer = false;
            }
        }
        if(isNumer){
            console.log(`no`);            
        }
    }
}
equalSums([1, 2, 3])