import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/users';

export function authServiceFactory(token) {
    const requester = requestFactory(token);
    
    return {
        postLogin: (loginData) => {
            return requester.post(`${baseUrl}/login`, loginData)
        },
        postRegister: (registerData) => {
            return requester.post(`${baseUrl}/register`, registerData)
        }
    }
}