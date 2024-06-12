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

async function getHydrometerDataCounter() {
    let resul = await fetch('http://srv538573.hstgr.cloud:8888/api/timeseries/v0.1/smartcampusmaua/GetHydrometer', {
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
    let waterTankAccumulatedLiters = await getHydrometerDataCounter();
    
    let combinedData: { [key: string]: { name: string; volume: number; height: number; data_distance: number; data_counter: number; error: number; } } = {};

    if (Object.keys(waterTankDataDistance).length == 0 || Object.keys(waterTankProperties).length == 0 || Object.keys(waterTankAccumulatedLiters).length == 0) {
        return combinedData;
    }
    
    waterTankDataDistance.forEach((item: { tags: { nodeName: string;  }; fields: { data_distance: number; }; }) => {
        let nodeName = item.tags.nodeName;
        let data_distance = item.fields.data_distance
        if (!data_distance) {
            combinedData[nodeName] = { name: nodeName, volume: 0, height: 0, data_distance: 0, data_counter: 0, error:1};
        } else {
            combinedData[nodeName] = { name: nodeName, volume: 0, height: 0, data_distance: data_distance, data_counter: 0, error:0};
        }
              
    });

    waterTankAccumulatedLiters.forEach((item: { tags: { nodeName: string; }; fields: { data_counter: number; }; }) => {
        let nodeName = "WaterTankLavel_" + item.tags.nodeName.substring(item.tags.nodeName.length - 1);
        let data_counter = item.fields.data_counter;
        if (!data_counter) {
            combinedData[nodeName].data_counter = 0;
            combinedData[nodeName].error = 2; 
        } else {
            combinedData[nodeName].data_counter = data_counter; 
        }       
    });

    waterTankProperties.forEach(item => {
        let nodeName = item.name;
        let volume = item.volume;
        let height = item.height;

        if (!volume) {
            combinedData[nodeName].volume = 0;
            combinedData[nodeName].error = 3; 
        } else {
            combinedData[nodeName].volume = volume;
        }
        if (!height) {
            combinedData[nodeName].height = 0;
            combinedData[nodeName].error = 4; 
        } else {
            combinedData[nodeName].height = height;
        }
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
        return {success: true}
    }
}
