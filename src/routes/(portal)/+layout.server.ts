import type { LayoutServerLoad } from './$types';

export const load = (async ({locals}) => {
    const displayName = locals.displayName;
    const userAdmin = locals.userAdmin;
    const darkModeState = locals.darkModeState;
    return {displayName, userAdmin, darkModeState};
}) satisfies LayoutServerLoad;