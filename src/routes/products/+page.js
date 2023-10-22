
/** @type {import('./$types').PageLoad} */
export async function load( { fetch, params }) {

    // URL for the dummyjson products API
    const products_URL = 'https://dummyjson.com/products';

    // Call fetch
    const response = await fetch(products_URL);

    // if resonse code 200 (ok)
    if (response.ok) {

        // get json from resonse
        const json = await response.json();

        // return the products array
        return {
                products: json.products
            }
        }

    // an error occured - return status code amd mesage
    return {
        status: response.status,
        error: new Error(`Could not load data`)
    };
}


