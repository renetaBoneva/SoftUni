import * as api from "./api.js";

const endpoints = {
    'registerURLpath': "users/register",
    'loginURLpath': 'users/login',
    'logoutURLpath': 'users/logout',
    'createFurnitureURLpath': 'data/catalog',
    'getAllFurnitureURLpath': 'data/catalog',
    'detailsPath': 'data/catalog/',
    'myFurniturePath': 'data/catalog?where=_ownerId%3D%22'
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

// Create Furniture (POST): http://localhost:3030/data/catalog
export async function postCreateFurniture(body) {
    const data = await api.post(endpoints.createFurnitureURLpath, body)
    return data
}

// All Furniture (GET): http://localhost:3030/data/catalog
export async function getAllFurniture() {
    const data = await api.get(endpoints.getAllFurnitureURLpath)
    return data;
}

// Furniture Details (GET): http://localhost:3030/data/catalog/:id
export async function getDetails(id) {
    const data = await api.get(endpoints.detailsPath + id)

    return data;
}

// Update Furniture (PUT): http://localhost:3030/data/catalog/:id
export async function putDetails(id, body) {
    const data = await api.put(endpoints.detailsPath + id, body)
    return data;
}


// Delete Furniture (DELETE):  http://localhost:3030/data/catalog/:id
export async function delFurniture(id) {
    const data = await api.del(endpoints.detailsPath + id)

    return data;
}


// My Furniture (GET): http://localhost:3030/data/catalog?where=_ownerId%3D%22{userId}%22
export async function getMyFurniture(userId) {
    const data = await api.get(endpoints.myFurniturePath + `${userId}%22`)

    return data;
}