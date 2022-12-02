import { delFurniture, getDetails } from "../api/data.js";
import { html } from "../lib.js"

let context;

export async function showDetails(ctx, next) {

    const id = ctx.params.id;
    const data = await getDetails(id);

    const content = html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>Furniture Details</h1>
        </div>
    </div>
    <div class="row space-top">
        <div class="col-md-4">
            <div class="card text-white bg-primary">
                <div class="card-body">
                    <img src=${"../." + data.img} />
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <p>Make: <span>${data.make}</span></p>
            <p>Model: <span>${data.model}</span></p>
            <p>Year: <span>${data.year}</span></p>
            <p>Description: <span>${data.description}</span></p>
            <p>Price: <span>${data.price}</span></p>
            <p>Material: <span>${data.material}</span></p>
            ${isOwner(data)}
        </div>
    </div>`

    ctx.renderView(content)
    context = ctx;
}

function isOwner(data){
    const userData = JSON.parse(sessionStorage.getItem('userData'))
    if(userData && data._ownerId == userData._id ){
        return html`<div>
        <a href=${'/edit/' + data._id} class="btn btn-info" >Edit</a>
        <a href=# class="btn btn-red" @click=${deleteHandler} _id=${data._id}>Delete</a>
    </div>`
    } else{
        return ""
    }
}
async function deleteHandler(event) { 
    event.preventDefault()
    const _id = event.target.getAttribute('_id') 
    let text = "Are you shure you want to delete this item?";
    if (confirm(text) == true) {
        await delFurniture(_id)
        context.page.redirect('/dashboard')
    } 
}
