function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll('#main button')[0];
    let decodeBtn = document.querySelectorAll('#main button')[1];

    encodeBtn.addEventListener('click', encodeMessage)

    function encodeMessage(event){
        let encodeBtn = event.target;
        let input = Array.from(encodeBtn.parentNode.querySelector('textarea').value);

        let result = [];
        for (let letter of input) {
            let oldLetterCode = letter.charCodeAt(0);
            let newLetterCode = oldLetterCode + 1;
            result.push(String.fromCharCode(newLetterCode));            
        }
        
        decodeBtn.parentNode.querySelector('textarea').value = result.join('');
        encodeBtn.parentNode.querySelector('textarea').value = '';        

    }

    decodeBtn.addEventListener('click', decodeMessage)

    function decodeMessage(event){
        let decodeBtn = event.target;
        let input = Array.from(decodeBtn.parentNode.querySelector('textarea').value);

        let result = [];
        for (let letter of input) {
            let oldLetterCode = letter.charCodeAt(0);
            let newLetterCode = oldLetterCode - 1;
            result.push(String.fromCharCode(newLetterCode));            
        }
        decodeBtn.parentNode.querySelector('textarea').value = result.join('');
    }
}
