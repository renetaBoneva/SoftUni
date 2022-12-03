import { html } from "../lib.js";
import { getDetails, putDetails } from "../api/data.js";

let context;
let id;
export async function showEdit(ctx, next) {
    id = ctx.params.id;
    const data = await getDetails(id);
    const content = html`
    <section id="edit">
        <div class="form">
            <h2>Edit Album</h2>
            <form class="edit-form" @submit=${handleEdit}>
                <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" value="${data.singer}" />
                <input type="text" name="album" id="album-album" placeholder="Album" value="${data.album}" />
                <input type="text" name="imageUrl" id="album-img" placeholder="Image url" value="${data.imageUrl}" />
                <input type="text" name="release" id="album-release" placeholder="Release date" value="${data.release}" />
                <input type="text" name="label" id="album-label" placeholder="Label" value="${data.label}" />
                <input type="text" name="sales" id="album-sales" placeholder="Sales" value="${data.sales}" />
    
                <button type="submit">post</button>
            </form>
        </div>
    </section>`
    ctx.renderView(content)
    context = ctx;
}

async function handleEdit(event){
    event.preventDefault()

    const form = new FormData(event.target);
    const singer = form.get('singer')
    const album = form.get('album')
    const imageUrl = form.get('imageUrl')
    const release = form.get('release')
    const label = form.get('label')
    const sales = form.get('sales')

    try{
        if(singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == ''){
            throw new Error('Please, fill all fields!')
        }
        await putDetails(id ,{singer, album, imageUrl, release, label, sales})
        context.page.redirect('/dashboard')
    } catch (error){
        alert(error.message)
    }
}