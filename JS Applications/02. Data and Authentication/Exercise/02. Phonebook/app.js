function attachEvents() {
    let btnLoad = document.getElementById('btnLoad');
    btnLoad.addEventListener('click', getPhonebookInfo)

    let btnCreate = document.getElementById('btnCreate')
    btnCreate.addEventListener('click', getNewCommentInfo)

}

async function getPhonebookInfo(){
    let response =  await fetch('http://localhost:3030/jsonstore/phonebook');
    let info = await response.json();

    showPhonebookInfo(info)
}

function showPhonebookInfo(info){
    let phonebookArr = Array.from(Object.values(info))
    let phonebookUL = document.getElementById('phonebook');
    phonebookUL.innerHTML = "";
    phonebookArr.forEach(person => {
        let li = document.createElement('li');
        li.textContent = `${person.person}: ${person.phone}`
        li.setAttribute('_id', person._id)

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', deletePerson)

        li.appendChild(deleteBtn)
        phonebookUL.appendChild(li)
    });
}

async function deletePerson(event){
    let li = event.target.parentNode;
    let id = li.getAttribute('_id');
    let response = await fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
        method: 'DELETE'
    })

    li.remove()
    getPhonebookInfo()
}

function getNewCommentInfo(){
    let person = document.getElementById('person').value;
    let phone = document.getElementById('phone').value;
    
    document.getElementById('person').value = '';
    document.getElementById('phone').value = '';

    postNewComment({person, phone})
}

async function postNewComment(body){
    let response = await fetch('http://localhost:3030/jsonstore/phonebook', {
        method: 'POST',
        headers: {'Content-Type': "application/json"},
        body: JSON.stringify(body)
    })
    
    getPhonebookInfo()
}

attachEvents();
