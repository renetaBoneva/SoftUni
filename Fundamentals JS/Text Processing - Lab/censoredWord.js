function censoredWord(sentence, word) {

    while (sentence.includes(word)) {
        sentence = sentence.replace(word, ('*'.repeat(word.length)))
    }
    console.log(sentence);

}
censoredWord('A small sentence with some small words', 'small')
censoredWord('Find the hidden word', 'hidden')