import { adminAuthPortal } from '$lib/server/firebase-admin-portal';
import { type Handle, redirect } from '@sveltejs/kit';

/*
async function getUserData(uid: string | null) {
  const ref = adminDBPortal.doc("users/" + uid)
  return (await ref.get()).data();
}
*/

export const handle = (async ({ event, resolve }) => {
	const sessionCookie = event.cookies.get('__session');

	try {
		const decodedClaims = await adminAuthPortal.verifySessionCookie(sessionCookie!);
		//let userData = await getUserData(decodedClaims.uid);
		event.locals.userID = decodedClaims.uid;
		event.locals.displayName = decodedClaims['name'];
		//event.locals.darkModeState = userData ? userData["darkMode"] : false;
	} catch (e) {
		event.locals.userID = null;
		event.locals.displayName = null;
	}

	if (
		event.url.pathname.startsWith('/lampadas') ||
		event.url.pathname.startsWith('/poco') ||
		event.url.pathname.startsWith('/reservatorios') ||
		event.url.pathname.startsWith('/saidas-de-agua')
	) {
		if (!event.locals.userID) {
			throw redirect(303, '/');
		}
	} else if (event.url.pathname.endsWith('/')) {
		if (event.locals.userID) {
			throw redirect(303, '/reservatorios');
		}
	}

	return resolve(event);
}) satisfies Handle;
