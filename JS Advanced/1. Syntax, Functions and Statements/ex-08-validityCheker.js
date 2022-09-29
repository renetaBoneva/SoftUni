function validityCheker(x1, y1, x2, y2){

    //first {x1, y1} to {0, 0}
    let firstValidation = Math.sqrt(((0- x1)**2) + ((0 - y1)**2));
    if(firstValidation%1 > 0){
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    } else{
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    }
    //then {x2, y2} to {0, 0} 
    let secondValidation = Math.sqrt((x2- 0)**2 + (y2 - 0)**2);
    if(secondValidation%1 > 0){
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    } else{
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    }
    //finally {x1, y1} to {x2, y2} 
    let thirdValidation = Math.sqrt((x2- x1)**2 + (y2 - y1)**2);
    if(thirdValidation % 1 > 0){
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    } else{
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    }

}
validityCheker(3, 0, 0, 4)
console.log('-----------------');
validityCheker(2, 1, 1, 1)