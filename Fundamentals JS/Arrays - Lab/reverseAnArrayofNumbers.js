function reverseAnArrayofNumbers(n, arr){

    let newArr = [];
    let finalArr = [];

    for(let i = 0; i < n; i++){
        newArr.push(arr[i]);
    }

    for(let i = n - 1 ; i >= 0; i--){
        let current = newArr[i];
        finalArr.push(current); 
    }
     console.log(finalArr.join(' '))


}
reverseAnArrayofNumbers(3, [10, 20, 30, 40, 50])