import { delAlbum, getDetails, getLikesCount, postLike } from "../api/data.js"
import { html } from "../lib.js"

let context;
export async function showDetailsView(ctx, next) {

    const id = ctx.params.id;
    const detailsDataArr = await getDetails(id)
    const countLikes = await getLikesCount(id);
    const content = html`
    <section id="details">
        <div id="details-wrapper">
            <p id="details-title">Album Details</p>
            <div id="img-wrapper">
                <img src="./images/BackinBlack.jpeg" alt="example1" />
            </div>
            <div id="info-wrapper">
                <p><strong>Band:</strong><span id="details-singer">${detailsDataArr.singer}</span></p>
                <p>
                    <strong>Album name:</strong><span id="details-album">${detailsDataArr.album}</span>
                </p>
                <p><strong>Release date:</strong><span id="details-release">${detailsDataArr.release}</span></p>
                <p><strong>Label:</strong><span id="details-label">${detailsDataArr.label}</span></p>
                <p><strong>Sales:</strong><span id="details-sales">${detailsDataArr.sales}</span></p>
            </div>
            <div id="likes">Likes: <span id="likes-count">${countLikes}</span></div>
    
            <!--Edit and Delete are only for creator-->
            ${isOwner(detailsDataArr)}
        </div>
    </section>`
    ctx.renderView(content)
    context = ctx
    context.detailsDataArr = detailsDataArr;
}

function isOwner(detailsDataArr) {
    const ownerId = detailsDataArr._ownerId;

    if (sessionStorage.getItem('userData')) {
        const currentUserID = JSON.parse(sessionStorage.getItem('userData'))._id;
        if (ownerId == currentUserID) {
            return html`
        <div id="action-buttons">
            <a href=${"/edit/" + detailsDataArr._id} id="edit-btn">Edit</a>
            <a href="#" id="delete-btn" @click=${handleDelete} _id=${detailsDataArr._id}>Delete</a>
        </div>`
        } else {
            return html`
            <div id="action-buttons">
                <a href="#" id="like-btn" @click=${handleLike}>Like</a>;
            </div>`
        }
    } else {
        return html``;
    }
}

async function handleDelete(event) {
    event.preventDefault();
    const _id = event.target.getAttribute('_id')
    let text = "Are you sure you want to delete this album?";
    if (confirm(text) == true) {
        await delAlbum(_id)
        context.page.redirect('/dashboard')
    }

}

async function handleLike(event) {
    event.preventDefault()
    const id = context.detailsDataArr._id;
    await postLike(id)
    context.page.redirect('/dashboard')
}