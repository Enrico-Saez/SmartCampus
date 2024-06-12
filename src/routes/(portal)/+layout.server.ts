import type { LayoutServerLoad } from './$types';

export const load = (async ({ locals }) => {
	const displayName = locals.displayName;
	const userAdmin = locals.userAdmin;
	const darkModeState = locals.darkModeState;
	const userID = locals.userID;
	return { displayName, userAdmin, darkModeState, userID };
}) satisfies LayoutServerLoad;
