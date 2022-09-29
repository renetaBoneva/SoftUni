function pascalCaseSplitter(input) {

    let sentence = [];
    for(let letter of input){
        sentence.push(letter)
    }

    let result = [];
    let letter = [];

    for(let currentLetter of sentence){

        let currentLetterCode = currentLetter.charCodeAt(0);

        if (currentLetterCode >= 65 && currentLetterCode <= 90) {
            result.push(letter.join(''));
            letter = [];
            letter.push(currentLetter)
        } else{
            letter.push(currentLetter)
        }
    }
    result.shift();
    result.push(letter.join(''))
    console.log(result.join(', '));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
console.log('----------');
pascalCaseSplitter('HoldTheDoor')
console.log('----------');
pascalCaseSplitter('ThisIsSoAnnoyingToDo')