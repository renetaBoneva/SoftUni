import { onLogout } from "../api/user.js";

let section = document.getElementById('home-view')

let context;
export function showHome(ctx){
    let getStartedBtn = section.querySelector('a');
    getStartedBtn.addEventListener('click', ctx.onNav);
    ctx.showSection(section)

    context = ctx;
}

export async function handleLogout(event){
    event.preventDefault();

    await onLogout()
    context.goTo('/home-view')
}
