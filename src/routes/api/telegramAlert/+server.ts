import { adminDBPortal } from '$lib/server/firebase-admin-portal';
import type { RequestHandler } from './$types';
import { json } from '@sveltejs/kit';

async function getConfigData() {
	const [refTelegram, refAlerts] = await Promise.all([
		adminDBPortal.collection('config').doc('telegram').get(),
		adminDBPortal.collection('config').doc('alerts').get()
	]);
    const resulTelegram = refTelegram.data()
    const resulAlerts = refAlerts.data()

	return {resulTelegram, resulAlerts}
}

export const GET: RequestHandler = async () => {
    let response = await getConfigData();
    return json(response);
};