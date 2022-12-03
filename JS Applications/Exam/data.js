import * as api from "./api.js";

const endpoints = {
    'registerURLpath': "users/register",
    'loginURLpath': 'users/login',
    'logoutURLpath': 'users/logout',
    'getAllAlbums': 'data/albums?sortBy=_createdOn%20desc',
    'addAlbum': 'data/albums',
    'detailsPath': 'data/albums/',
    'sendLike': 'data/likes',
    'getLikesCount': 'data/likes?where=albumId%3D%22'
};

//Register User (POST): http://localhost:3030/users/register
export async function postRegister(email, password) {
    const data = await api.post(endpoints.registerURLpath, { email, password })
    sessionStorage.setItem('userData',JSON.stringify(data))
    return data
}

// Login User (POST): http://localhost:3030/users/login
export async function postLogin(email, password) {
    const data = await api.post(endpoints.loginURLpath, { email, password })
    sessionStorage.setItem('userData', JSON.stringify(data))
    return data
}

// Logout User (GET): http://localhost:3030/users/logout
export async function logout() {
    const data = await api.get(endpoints.logoutURLpath)
    sessionStorage.clear();
    return data
}

// All Albums (GET): http://localhost:3030/data//albums?sortBy=_createdOn%20desc
export async function getAllAlbums() {
    const data = await api.get(endpoints.getAllAlbums)
    return data;
}
// Create Album (POST): http://localhost:3030/data/albums
export async function postAddAlbum(body) {
    const data = await api.post(endpoints.addAlbum, body)
    return data
}

// Album Details (GET): http://localhost:3030/data/albums/:id
export async function getDetails(id) {
    const data = await api.get(endpoints.detailsPath + id)

    return data;
}

// Update Album (PUT): http://localhost:3030/data/albums/:id
export async function putDetails(id, body) {
    const data = await api.put(endpoints.detailsPath + id, body)
    return data;
}


// Delete Album (DELETE):  http://localhost:3030/data/albums/:id
export async function delAlbum(id) {
    const data = await api.del(endpoints.detailsPath + id)

    return data;
}

// Send like (POST): http://localhost:3030/data/likes
export async function postLike(albumId){
    const data = await api.post(endpoints.sendLike, {albumId});
    return data;
}

//Get post likes (GET): http://localhost:3030/data/likes?where=albumId%3D%22{albumId}%22&distinct=_ownerId&count
export async function getLikesCount(albumId){
    const data = await api.get(endpoints.getLikesCount + albumId + '%22&distinct=_ownerId&count')
    return data;
}