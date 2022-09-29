function replaceRepeatingChars(input) {

    let data = [];
    for (let letter of input) {
        data.push(letter);
    }
    let result = [];
    result.push(' ');

    for (let i = 0; i < data.length; i++) {
        let currentLetter = data[i];
        let nextLetter = data[i + 1];
        if (currentLetter === nextLetter){
            data.splice(i+1, 1);
            i--
        } else{
            result.push(currentLetter)
        }
    }
    console.log(result.join(''));
}
replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa')
replaceRepeatingChars('qqqwerqwecccwd')