import * as api from "../api/api.js";

let section = document.getElementById('details-view')
let context;

export function showDetails(ctx) {
    ctx.showSection(section)
    context = ctx;
}

export function crateDetailsView(detailsData) {
    section.innerHTML = `<img class="det-img" src="${detailsData.img}" />
        <div class="desc">
            <h2 class="display-5">${detailsData.title}</h2>
            <p class="infoType">Description:</p>
            <p class="idea-description">${detailsData.description}</p>
        </div>`;

    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        if (user._id == detailsData._ownerId) {
            section.innerHTML += `
                <div class="text-center" _ownerId="${detailsData._ownerId}">
                    <a class="btn detb" href="/delete">Delete</a>
                </div>`
            section.querySelector('a').addEventListener('click', async (event) => {
                event.preventDefault()
                await api.del(`data/ideas/${detailsData._id}`);
                context.goTo('/dashboard-holder')
            })
        }
    }
}
