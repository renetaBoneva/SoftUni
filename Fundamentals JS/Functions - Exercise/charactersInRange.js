function charactersInRange(char1, char2){

    let n1 = char1.charCodeAt(0);
    let n2 = char2.charCodeAt(0);
    let smallerNum = 0;
    let biggerNum = 0;
    let result= [];

    if(n1 < n2){
        smallerNum = n1;
        biggerNum = n2
    } else{
        smallerNum = n2;
        biggerNum = n1;
    }
    for(let i = smallerNum + 1; i < biggerNum; i++){
        let currentChar = String.fromCharCode(i);
        result.push(currentChar);
    }
    return result.join(' ');

}
console.log(charactersInRange('a','d'));