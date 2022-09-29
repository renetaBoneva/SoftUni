function cutAndReverse(input){

    let wordL = input.length;

    //Reversing first half
    let firstSentense = input.substring(0, wordL/2);
    let reversedFirstSentence = [];
    for(let l of firstSentense){
        reversedFirstSentence.unshift(l)
    }

    //Reversing the second half
    let secondSentence = input.substring(wordL/2, wordL);
    let reversedSecondSentence = [];
    for(let l of secondSentence){
        reversedSecondSentence.unshift(l)
    }

    //Printing the result
    console.log(reversedFirstSentence.join(''));
    console.log(reversedSecondSentence.join(''));
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
console.log('----------');
cutAndReverse('sihToDtnaCuoYteBIboJsihTtAdooGoSmI');