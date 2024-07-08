import fetch from 'node-fetch';

const BASE_URL = 'https://petstore.swagger.io/v2';

/**
 * Creates a new user in the PetStore.
 * @param {string} username - The username of the new user.
 * @param {string} firstName - The first name of the new user.
 * @param {string} lastName - The last name of the new user.
 * @param {string} email - The email of the new user.
 * @param {string} password - The password of the new user.
 * @param {string} phone - The phone number of the new user.
 * @returns {Promise<Object>} - The response from the API.
 * @throws Will throw an error if the API request fails.
 */
export async function createUser(username, firstName, lastName, email, password, phone) {
    if (!username || !firstName || !lastName || !email || !password || !phone) {
        throw new Error('All user fields are required');
    }

    const url = `${BASE_URL}/user`;
    const userData = {
        id: 0,
        username: username,
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        phone: phone,
        userStatus: 0
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    });

    if (!response.ok) {
        throw new Error(`Failed to create user: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Retrieves user data from the PetStore.
 * @param {string} username - The username of the user to retrieve.
 * @returns {Promise<Object>} - The user data from the API.
 * @throws Will throw an error if the API request fails.
 */
export async function getUser(username) {
    if (!username) {
        throw new Error('Username is required');
    }

    const url = `${BASE_URL}/user/${username}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to retrieve user: ${response.statusText}`);
    }

    return response.json();
}

/**
 * Retrieves pets by status from the PetStore.
 * @param {string} status - The status of the pets to retrieve.
 * @returns {Promise<Array>} - The list of pets with the given status.
 * @throws Will throw an error if the API request fails.
 */
export async function getPetsByStatus(status) {
    if (!status) {
        throw new Error('Status is required');
    }

    const url = `${BASE_URL}/pet/findByStatus?status=${status}`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`Failed to retrieve pets: ${response.statusText}`);
    }

    return response.json();
}
