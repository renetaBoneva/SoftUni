const baseURL = "http://localhost:3005/api/users";

export async function getAll() {
    const response = await fetch(baseURL);
    const result = await response.json();

    return result.users;
}

export async function getSelectedUser(userId) {
    const response = await fetch(baseURL + `/${userId}`);
    const result = await response.json();

    return result.user;
}

export async function createUser(userData) {
    const { country, city, street, streetNumber, ...data } = userData;
    data.address = { streetNumber, street, city, country };
    let result;

    const response = await fetch(baseURL, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
    }

    result = await response.json();

    return result.user;
}

export async function deleteUser(id) {
    let result;

    const response = await fetch(`${baseURL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
    }

    result = await response.json();

    return result.userId;
}

export async function editUser(userData, id) {
    const { country, city, street, streetNumber, ...data } = userData;
    data.address = { streetNumber, street, city, country };
    let result;

    const response = await fetch(baseURL + `/${id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`)
    }

    result = await response.json();

    return result.user;

}