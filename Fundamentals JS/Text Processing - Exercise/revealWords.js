function revealWords(words, sentence){

    let sentenceArr = sentence.split(' ');
    let wordsArr = words.split(', ');
    
    for(let searchWord of wordsArr){
        let stars = '*'.repeat(searchWord.length);
        for(let currentWord of sentenceArr){
            if(currentWord === stars){
                sentence = sentence.replace(stars, searchWord);
            }
        }
    }
    console.log(sentence);
}

revealWords('great',
'softuni is ***** place for learning new programming languages')
console.log('---------------');
revealWords('great, learning',
'softuni is ***** place for ******** new programming languages')