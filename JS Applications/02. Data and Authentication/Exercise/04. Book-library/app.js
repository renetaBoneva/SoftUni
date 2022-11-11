let loadBooksBtn = document.getElementById('loadBooks');
loadBooksBtn.addEventListener('click', getAllBooks)
let tableBody = document.querySelector('tbody');
tableBody.innerHTML = '';
getAllBooks()

let form = document.querySelector('form');
form.addEventListener('submit', getNewBookInfo)
form.setAttribute('id', "createBook")

async function getAllBooks() {
    let response = await fetch('http://localhost:3030/jsonstore/collections/books')
    let allBooksInfo = await response.json();

    let booksInfoArr = Array.from(Object.entries(allBooksInfo));

    tableBody.innerHTML = '';

    booksInfoArr.forEach(([id, infoObj]) => {
        let tr = document.createElement('tr');
        tr.setAttribute('id', id)

        let titleTD = document.createElement('td');
        titleTD.textContent = infoObj.title;
        tr.appendChild(titleTD)

        let authorTD = document.createElement('td');
        authorTD.textContent = infoObj.author;
        tr.appendChild(authorTD)

        let actionTD = document.createElement('td');
        let editBtn = document.createElement('button')
        editBtn.textContent = 'Edit'
        editBtn.addEventListener('click', editBookInfo)
        actionTD.appendChild(editBtn)

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete'
        deleteBtn.addEventListener('click', deleteBookInfo)
        actionTD.appendChild(deleteBtn)

        tr.appendChild(actionTD)
        tableBody.appendChild(tr)
    })
}

function editBookInfo(event) {
    //Treat old info
    event.preventDefault()
    form.style.display = "none";
    let htmlBODY = document.querySelector('body');
    let tr = event.target.parentNode.parentNode;
    let oldTitle = tr.querySelectorAll('td')[0].textContent
    let oldAuthor = tr.querySelectorAll('td')[1].textContent
    let id = tr.getAttribute('id')

    createEditForm(htmlBODY, oldTitle, oldAuthor, id)
}

function createEditForm(htmlBODY, oldTitle, oldAuthor, id) {
    let editForm = document.createElement("form");
    editForm.setAttribute('id', "editBook")
    let h3 = document.createElement('h3');
    h3.textContent = 'EditFORM';
    editForm.appendChild(h3);

    let titleLabel = document.createElement('label');
    titleLabel.textContent = "TITLE";
    editForm.appendChild(titleLabel);

    let titleInput = document.createElement('input');
    titleInput.value = oldTitle;
    titleInput.setAttribute('type', 'text')
    titleInput.setAttribute('name', 'title')
    editForm.appendChild(titleInput)

    let authorLabel = document.createElement('label');
    authorLabel.textContent = "AUTHOR";
    editForm.appendChild(authorLabel);

    let authorInput = document.createElement('input');
    authorInput.value = oldAuthor;
    authorInput.setAttribute('type', 'text')
    authorInput.setAttribute('name', 'author')
    editForm.appendChild(authorInput)

    let saveBTN = document.createElement('button');
    saveBTN.innerText = 'Save';

    editForm.appendChild(saveBTN);
    htmlBODY.appendChild(editForm);
    editForm.addEventListener('submit', (event) => {
        event.preventDefault()
        getEditedInfo(event, id)
    })

}

function getEditedInfo(event, id) {
    form.style.display = "block";
    let editForm = document.getElementById('editBook');
    //editForm.style.display = 'none';

    let newBookForm = new FormData(editForm);

    let author = newBookForm.get('author')
    let title = newBookForm.get('title')

    if (title == '' && author == "") {
        window.alert("Please, enter title and author!");
    } else if (title == '') {
        window.alert("Please, enter title!");
    } else if (author == '') {
        window.alert("Please, enter author!");
    }
    editForm.remove()
    putEditedBook(id, { author, title })
}

async function putEditedBook(id, body) {
    let response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'PUT',
        headers: { 'content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    getAllBooks()
}

async function deleteBookInfo(event) {
    let tr = event.target.parentNode.parentNode;
    let id = tr.getAttribute('id')

    tr.remove()
    let response = await fetch(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'DELETE'
    })

}

function getNewBookInfo(event) {
    event.preventDefault()
    let newBookForm = new FormData(form);

    let title = newBookForm.get('title')
    let author = newBookForm.get('author')

    if (title == '' && author == "") {
        window.alert("Please, enter title and author!");
    } else if (title == '') {
        window.alert("Please, enter title!");
    } else if (author == '') {
        window.alert("Please, enter author!");
    }

    postNewBookInfo({ title, author })
}

async function postNewBookInfo(body) {
    let response = await fetch('http://localhost:3030/jsonstore/collections/books', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    })
    getAllBooks()
}
// debugger
