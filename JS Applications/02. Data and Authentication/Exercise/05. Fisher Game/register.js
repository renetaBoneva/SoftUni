if (!sessionStorage.accessToken) {
    document.querySelector('#user').remove()
} else {
    document.querySelector('#guest').remove()
    document.querySelector('header span').textContent = sessionStorage.email;
}

let registerForm = document.querySelector('form');
registerForm.addEventListener('submit', registerUser)

function registerUser(e){
    e.preventDefault();
    try{
        let form = new FormData(registerForm);
        let email = form.get('email');
        let password = form.get('password');
        let rePass = form.get('rePass');

        if(!email.includes('@') || email == ""){
            throw new Error('Невалиден имейл!'); 
        }

        if(password !== rePass || password == "" || rePass == ""){
            throw new Error('Невалидна парола!'); 
        }
        postNewUserDataToTheServer({email, password})
    }
    catch(error){
        alert(error.message)
    }
}

async function postNewUserDataToTheServer(body){
    let response = await fetch('http://localhost:3030/users/register', {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    })

    let token = await response.json();
    sessionStorage.setItem('accessToken', token.accessToken)
    sessionStorage.setItem('email', token.email)
    sessionStorage.setItem('_id', token._id)
    window.location = './index.html';
}
// debugger
