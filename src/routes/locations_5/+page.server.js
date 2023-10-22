// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

// Load function
/** @type {import('./$types').PageServerLoad} */
export async function load( { fetch, params }) {
    // Query the locations table - see Supabase docs for examples: 
    // get locations data, any error, and http status


    const locations = await supabase
        .from('locations')
        .select('*');

    const categories = await supabase
        .from('location_category')
        .select('*');

    // return data
    if (locations && categories) {
        return {
            locations: locations.data,
            categories: categories.data
        }
    }

    // in case of error - return status code amd mesage
    return {
        error: 'error occured'
    };
}
