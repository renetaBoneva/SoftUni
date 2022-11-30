import { cats } from "./catSeeder.js"
import { render, html } from "./node_modules/lit-html/lit-html.js"

const root = document.getElementById('allCats')

function createCatCard(cat) {
    return html`
    <li>
        <img src="./images/${cat.imageLocation}.jpg "width="250" height="250" alt="Card image cap">
        <div class="info">
            <button class="showBtn" id=${cat.id} @click=${handleDisplay}>Show status code</button>
            <div class="status"  id="100" style="display: none">
                <h4>Status Code: ${cat.statusCode}</h4>
                <p>${cat.statusMessage}</p>
            </div>
        </div>
    </li>`
}

render(html`<ul>${cats.map(createCatCard)}</ul>`, root)

function handleDisplay(event){
    event.preventDefault()
    let detailsDiv = event.target.parentNode.querySelector('div');
    if(event.target.textContent == 'Show status code'){
        detailsDiv.style.display = 'block'
        event.target.textContent = 'Hide status code'
    } else if(event.target.textContent == 'Hide status code'){
        detailsDiv.style.display = 'none'
        event.target.textContent = 'Show status code'
    }
}
