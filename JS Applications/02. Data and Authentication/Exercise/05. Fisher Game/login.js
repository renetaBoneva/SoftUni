if (!sessionStorage.accessToken) {
    document.querySelector('#user').remove()
} else {
    document.querySelector('#guest').remove()
    document.querySelector('header span').textContent = sessionStorage.email;
}

let loginForm = document.querySelector('form');
loginForm.addEventListener('submit', logIn)

function logIn(event){
    event.preventDefault();
    let form = new FormData(loginForm);
    let email =  form.get('email');
    let password =  form.get('password');
    getLoginInfo()
}

async function getLoginInfo(){
    let response = await fetch('http://localhost:3030/users/login')
    let data = await response.json()
    console.log(data);
}