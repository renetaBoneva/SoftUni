import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export async function getAll(gameId) {
    const query = encodeURIComponent(`gameId="${gameId}"`);

    const result = await requestFactory().get(`${baseUrl}?where=${query}`);
    const comments = Object.values(result);

    return comments;
}

export async function create(gameId, comment) {
    const result = await requestFactory().post(baseUrl, { gameId, comment });

    return result;
}
