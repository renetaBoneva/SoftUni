import { postAddAlbum } from "../api/data.js";
import { html } from "../lib.js";

let context;
export function showAddAlbum(ctx, next) {
    if (sessionStorage.getItem('userData')) {
        const content = html`
            <section id="create">
                <div class="form">
                    <h2>Add Album</h2>
                    <form class="create-form" @submit=${handleCreateForm}>
                        <input type="text" name="singer" id="album-singer" placeholder="Singer/Band" />
                        <input type="text" name="album" id="album-album" placeholder="Album" />
                        <input type="text" name="imageUrl" id="album-img" placeholder="Image url" />
                        <input type="text" name="release" id="album-release" placeholder="Release date" />
                        <input type="text" name="label" id="album-label" placeholder="Label" />
                        <input type="text" name="sales" id="album-sales" placeholder="Sales" />
            
                        <button type="submit">post</button>
                    </form>
                </div>
            </section>`
        ctx.renderView(content)
        context = ctx;
    }
}

async function handleCreateForm(event) {
    event.preventDefault();

    const form = new FormData(event.target)
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
        await postAddAlbum({singer, album, imageUrl, release, label, sales})
        context.page.redirect('/dashboard')
    } catch (error){
        alert(error.message)
    }

}