import { html, render } from "./node_modules/lit-html/lit-html.js";

const root = document.getElementById('menu');

const newItemForm = document.querySelector('form');
newItemForm.addEventListener('submit', addItem)

async function addItem(event) {
    event.preventDefault();
    let itemText = document.getElementById('itemText').value;
    if(itemText == ""){
        return alert('Please, enter item text!')
    }

    await fetch('http://localhost:3030/jsonstore/advanced/dropdown', {
        method: 'post',
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({'text': itemText})
    })
    loadOptions()
    newItemForm.reset()
}

loadOptions()

async function loadOptions() {
    let response = await fetch('http://localhost:3030/jsonstore/advanced/dropdown')
    let options = await response.json();

    let toLoad = Array.from(Object.values(options)).map(option => {
        let optionNode = html`<option value="${option._id}">${option.text}</option>`
        return optionNode
    })
    
    render(toLoad, root)
}
