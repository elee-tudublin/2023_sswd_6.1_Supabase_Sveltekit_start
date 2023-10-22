
/** @type {import('./$types').PageLoad} */
export async function load( { fetch, params }) {

    // URL for the dummyjson users API
    const users_URL = 'https://dummyjson.com/users';

    // Call fetch
    const response = await fetch(users_URL);

    // if resonse code 200 (ok)
    if (response.ok) {

        // get json from resonse
        const json = await response.json();

        // return the users array
        return {
                users: json.users
            }
        }

    // an error occured - return status code amd mesage
    return {
        status: response.status,
        error: new Error(`Could not load data`)
    };
}


