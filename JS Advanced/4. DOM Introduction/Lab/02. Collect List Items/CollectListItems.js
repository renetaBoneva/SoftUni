function extractText() {
    let textArr = document.querySelectorAll('#items li');
    let textarea = document.querySelector('#result');
    for(let li of textArr){
        textarea.value += li.textContent + '\n';
    }
}