import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/comments';

export async function getAll(gameId) {
    const searchQuery = encodeURIComponent(`gameId="${gameId}"`);
    const relationQuery = encodeURIComponent(`auth=_ownerId:users`);

    const result = await requestFactory().get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result);
    return comments;
}

export async function create(gameId, comment) {
    const result = await requestFactory().post(baseUrl, { gameId, comment });

    return result;
}
