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
    try {
        const result = await res.json();
        return result;
    } catch(e){
        return {};
    }
}

export const get = requester.bind(null, "GET");
export const post = requester.bind(null, "POST");
export const del = requester.bind(null, "DELETE");
export const put = requester.bind(null, "PUT");