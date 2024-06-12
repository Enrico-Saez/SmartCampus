import { adminDBPortal } from '$lib/server/firebase-admin-portal';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, locals }) => {
	console.log(locals.userID);
	const { darkModeSet } = await request.json();

	const ref = adminDBPortal.doc('users/' + locals.userID);
	try {
		ref.update({ darkMode: darkModeSet });
		return json({ result: 'success' });
	} catch {
		return json({ result: 'error' });
	}
};
