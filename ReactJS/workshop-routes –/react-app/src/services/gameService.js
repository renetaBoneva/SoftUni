
import { requestFactory } from "./requester";

const baseUrl = 'http://localhost:3030/data/games';


export function gameServiceFactory(token) {
    const request = requestFactory(token);

    async function getAll() {
        const result = await request.get(baseUrl);
        const games = Array.from(Object.values(result));

        return games;
    }

    async function getOne(gameId) {
        const result = await request.get(`${baseUrl}/${gameId}`);

        return result;
    }

    async function getComment(gameId) {
        const result = await request.get(`${baseUrl}/${gameId}`);

        if (result.comments) {
            const commentsArr = Array.from(Object.values(result.comments));
            return commentsArr;

        }
        return [];
    }

    async function postComment(gameId, data) {
        const result = await request.post(`${baseUrl}/${gameId}/comments`, data);
        return result;
    }

    async function create(data) {
        const result = await request.post(baseUrl, data);

        return result;
    }

    function del(id) {
        return request.delete(`${baseUrl}/${id}`);
    }
    
    return {
        getAll,
        getOne,
        getComment,
        postComment,
        create,
        delete: del
    }
}