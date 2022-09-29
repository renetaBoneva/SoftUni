function specialNum(num){
    
    for(let i = 1; i <= num; i++){
        
        let sum = 0;        
        let stringNum = i.toString();
        for(let j = 0; j <= stringNum.length-1; j++){
            sum += Number(stringNum[j]);
        }

        if(sum == 7 || sum == 5 || sum ==11){
            console.log(`${i} -> True`)
        } else{
            console.log(`${i} -> False`)

        }
    }
}
specialNum(8)