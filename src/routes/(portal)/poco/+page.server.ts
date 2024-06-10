import type { PageServerLoad } from './$types';

async function getArtesianWell() {
    let resul = await (await fetch('http://srv538573.hstgr.cloud:8888/api/timeseries/v0.1/smartcampusmaua/GetArtesianWell', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })).json();
    return resul;
}

export const load = (async () => {
    let artesianWell = await getArtesianWell()
    return {artesianWell};
}) satisfies PageServerLoad;