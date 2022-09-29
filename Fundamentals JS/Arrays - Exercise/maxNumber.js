function maxNumber1(arr) {

    let arrL = arr.length;
    let maxNumberArr = [];

    for (let i = 0; i < arrL; i++) {
        let isBigger = true;
        for (let j = i + 1; j < arrL; j++) {
            let first = arr[i];
            let second = arr[j];
            if (first <= second) {
                isBigger = false;
                break;
            }
        }
        if (isBigger) {
            maxNumberArr.push(arr[i])
        }

    }

    console.log(maxNumberArr.join(' '));

}
maxNumber1([27, 19, 42, 2, 13, 45, 48]);


// function maxNumber(arr){

//     let newArr = arr;
//     let arrL = newArr.length;
//     let maxNumberArr = [];

//     for (let i = 0; i < arrL; i++) { 
//         arrL = newArr.length;       
//         if(arrL == 2 ){
//             if(newArr[0] > newArr[1]){                    
//             maxNumberArr.push(newArr[0]);
//             maxNumberArr.push(newArr[1]);
//             newArr.shift(newArr[0]);
//             } else{

//             maxNumberArr.push(newArr[1]);
//             maxNumberArr.push(newArr[0]);
//             newArr.shift(newArr[0]);
//             }
//         }
//         for(let j = i + 1; j < arrL; j++){            
//             if(newArr[i] > newArr[j]){
//                 let reverse = newArr[0];
//                 newArr[0] = newArr[i];
//                 newArr[i] = reverse;
//                 maxNumberArr.push(newArr[0]);
//                 newArr.shift(newArr[0]);
//                 i = 0;           
//             }
//         }
//     }

//     console.log(maxNumberArr.join(' '));

// }

