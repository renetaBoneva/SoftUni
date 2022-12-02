import { getMyFurniture } from "../api/data.js";
import { html, repeat } from "../lib.js";
import { createFurnitureTemplate } from "./dashboard.js";


export async function showMyFurniture(ctx, next) {

    const userId = JSON.parse(sessionStorage.getItem('userData'))._id;
    const furnitureArr = await getMyFurniture(userId)

    const content = html`
    <div class="row space-top">
        <div class="col-md-12">
            <h1>My Furniture</h1>
            <p>This is a list of your publications.</p>
        </div>
    </div>
    ${repeat(furnitureArr, (item)=> item._id, createFurnitureTemplate)}
    `

    ctx.renderView(content)
}
