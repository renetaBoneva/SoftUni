function sortNumbers(num1, num2, num3){
    let biggest = 0;
    let middle = 0;
    let smallest = 0;
    if(num1 > num2 && num1 > num3){
        biggest = num1;
        if(num2>num3){
            middle = num2;
            smallest = num3;
        } else{
            middle = num3;
            smallest = num2;
        }
    } else if(num2 > num1 && num2 > num3){
        biggest = num2;
        if(num1 > num3 ){
            middle = num1;
            smallest = num3;
        } else {
            middle = num3;
            smallest = num1;
        }
    } else if(num3 > num1 && num3 > num2){
        biggest = num3;
        if(num2 > num1){
            middle = num2;
            smallest = num1;
        } else {
            middle = num1;
            smallest = num2;
        }
    }

    console.log(biggest);
    console.log(middle);
    console.log(smallest);
    
}