
let section = document.getElementById('home-view')

export function showHome(ctx){
    let getStartedBtn = section.querySelector('a');
    getStartedBtn.addEventListener('click', ctx.onNav);
    ctx.showSection(section)
}
