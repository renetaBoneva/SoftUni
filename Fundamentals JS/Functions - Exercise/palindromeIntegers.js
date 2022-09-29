function palindromeIntegers(arr){

    let arrL = arr.length;
    for (let i = 0; i < arrL; i++) {
        let currentNum = arr[i].toString();
        let reversedArr = [];
        let len = currentNum.length;
        for (let j = len - 1; j >=0 ; j--) {
            reversedArr.push(currentNum[j])            
        }
        let reversed = reversedArr.join('');
        if(reversed === currentNum){
            console.log('true');
        } else{
            console.log('false');
        }
        
    }
}
palindromeIntegers([123,323,421,121]);