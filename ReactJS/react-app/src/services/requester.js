export async function requester(method, url, data) {
    let options = {};

    if( method !== "GET"){
        options.method = method;
        if(data) {
            options.headers = {
                'Content-Type': "application/json"
            };
            options.body = JSON.stringify(data);
        }
    }
    
    let res = await fetch(url, options);

    if(res.status === 204){
        return {};
    }

    const result = await res.json();
    if(!res.ok) {
        throw result;
    }
    return result;
}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const del = requester.bind(null, "DELETE");
export const put = requester.bind(null, "PUT");