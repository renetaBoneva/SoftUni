function stringSubstring(word, sentence){

    let searchingWord = word.toLowerCase();
    let sentenceArr = sentence.split(' ');
    let isFound = false;

    for(let currentWord of sentenceArr){
        currentWord = currentWord.toLowerCase();
        if(searchingWord === currentWord){
            console.log(word);
            isFound = true;
            break;
        }
    }

    if(!isFound){
        console.log(`${word} not found!`);
    }

}
stringSubstring('javascript',
'JavaScript is the best programming language'
)
console.log('--------------');
stringSubstring('python',
'JavaScript is the best programming language'
)
