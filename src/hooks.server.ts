import { adminAuthPortal, adminDBPortal } from '$lib/server/firebase-admin-portal';
import { type Handle, redirect } from '@sveltejs/kit';


async function getUserData(uid: string | null) {
  const ref = adminDBPortal.doc("users/" + uid);
  const data = (await ref.get()).data();
  if (data == undefined && uid != null) {
	adminDBPortal.collection("users").doc(uid).create({"darkMode":false, "userAdmin":false});
  }
  return data;
}


export const handle = (async ({ event, resolve }) => {
	const sessionCookie = event.cookies.get('__session');

	try {
		const decodedClaims = await adminAuthPortal.verifySessionCookie(sessionCookie!);
		let userData = await getUserData(decodedClaims.uid);
		event.locals.userID = decodedClaims.uid;
		event.locals.displayName = decodedClaims['name'];
		event.locals.darkModeState = userData ? userData["darkMode"] : false;
		event.locals.userAdmin = userData ? userData["userAdmin"] : false;
	} catch (e) {
		event.locals.userID = null;
		event.locals.displayName = null;
		event.locals.darkModeState = false;
		event.locals.userAdmin = false;
	}

	if (event.locals.userID) {
		if (event.url.pathname.endsWith("/")){			
			throw redirect(303, '/reservatorios');
		}
		if ((!event.locals.userAdmin) && event.url.pathname.startsWith('/configuracoes')) {
			throw redirect(303, '/reservatorios');
		}
	}
	if (!event.locals.userID) {
		if (!event.url.pathname.endsWith("/") && !event.url.pathname.startsWith("/api/login")){
			throw redirect(303, '/');
		}
	}

	return resolve(event);
}) satisfies Handle;
