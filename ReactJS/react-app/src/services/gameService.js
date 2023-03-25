import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export async function getAll(){
    const result = await request.get(baseUrl);
    const games = Array.from(Object.values(result));
    
    return games;
}

export async function create(data) {
    const result = await request.post(baseUrl, data);

    return result;
}