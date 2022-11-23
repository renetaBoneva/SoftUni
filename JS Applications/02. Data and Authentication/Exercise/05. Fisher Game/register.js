if (!sessionStorage.accessToken) {
    document.querySelector('#user').remove()
} else {
    document.querySelector('#guest').remove()
    document.querySelector('header span').textContent = sessionStorage.email;
}

let registerForm = document.querySelector('form');
registerForm.addEventListener('submit', registerUser)

async function registerUser(e) {
    e.preventDefault();
    try {
        let form = new FormData(registerForm);
        let email = form.get('email');
        let password = form.get('password');
        let rePass = form.get('rePass');

        if (!email.includes('@') || email == "") {
            throw new Error('Невалиден имейл!');
        }

        if (password !== rePass || password == "" || rePass == "") {
            throw new Error('Невалидна парола!');
        }

        let response = await fetch('http://localhost:3030/users/register', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        })
        let data = await response.json();

        if (response.ok != true) {
            throw new Error(data.message);
        }
        sessionStorage.setItem('accessToken', data.accessToken)
        sessionStorage.setItem('email', data.email)
        sessionStorage.setItem('_id', data._id)
        window.location = './index.html';

    }
    catch (error) {
        alert(error.message)
    }
}
