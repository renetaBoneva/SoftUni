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