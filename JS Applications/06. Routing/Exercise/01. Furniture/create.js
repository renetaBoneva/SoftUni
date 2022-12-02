import * as data from "../api/api.js";
import { postCreateFurniture } from "../api/data.js";
import { html } from "../lib.js";

let context;

export function showCreate(ctx, next){
    let content;
    if(sessionStorage.getItem('userData')){
    content= html`
        <div class="row space-top">
        <div class="col-md-12">
            <h1>Create New Furniture</h1>
            <p>Please fill all fields.</p>
        </div>
    </div>
    <form @submit=${createHandler}>
        <div class="row space-top">
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-make">Make</label>
                    <input class="form-control valid" id="new-make" type="text" name="make">
                </div>
                <div class="form-group has-success">
                    <label class="form-control-label" for="new-model">Model</label>
                    <input class="form-control is-valid" id="new-model" type="text" name="model">
                </div>
                <div class="form-group has-danger">
                    <label class="form-control-label" for="new-year">Year</label>
                    <input class="form-control is-invalid" id="new-year" type="number" name="year">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-description">Description</label>
                    <input class="form-control" id="new-description" type="text" name="description">
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <label class="form-control-label" for="new-price">Price</label>
                    <input class="form-control" id="new-price" type="number" name="price">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-image">Image</label>
                    <input class="form-control" id="new-image" type="text" name="img">
                </div>
                <div class="form-group">
                    <label class="form-control-label" for="new-material">Material (optional)</label>
                    <input class="form-control" id="new-material" type="text" name="material">
                </div>
                <input type="submit" class="btn btn-primary" value="Create" />
            </div>
        </div>
    </form>`; 
    }
    ctx.renderView(content)
    context = ctx
}

async function createHandler(event){
    event.preventDefault()

    try{
        const form = new FormData(event.target);
        const body = validateInputData(form)    
    
        await postCreateFurniture(body)
        context.page.redirect('/dashboard')
    }catch(error){
        alert(error.message)
    }
}

export function validateInputData(form){
    const make = form.get('make')
    const model = form.get('model')
    const year = form.get('year')
    const description = form.get('description')
    const price = form.get('price')
    const img = form.get('img')
    const material = form.get('material')
    
    if(make.length < 5 || model.length < 5){
        throw new Error('Make and Model must be at least 4 symbols long')
    }

    if(year < 1950 || year > 2050){
        throw new Error('Year must be between 1950 and 2050')
    }

    if(description.length < 11 ){
        throw new Error('Description must be more than 10 symbols')
    }
    
    if(price < 0 || price == ""){
        throw new Error('Price must be a positive number')
    }

    if(img == ""){        
        throw new Error('Image URL is required')
    }

    return {make, model, year, description, price, img, material};
}