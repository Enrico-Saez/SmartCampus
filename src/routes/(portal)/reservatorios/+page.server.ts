import type { PageServerLoad } from './$types';

async function getWaterTankLevel() {
    let resul = await (await fetch('http://srv538573.hstgr.cloud:8888/api/timeseries/v0.1/smartcampusmaua/GetWaterTankLevel', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })).json();
    return resul;
}

export const load = (async () => {
    let waterTankLevel = await getWaterTankLevel()
    return {waterTankLevel};
}) satisfies PageServerLoad;