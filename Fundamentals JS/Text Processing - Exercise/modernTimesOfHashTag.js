function modernTimesOfHashTag(input) {

    let data = input.split(' ');
    let result = [];

    for (let word of data) {
        if (word.startsWith('#') && word.length > 1) {
            let hashtagWord = word.substring(1, word.length);
            let isValid = true;
            for (let letter of hashtagWord) {
                let letterCode = letter.charCodeAt(0);
                if (letterCode < 65 || letterCode > 122) {
                    isValid = false;
                    break;
                }
            }
            if(isValid){                
                result.push(hashtagWord);
            }
        }
    }

    for(let word of result){
        console.log(word);
    }
}
modernTimesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia')
console.log('--------------------');
modernTimesOfHashTag(
    'The symbol # is known #variously in English-speaking #regions as the #number sign')