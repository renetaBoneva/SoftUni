import * as api from "../api/api.js";

let section = document.getElementById('create-view')

let createForm = section.querySelector('form');
createForm.addEventListener('submit', handleCreateInfo)

let context;

export function showCreate(ctx) {
    ctx.showSection(section);
    context = ctx;
}

async function handleCreateInfo(event) {
    event.preventDefault();

    try {
        let form = new FormData(createForm);

        let title = form.get('title');
        let description = form.get('description');
        let imageURL = form.get('imageURL');

        if (title.length < 6) {
            throw new Error('Title should be at least 6 characters!')
        }
        if (description.length < 10) {
            throw new Error('Description should be at least 10 characters!')
        }
        if (imageURL.length < 5) {
            throw new Error('ImageURL should be at least 5 characters!')
        }
        let _ownerId = JSON.parse(localStorage.getItem('user'))._id;

        await api.post('data/ideas', {title, description, imageURL, _ownerId})
        context.goTo('/dashboard-holder')
    } catch (error) {
        alert(error.message)
    }



}
