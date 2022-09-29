function wordOccurrences(input) {

    let result = {}

    //Counting words
    for (let word of input) {
        let count = 0;
        if (result.hasOwnProperty(word)) {
            result[word]++;
        } else if (input.includes(word)) {
            count++;
            result[word] = count;
        }
    }

    let sortedWords = Array.from(Object.values(result)).sort((a, b) => { return b - a })
 
    for (let num of sortedWords) {
        for (let word in result) {
            if (result[word] === num) {
                console.log(`${word} -> ${num} times`);
                result[word] = result[num];
            }
        }
    }
}
wordOccurrences([
    "Here", "is", "the", "first", "sentence",
    "Here", "is", "another", "sentence",
    "And", "finally", "the", "third", "sentence"])
    console.log('--------------');
wordOccurrences(["dog", "bye", "city", "dog", "dad", "boys", "ginger"])
