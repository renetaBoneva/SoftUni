function dictionary(input){
    //Making a data copy
    let data = input.slice();

    //Writing some words in our notebook
    let notebook = new Map();
    let infoWord = data.shift().split(' | ');
    for(let line of infoWord){
        let [word, definition] = line.split(': ')
        if(notebook.has(word)){
            notebook.get(word).push(definition)
        } else{
            let definitionArr = [definition];
            notebook.set(word, definitionArr);
        }
    }

    //Getting teacher's words
    let teachersWords = data.shift().split(' | ')
    //Getting the command
    let command = data.shift();
    
    //Doing the command
    if(command === 'Test'){
        for(let teachersWord of teachersWords){
            if(notebook.has(teachersWord)){
                console.log(`${teachersWord}:`);
                for(let definition of notebook.get(teachersWord)){
                    console.log(` -${definition}`);
                }
            }
        }

    } else if(command === 'Hand Over'){
        let writtenWords = Array.from(notebook.keys());
        console.log(writtenWords.join(' '));
    }
}
dictionary(["programmer: an animal, which turns coffee into code | developer: a magician",
"fish | domino",
"Hand Over"])
console.log('-------------');
dictionary(["care: worry, anxiety, or concern | care: a state of mind in which one is troubled | face: the front part of the head, from the forehead to the chin",
"care | kitchen | flower",
"Test"])
console.log('-------------');
dictionary(["tackle: the equipment required for a task or sport | code: write code for a computer program | bit: a small piece, part, or quantity of something | tackle: make determined efforts to deal with a problem | bit: a short time or distance",
"bit | code | tackle",
"Test"])
