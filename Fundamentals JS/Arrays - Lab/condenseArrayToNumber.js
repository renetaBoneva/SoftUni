function condenseArrayToNumber(arr) {

    let iteration = arr.length - 1;
    let condencedArray = [];
    let newArray = [];
    if (iteration > 0) {
        for (let i = 0; i < arr.length; i++) {
            let el = Number(arr[i]);
            condencedArray[i] = el;
        }

        while (iteration >= 1) {

            let length = condencedArray.length;

            for (let i = 0; i < length - 1; i = i + 2) {


                newArray[i] = condencedArray[i] + condencedArray[i + 1];
                newArray[i + 1] = condencedArray[i + 2] + condencedArray[i + 1];

                condencedArray[i] = newArray[i];
                condencedArray[i + 1] = newArray[i + 1];
            }
            condencedArray.pop();
            iteration--;
        }
        console.log(condencedArray.join(''));
    }
    else {
        let theOnlyNumber = arr[0];
        console.log(`${theOnlyNumber} is already condensed to number`);
    }

}
condenseArrayToNumber([2])
//5+0 0+4 4+1 1+2  5 4 5 3 
