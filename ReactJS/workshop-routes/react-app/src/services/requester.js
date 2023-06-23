export async function requester(method, token, url, data) {
    let options = {};

    if (method !== "GET") {
        options.method = method;
        if (data) {
            options.headers = {
                'Content-Type': "application/json"
            };
            options.body = JSON.stringify(data);
        }
    }

    if (token) {
        options.headers = {
            ...options.headers,
            "X-Authorization": token
        }
    }

    const res = await fetch(url, options);

    if (res.status === 204) {
        return {};
    }

    const result = await res.json();
    if (!res.ok) {
        throw result;
    }
    return result;
}


export function requestFactory(token) {

    if(!token) {
        const serializedAuth = localStorage.getItem('auth');

        if(serializedAuth){
            const auth = JSON.parse(serializedAuth);
            token = auth.accessToken;
        }
    }

    return {
        get: requester.bind(null, "GET", token),
        post: requester.bind(null, "POST", token),
        put: requester.bind(null, "PUT", token),
        delete: requester.bind(null, "DELETE", token)
    }
}