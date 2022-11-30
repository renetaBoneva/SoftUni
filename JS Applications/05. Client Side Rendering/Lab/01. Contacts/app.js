import { contacts } from './contacts.js'
import { html, render } from './node_modules/lit-html/lit-html.js'

function loadContacts(contacts) {
    const root = document.getElementById('contacts');

    const contactCards = (contact) => html`
    <div class="contact card">
        <div>
            <i class="far fa-user-circle gravatar"></i>
        </div>
        <div class="info">
            <h2>Name: ${contact.name}</h2>
            <button class="detailsBtn" @click=${handleDisplay}>Details</button>
            <div class="details" id=${contact.id} >
                <p>Phone number: ${contact.phoneNumber}</p>
                <p>Email: ${contact.email}</p>
            </div>
        </div>
    </div>
    `

    render(contacts.map(contactCards), root)
};

loadContacts(contacts)

function handleDisplay(event){
    let infoDiv = event.target.parentNode;
    const detailsDiv = infoDiv.querySelector('div');

    if(detailsDiv.style.display == 'none' || detailsDiv.style.display == ''){
        detailsDiv.style.display = 'block'
    } else{
        detailsDiv.style.display = 'none'
    }
}
