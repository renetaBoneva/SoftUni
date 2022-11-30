import { render, html } from './node_modules/lit-html/lit-html.js';

const root = document.getElementById('root');
const inputForm = document.querySelector('form');
inputForm.addEventListener('submit', getTownsInfo)

function getTownsInfo(event){
    event.preventDefault();
    const input = document.querySelector('input').value;
    if(input == ""){
        return alert('Please, enter town!')
    }
    const towns = input.split(', ');
    renderTownList(towns)
}

function renderTownList(towns) {
    const create = (towns) => html`
        <ul>
            ${towns.map(town => html`<li>${town}</li>`)}
        </ul>`
    render(create(towns), root)
}
