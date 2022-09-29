function negativeOrPositiveNumber(array){

    let arr = array.slice().map(Number);
    let result = [];
    for (let el of arr) {
        if(el < 0){
            result.unshift(el);
        } else{
            result.push(el);
        }        
    }
    for (let i = 0; i < arr.length; i++) {
        console.log(result[i]);
    } 

}
negativeOrPositiveNumber(['7', '-2', '8', '9']);