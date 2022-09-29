function printEveryNthElementFromAnArray(array,n){

    let result = [];
    for (let i = 0; i < array.length; i+= n) {
        result.push(array[i]);        
    }
    
    return  result;
}
printEveryNthElementFromAnArray(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);
console.log('-------------');
printEveryNthElementFromAnArray(['dsa',
'asd', 
'test', 
'tset'], 
2
);
console.log('-------------');
printEveryNthElementFromAnArray(['1', 
'2',
'3', 
'4', 
'5'], 
6
);