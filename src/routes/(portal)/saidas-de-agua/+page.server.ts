import type { PageServerLoad } from './$types';

async function getHydrometer() {
    let resul = await (await fetch('http://srv538573.hstgr.cloud:8888/api/timeseries/v0.1/smartcampusmaua/GetHydrometer', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })).json();
    return resul;
}

export const load = (async () => {
    let hydrometer = await getHydrometer()
    return {hydrometer};
}) satisfies PageServerLoad;