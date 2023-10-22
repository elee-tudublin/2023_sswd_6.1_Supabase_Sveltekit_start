import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	let name = '';
	let repeat = 1;
	// Check for params
	if (params.name && params.repeat) {
		name = params.name;
		// parse the string as an Int
		repeat = parseInt(params.repeat)
	}
	// Make sure repeat is really a number (or not Not_a_Number)
	if (!isNaN(repeat))
	{
		return{
			name: name,
			repeat: repeat
		}
	}
	throw error(404, 'Not found');
}