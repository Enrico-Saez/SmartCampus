import type { LayoutServerLoad } from './$types';

export const load = (async ({locals}) => {
    const displayName = locals.displayName;
    return {displayName};
}) satisfies LayoutServerLoad;