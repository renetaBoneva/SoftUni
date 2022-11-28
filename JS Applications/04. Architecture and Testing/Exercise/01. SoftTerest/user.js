import * as api from './api.js';

let endpoint = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout'
}

export async function onLogin(emai, password) {
    try {
        const user = await api.post(endpoint.login, { emai, passlord: password })

        sessionStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
        return error;
    }
}

export async function onRegister(emai, password) {
    try {
        const user = await api.post(endpoint.register, { emai, password })

        sessionStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
        return error;
    }
}

export async function onLogout() {
    try {
        await api.get(endpoint.logout)
        sessionStorage.removeItem('user')
    } catch (error) {
        return error;
    }
}