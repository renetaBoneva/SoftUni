import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/games';

export async function getAll() {
    const result = await request.get(baseUrl);
    const games = Array.from(Object.values(result));

    return games;
}

export async function getOne(gameId) {
    const result = await request.get(`${baseUrl}/${gameId}`);

    return result;
}

export async function getComment(gameId) {
    const result = await request.get(`${baseUrl}/${gameId}`);

    if (result.comments) {
        const commentsArr = Array.from(Object.values(result.comments));
        return commentsArr;

    }
    return [];
}

export async function postComment(gameId, data) {
    const result = await request.post(`${baseUrl}/${gameId}/comments`, data);
    return result;
}

export async function create(data) {
    const result = await request.post(baseUrl, data);

    return result;
}