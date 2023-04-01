import * as requester  from "./requester";

const baseUrl = 'http://localhost:3030/users';

export function postLogin(loginData) {
    return requester.post(`${baseUrl}/login`, loginData)
}

export function postRegister(registerData) {
    return requester.post(`${baseUrl}/register`, registerData)
}