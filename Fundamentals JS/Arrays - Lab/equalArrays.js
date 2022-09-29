function equalArrays(arr1, arr2){

    let isEqual = true;
    let sum = 0;
    let difIndex = 0;    

    for(let  i = 0; i < arr1.length; i++){
        let num1 =Number(arr1[i]);
        let num2 =Number(arr2[i]);
        if(num1 === num2){
            sum += num1;            
        } else {
            isEqual = false;
            difIndex = i;
            break;
        }
    }

    if(isEqual){
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${difIndex} index`);
    }
}
equalArrays(['10','20','30'], ['10','20','30'])
equalArrays(['1'], ['10'])