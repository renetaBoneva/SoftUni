import * as api from "./api.js";
import { html, render } from './node_modules/lit-html/lit-html.js'

const loadAllBooksBtn = document.getElementById('loadBooks');
loadAllBooksBtn.addEventListener('click', loadAllBooks)

const form = document.querySelector('form');
form.addEventListener('submit', handleForm)

loadForm()

function loadForm(event) {
    let formTemplate;
    if (event) {
        form.setAttribute('id', 'edit-form')
        formTemplate = html`<input type="hidden" name="id">
<h3>Edit book</h3>
<label>TITLE</label>
<input type="text" name="title" placeholder="Title...">
<label>AUTHOR</label>
<input type="text" name="author" placeholder="Author...">
<input type="submit" value="Save" id=${event.target.getAttribute('id')}>`
    } else {
        form.setAttribute('id', 'add-form')
        formTemplate = html`<h3>Add book</h3>
<label>TITLE</label>
<input type="text" name="title" placeholder="Title...">
<label>AUTHOR</label>
<input type="text" name="author" placeholder="Author...">
<input type="submit" value="Submit">`
    }
    render(formTemplate, document.querySelector('form'))

}

async function loadAllBooks() {
    const allBooksInfo = await api.get('jsonstore/collections/books')

    const tableBook = html`
    <thead>
        <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        ${Array.from(Object.entries(allBooksInfo)).map(createRow)}
    </tbody>`


    render(tableBook, document.querySelector('table'))
    let btns = document.querySelectorAll('table button')
    Array.from(btns).forEach(btn => {
        if (btn.textContent == 'Edit') {
            btn.addEventListener('click', loadForm)
        } else{            
            btn.addEventListener('click', deleteHandler)
        }
    })
}

function createRow([id, info]) {
    return html`    
    <tr>
        <td>${info.title}</td>
        <td>${info.author}</td>
        <td>
            <button id=${id}>Edit</button>
            <button id=${id}>Delete</button>
        </td>
    </tr>`
}

async function handleForm(event) {
    event.preventDefault()
    let form = new FormData(event.target);
    let title = form.get('title')
    let author = form.get('author')
    let id;
    if (event.target.querySelector('h3').textContent == 'Add book') {
        await api.post('jsonstore/collections/books', { author, title })
        await loadAllBooks()
    } else if (event.target.querySelector('h3').textContent == 'Edit book') {
        id = event.submitter.getAttribute('id')
        await api.put(`jsonstore/collections/books/${id}`, { author, title })
        await loadAllBooks()
    }
    loadForm()
}

async function deleteHandler(event){
    let id = event.target.getAttribute('id');
    await api.del(`jsonstore/collections/books/${id}`);    
    await loadAllBooks()
}
