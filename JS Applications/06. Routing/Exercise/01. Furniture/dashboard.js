import { getAllFurniture } from "../api/data.js"
import { html, repeat } from "../lib.js"

export async function showDashboardView(ctx, next) {    
    const allFurnitureData = await getAllFurniture();
    const content = html`
        <div class="row space-top">
            <div class="col-md-12">
                <h1>Welcome to Furniture System</h1>
                <p>Select furniture from the catalog to view details.</p>
            </div>
        </div>
        <div class="row space-top">
            ${repeat(allFurnitureData, (item)=> item._id, createFurnitureTemplate)}
        </div>`
    ctx.renderView(content)
    const a = document.querySelector('nav a')
    a.classList.add('active')
}

export function createFurnitureTemplate(itemData) {
    return html`
    <div class="col-md-4">
        <div class="card text-white bg-primary">
            <div class="card-body">
                <img src=${"../." + itemData.img} />
                <p>${itemData.description}</p>
                <footer>
                    <p>Price: <span>${itemData.price} $</span></p>
                </footer>
                <div>
                    <a href=/dashboard/${itemData._id} class="btn btn-info")}>Details</a>
                </div>
            </div>
        </div>
    </div>`
}
