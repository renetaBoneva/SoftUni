function sumOfOddNumbers(n){
    let sum = 0; 
    let count = 0;
        for(let i = 1; i <= 2*n; i ++){
            if(i % 2 ==1){
                console.log(i);
                sum += i;
                count ++;
            }
        }
    console.log(`Sum: ${sum}`);
}
sumOfOddNumbers(5)