let allBtns = document.querySelectorAll('button');
if (!sessionStorage.accessToken) {
    Array.from(allBtns).map(x => {
        x.disabled = true
    })
    document.querySelector('#user').remove()
} else {
    document.querySelector('#guest').remove()
    document.querySelector('header span').textContent = sessionStorage.email;
    Array.from(allBtns).map(x => {
        x.disabled = false
    })

    let logoutBtn = document.getElementById('logout');
    logoutBtn.addEventListener('click', logout)
}

let fieldset = document.querySelector('fieldset');
let p = document.createElement('p');
p.textContent = 'Click to load catches'
document.querySelector('fieldset #catches').remove();
fieldset.appendChild(p)

async function logout(){
    let response = await fetch('http://localhost:3030/users/logout',{
        method: "DELETE",
        headers:{'X-Authorization': sessionStorage.accessToken,
                'Content-Type': 'application/json'}
    })

    sessionStorage.clear()
    window.location = './index.html'
}


let loadBtn = document.querySelector('#home-view aside button.load');
loadBtn.disabled = false
loadBtn.addEventListener('click', getCatchesInfo);

async function getCatchesInfo(){
    let response = await fetch('http://localhost:3030/data/catches');
    let data = await response.json()
    displayCatches(data)
}

function displayCatches(allCatchesArr){
    fieldset.querySelector('p').remove();
    let catchesDIV = document.createElement('div')
    catchesDIV.setAttribute('id', 'catches')

    allCatchesArr.forEach(currentCatch => {
        let currentCatchDIV = document.createElement('div');
        currentCatchDIV.setAttribute('class', 'catch')

        currentCatchDIV.innerHTML = `
        <label>Angler</label>
        <input type="text" class="angler" value="${currentCatch.angler}">
        <label>Weight</label>
        <input type="text" class="weight" value="${currentCatch.weight}">
        <label>Species</label>
        <input type="text" class="species" value="${currentCatch.species}">
        <label>Location</label>
        <input type="text" class="location" value="${currentCatch.location}">
        <label>Bait</label>
        <input type="text" class="bait" value="${currentCatch.bait}">
        <label>Capture Time</label>
        <input type="number" class="captureTime" value="${currentCatch.captureTime}">
        <button class="update" data-id="${currentCatch._id}" owner-id="${currentCatch._ownerId}">Update</button>
        <button class="delete" data-id="${currentCatch._id}" owner-id="${currentCatch._ownerId}">Delete</button>`

        catchesDIV.appendChild(currentCatchDIV)
    })

    
    fieldset.appendChild(catchesDIV)

    let updateBtnsArr = document.getElementsByClassName('update');
    Array.from(updateBtnsArr).forEach(btn => {
        btn.addEventListener('click', updateCatch)
        if(btn.getAttribute('owner-id') != sessionStorage._id){
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }
    })

    let deleteBtnsArr = document.getElementsByClassName('delete');
    Array.from(deleteBtnsArr).forEach(btn => {
        btn.addEventListener('click', deleteCatch)
        if(btn.getAttribute('owner-id') != sessionStorage._id){
            btn.disabled = true;
        } else {
            btn.disabled = false;
        }})
}

function updateCatch(event){
    let btn = event.target;
    let angler = btn.parentNode.getElementsByClassName('angler')[0].value;
    let weight = btn.parentNode.getElementsByClassName('weight')[0].value ;
    let species = btn.parentNode.getElementsByClassName('species')[0].value ;
    let location = btn.parentNode.getElementsByClassName('location')[0].value ;
    let bait = btn.parentNode.getElementsByClassName('bait')[0].value ;
    let captureTime = btn.parentNode.getElementsByClassName('captureTime')[0].value ;
    let body = {angler, weight, species, location, bait};;

    let dataId = btn.getAttribute('data-id');
    putRequestUpdatedCatch(dataId, body)
}
async function putRequestUpdatedCatch(dataId, body){
    let response = await fetch(`http://localhost:3030/data/catches/${dataId}`, {
        method: 'PUT',
        headers: {'X-Authorization': sessionStorage.accessToken,
                    'Content-Type': "application/json"},
        body: JSON.stringify(body)
    })
}

async function deleteCatch(event){    
    let btn = event.target;
    let dataId = btn.getAttribute('data-id');
    
    let response = await fetch(`http://localhost:3030/data/catches/${dataId}`, {
        method: "Delete",
        headers: {'Content-type': 'application/json'}
    })
}
