function repeatString(string, n){

    let result = '';
    for (let i = 1; i <= n; i++) {
        result += string;        
    }
    return result;

}
console.log(repeatString("abc", 3));