import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {

	let name = '';
	let repeat = 1;

	if (params.name) {
		return {
			name: params.name
		};
	}
	throw error(404, 'Not found');
}