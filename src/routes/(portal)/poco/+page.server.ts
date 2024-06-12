import type { PageServerLoad } from './$types';

async function getArtesianWellDataDistance() {
	let resul = await fetch(
		'http://srv538573.hstgr.cloud:8888/api/timeseries/v0.1/smartcampusmaua/GetArtesianWell',
		{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json'
			}
		}
	);
	return await resul.json();
}

async function getArtesianWellInfo() {
	let ArtesianWellDataDistance = await getArtesianWellDataDistance();

	let combinedData: {
		[key: string]: {
			name: string;
			data_pressure_0: number;
			data_pressure_1: number;
			error: number;
		};
	} = {};

	if (Object.keys(ArtesianWellDataDistance).length == 0) {
		return combinedData;
	}

	ArtesianWellDataDistance.forEach(
		(item: { tags: { nodeName: any }; fields: { data_pressure_0: any; data_pressure_1: any } }) => {
			let nodeName = item.tags.nodeName;
			let data_pressure_0 = item.fields.data_pressure_0;
			let data_pressure_1 = item.fields.data_pressure_1;
			if (!data_pressure_0 && !data_pressure_1) {
				combinedData[nodeName] = {
					name: nodeName,
					data_pressure_0: 0,
					data_pressure_1: 0,
					error: 1
				};
			} else {
				combinedData[nodeName] = { name: nodeName, data_pressure_0, data_pressure_1, error: 0 };
			}
		}
	);

	return combinedData;
}

export const load: PageServerLoad = async () => {
	let ArtesianWellInfo = await getArtesianWellInfo();
	return { ArtesianWellInfo };
};
