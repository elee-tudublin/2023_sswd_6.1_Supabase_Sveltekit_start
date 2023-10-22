
/** @type {import('./$types').PageServerLoad} */
export async function load( { fetch, params }) {

    // URL NASA APOD
    const nasa_URL = `${import.meta.env.VITE_NASA_APOD_URL}${import.meta.env.VITE_NASA_API_KEY}`;

    // Call fetch
    const response = await fetch(nasa_URL);

    // if resonse code 200 (ok)
    if (response.ok) {

        // get json from resonse
        const json = await response.json();

        // return the products array
        return {
                apod: json
            }
        }

    // an error occured - return status code amd mesage
    return {
        status: response.status,
        error: new Error(`Could not load data`)
    };
}


