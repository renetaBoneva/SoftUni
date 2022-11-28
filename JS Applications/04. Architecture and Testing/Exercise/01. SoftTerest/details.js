let section = document.getElementById('details-view')

export function crateDetailsView(detailsData) {
    section.innerHTML = `<img class="det-img" src="${detailsData.img}" />
    <div class="desc">
        <h2 class="display-5">${detailsData.title}</h2>
        <p class="infoType">Description:</p>
        <p class="idea-description">${detailsData.description}</p>
    </div>`;

    console.log('TO CHECH IF THE USER IS CREATOR');
    if (true) {
        section.innerHTML += `
        <div class="text-center" _ownerId="${detailsData._ownerId}">
            <a class="btn detb" href="/delete">Delete</a>
        </div>`
    }
    section.querySelector('a').addEventListener('click', (event)=>{
        event.preventDefault()
        console.log('DELETE HANDLER');
    })
}

export function showDetails(ctx) {
    ctx.showSection(section)
}