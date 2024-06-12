import type { RequestHandler } from './$types';
import { adminDBPortal } from '$lib/server/firebase-admin-portal';
import { json } from '@sveltejs/kit';

export const POST: RequestHandler = async ({ request, locals }) => {
	const { darkModeState } = await request.json();

	const ref = adminDBPortal.doc('users/' + locals.userID);
	try {
		ref.update({ darkMode: darkModeState });
		return json({ result: 'success' });
	} catch {
		return json({ result: 'error' });
	}
};