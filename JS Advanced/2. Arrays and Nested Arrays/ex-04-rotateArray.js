function rotateArray(array, n){

    let i = 1;
    while(i <= n){
        array.unshift(array.pop());
        i++;
    }
    console.log(array.join(' '));

}
rotateArray(['1', 
'2', 
'3', 
'4'], 
2
);
rotateArray(['Banana', 
'Orange', 
'Coconut', 
'Apple'], 
15
);