function worldTracker(data) {

    let serachinWords = data.shift().split(' ');
    let result = new Map();

    for (let word of serachinWords) {
        result.set(word, 0);
    }

    for (let word of data) {
        if (result.has(word)) {
            let oldValue = result.get(word);
            result.set(word, oldValue + 1);
        }
    }

    let sorted = Array.from(result).sort(([keyA, valueA],[keyB, valueB]) => {
                    return valueB - valueA;
                })
    for(let [word, num] of sorted){
        console.log(`${word} - ${num}`);
    }
}

worldTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the',
    'occurrences', 'of', 'the', 'words',
    'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task']
)
console.log('---------------');
worldTracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence']
)
