import { onRegister } from "../api/user.js";

let section = document.getElementById('register-view');

let registerForm = section.querySelector('form');
registerForm.addEventListener('submit', getRegInfo)

let context;

export function showRegister(ctx) {
    context = ctx;
    ctx.showSection(section)
}

async function getRegInfo(event) {
    event.preventDefault()
    let form = new FormData(registerForm);

    let email = form.get('email');
    let password = form.get('password');
    let repeatPassword = form.get('repeatPassword');

    try {
        if (email.length < 3) {
            throw new Error('The email should be at least 3 characters long!')
        }
        if (password.length < 3) {
            throw new Error('The password should be at least 3 characters long!')
        }
        if (password != repeatPassword) {
            throw new Error('Incorrect password!')
        }
        registerForm.reset()

        await onRegister(email,password)
        context.goTo('/home-view')
    } catch (error) {
        alert(error.message)
    }

}