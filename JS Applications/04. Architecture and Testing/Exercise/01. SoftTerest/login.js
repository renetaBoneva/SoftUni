import { onLogin } from "../api/user.js";

let section = document.getElementById('login-view')

let loginForm = section.querySelector('form')
loginForm.addEventListener('submit', submitLogin)

let context;

export function showLogin(ctx){
    ctx.showSection(section)
    context = ctx;
}

async function submitLogin(event){
    event.preventDefault();

    const form = new FormData(loginForm);

    let email  = form.get('email');
    let password  = form.get('password');

    try{
        await onLogin(email, password)
        context.goTo('/home-view')
    } catch(error){
        alert(error.message)
    }
}