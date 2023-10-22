import { json } from '@sveltejs/kit';

// import the client instance (created earlier)
import {supabase} from "$lib/supabase.js";

// Get all locations
export async function GET({ request, cookies }) {

    // Query data
    const locations = await supabase
    .from('locations')
    .select('*');

    if (locations.error) {
        return json({
            status: locations.status,
            error: locations.error
        });
    }

    return json({
        data: locations.data,
        status: locations.status
    });
}

// Add a new location
export async function POST({ request, cookies }) {
    // Get data from request body
    let data = await request.json();

    // Insert data
    const loc = await supabase
    .from('locations')
    .insert([data])
    .select()


    return json({
        data: loc.data
    });
}