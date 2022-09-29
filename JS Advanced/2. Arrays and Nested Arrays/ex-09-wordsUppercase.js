function wordsUppercase(string){

    let reggex= /(\w+)/gm
    let matches = string.match(reggex);
    for (let i = 0; i < matches.length; i++) {
        let current = matches[i];
        let uppercase = '';
        for(let letter of current){
            uppercase += letter.toUpperCase();
        }
        matches[i] = uppercase;        
    }
    console.log(matches.join(', '));

}
wordsUppercase('hello')
wordsUppercase('Hi, how are you?')