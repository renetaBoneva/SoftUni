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
// loadBtn.addEventListener('click', displayCatches);

let p = document.createElement('p');
p.textContent = 'Click to load chatches'
document.querySelector('fieldset#main').replaceChildren(p);

