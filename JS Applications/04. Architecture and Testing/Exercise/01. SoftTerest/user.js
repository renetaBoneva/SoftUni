import * as api from './api.js';

let endpoint = {
    'login': 'users/login',
    'register': 'users/register',
    'logout': 'users/logout'
}

export async function onLogin(email, password) {
    try {
        const user = await api.post(endpoint.login, { email, password })

        localStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
        return error;
    }
}

export async function onRegister(email, password) {
    try {
        const user = await api.post(endpoint.register, { email, password })

        localStorage.setItem('user', JSON.stringify(user))
    } catch (error) {
        return error;
    }
}

export async function onLogout() {
    try {
        await api.del(endpoint.logout)
        localStorage.removeItem('user')
    } catch (error) {
        return error;
    }
}
