import { html, repeat } from "../lib.js";
import { getAllAlbums } from "../api/data.js"

export async function showDashboard(ctx, next) {
    let allAlbumsData = await getAllAlbums();

    let content = html`
    <section id="dashboard">
        <h2>Albums</h2>
        ${isAlbums(allAlbumsData)}    
    </section>`
    ctx.renderView(content)
}

function albumTempl(albumData) {
    return html`
    <li class="card">
        <img src=${"../.." + albumData.imageUrl} alt="travis" />
        <p>
            <strong>Singer/Band: </strong><span class="singer">${albumData.singer}</span>
        </p>
        <p>
            <strong>Album name: </strong><span class="album">${albumData.album}</span>
        </p>
        <p><strong>Sales:</strong><span class="sales">${albumData.sales}</span></p>
        <a class="details-btn" href=${"/details/" + albumData._id}>Details</a>
    </li>`
}

function isAlbums(allAlbumsData) {
    if (allAlbumsData.length > 0) {
        return html`
            <ul class="card-wrapper">
                ${repeat(allAlbumsData, (albumData) => albumData._id, albumTempl)}
            </ul>`
    } else {
        return html`<h2>There are no albums added yet.</h2>`;
    }
}