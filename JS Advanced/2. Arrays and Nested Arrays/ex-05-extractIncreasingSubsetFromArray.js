function extractIncreasingSubsetFromArray(array){

    let biggest = array[0];
    let result = [biggest];
    for(let current of array){        
        if(current > biggest){
            biggest = current;
            result.push(biggest);
        }
    }
    return result;
}
extractIncreasingSubsetFromArray([1, 
    3, 
    8, 
    4, 
    10, 
    12, 
    3, 
    2, 
    24]
    );
extractIncreasingSubsetFromArray([1, 
    2, 
    3,
    4]
    );
extractIncreasingSubsetFromArray([20, 
    3, 
    2, 
    15,
    6, 
    1]
    );