import { getAllIdeas, getDetailsData } from "../api/data.js"
import { crateDetailsView } from "./details.js";

let section = document.getElementById('dashboard-holder')

export async function showDashboard(ctx) {

    let ideas = await getAllIdeas();

    const noIdeaHeader = section.querySelector('h1');
    if (ideas.length < 1) {
        ctx.showSection(noIdeaHeader)
    } else {
        section.innerHTML = '';

        Array.from(ideas).forEach(idea => {
            let div = document.createElement('div');
            div.classList = ("card overflow-hidden current-card details")
            div.style.width = '20rem';
            div.style.height = '18rem';
            div.innerHTML = `
            <div class="card-body">
                <p class="card-text">${idea.title}</p>
            </div>
            <img class="card-image" src="${idea.img}" alt="Card image cap">
            <a class="btn" href="/details-view" _id="${idea._id}">Details</a>`
            section.appendChild(div)
        })

        let detailsBtns = section.querySelectorAll("a");
        Array.from(detailsBtns).forEach(btn => btn.addEventListener('click', async (event) => {
            event.preventDefault()
            const detailsData = await getDetailsData(event.target.getAttribute('_id'))
            crateDetailsView(detailsData)
            ctx.goTo("/details-view")
        }))
        ctx.showSection(section)
    }
}