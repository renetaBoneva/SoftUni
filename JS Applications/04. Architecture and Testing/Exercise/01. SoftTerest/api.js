//const { use } = require("chai");

let host = 'http://localhost:3030/'


async function requester(method, url, body) {

    let options = {
        method,
        headers: {}
    };

    if (body) {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(body);
    }

    let user = sessionStorage.getItem('user');
    if (user) {
        options.headers['X-Authorization'] = user.accessToken;
    }

    try {
        let response = await fetch(host + url, options)
        if (!response.ok) {
            if(response.status == 403){
                sessionStorage.removeItem('user')
            }
            let err = await response.json();
            throw new Error(err.message);
        }
        if (response.status != 204) {
            return await response.json();
        }
    } catch (error) {
        alert(error.message);
        throw error;
    }
}

let get = requester.bind(null, 'get')
let post = requester.bind(null, 'post')
let put = requester.bind(null, 'put')
let del = requester.bind(null, 'delete')

export {
    get,
    post, 
    put, 
    del
}