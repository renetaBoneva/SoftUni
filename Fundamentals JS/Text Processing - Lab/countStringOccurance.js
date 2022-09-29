function countStringOccurance(sentence, word) {

    let count = 0;
    let splitedSentence = sentence.split(' ');
    for(let current of splitedSentence){
        if(current === word){
            count++
        }
    }
    console.log(count);
}
countStringOccurance('This is a word and it also is a sentence','is')
countStringOccurance(
    'softuni is great place for learning new programming languages','softuni')