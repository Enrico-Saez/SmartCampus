import { adminDBPortal } from '$lib/server/firebase-admin-portal';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async () => {
	const ref = await adminDBPortal.collection('config').doc('telegram').get();
	const telegramConfig = ref.data();

	return { telegramConfig };
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
	}
};
