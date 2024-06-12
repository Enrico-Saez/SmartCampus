import { adminDBPortal } from '$lib/server/firebase-admin-portal';
import type { PageServerLoad } from './$types';

async function getConfigData() {
	const [refTelegram, refAlerts] = await Promise.all([
		adminDBPortal.collection('config').doc('telegram').get(),
		adminDBPortal.collection('config').doc('alerts').get()
	]);

	return {refTelegram, refAlerts}
}

export const load: PageServerLoad = async () => {
	const resul = await getConfigData()
	const telegramConfig = resul.refTelegram.data();
	const alertsConfig = resul.refAlerts.data();

	return { telegramConfig, alertsConfig };
};

export const actions = {
	updateTelegramChatID: async ({ request }) => {
		const formData = await request.formData();
		const chatID = String(formData.get('chatID'));

		await adminDBPortal.collection('config').doc('telegram').update({ chatID: chatID });

		return { success: true, message: 'ChatID alterado com sucesso.' };
	},
	updateTelegramMessage: async ({ request }) => {
		const formData = await request.formData();
		const message = String(formData.get('message'));

		await adminDBPortal.collection('config').doc('telegram').update({ message: message });

		return { success: true, message: 'Mensagem alterada com sucesso.' };
	},
	updateReservatoriesLimit3: async ({ request }) => {
		const formData = await request.formData();
		const limit = Number(formData.get('reservatories'));

		await adminDBPortal.collection('config').doc('alerts').update({ reservatories: limit });

		return { success: true, message: 'Limite 3 dos reservatórios alterado com sucesso.' };
	},
	updateWaterExitsLimit3: async ({ request }) => {
		const formData = await request.formData();
		const limit = Number(formData.get('water-exits'));

		await adminDBPortal.collection('config').doc('alerts').update({ water_exits: limit });

		return { success: true, message: 'Limite 3 das saídas de água alterado com sucesso.' };
	},
	updateWellLimit3: async ({ request }) => {
		const formData = await request.formData();
		const limit = Number(formData.get('well'));

		await adminDBPortal.collection('config').doc('alerts').update({ artesian_well: limit });

		return { success: true, message: 'Limite 3 da pressão do poço alterado com sucesso.' };
	}
};
