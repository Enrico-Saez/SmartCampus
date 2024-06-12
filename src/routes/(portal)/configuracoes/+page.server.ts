import { adminDBPortal } from '$lib/server/firebase-admin-portal';

export const actions = {
	updateTelegramChatID: async ({ request }) => {
		const formData = await request.formData();
		const chatID = String(formData.get('chatID'));
		await adminDBPortal.collection('config').doc('telegram').update({ chatID: chatID });
		return { success: true };
	},
	updateTelegramMessage: async ({ request }) => {
		const formData = await request.formData();
		const message = String(formData.get('message'));
		await adminDBPortal.collection('config').doc('telegram').update({ message: message });
		return { success: true };
	}
};
