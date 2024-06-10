import { adminDBPortal } from '$lib/server/firebase-admin-portal';
import type { PageServerLoad } from './$types';

async function getWaterTankProperties() {
    const ref = adminDBPortal.collection('/reservatories');
    const data = (await ref.get()).docs.map(doc => doc.data());
    return data
}

async function getWaterTankDataDistance() {
    let resul = await fetch('http://srv538573.hstgr.cloud:8888/api/timeseries/v0.1/smartcampusmaua/GetWaterTankLevel', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return await resul.json();
}

async function getWaterTankInfo() {
    let waterTankDataDistance = await getWaterTankDataDistance();
    let waterTankProperties = await getWaterTankProperties();
    let combinedData: { [key: string]: { name: string; volume: number; height: number; data_distance: number; } } = {};
    waterTankDataDistance.forEach((item: { tags: { nodeName: string; }; fields: { data_distance: number; }; }) => {
        let nodeName = item.tags.nodeName;
        if (!combinedData[nodeName]) {
            combinedData[nodeName] = { name: nodeName };
        }
        combinedData[nodeName].data_distance = item.fields.data_distance;
    });
    waterTankProperties.forEach(item => {
        let nodeName = item.name;
        if (!combinedData[nodeName]) {
          combinedData[nodeName] = { name: nodeName };
        }
        combinedData[nodeName].volume = parseFloat(item.volume);
        combinedData[nodeName].height = parseFloat(item.height);
    });

    return combinedData;
}

export const load = (async () => {
    let waterTankInfo = await getWaterTankInfo()
    return {waterTankInfo}
}) satisfies PageServerLoad;

export const actions = {
    saveReservatoryData:async ({ request }) => {
        const formData = await request.formData();
        const name = formData.get("name");
        const height = formData.get("height");
        const volume = formData.get("volume");
        
        const ref = adminDBPortal.doc("reservatories/" + name);
        const data = (await ref.get()).data();
        if (data == undefined) {
          adminDBPortal.collection("reservatories").doc(name!.toString()).create({"name":name, "height":height, "volume":volume});
        } else {
            adminDBPortal.collection("reservatories").doc(name!.toString()).update({"name":name, "height":height, "volume":volume});
        }
    }
}
