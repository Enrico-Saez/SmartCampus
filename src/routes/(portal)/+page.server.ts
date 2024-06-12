import { adminDBPortal } from '$lib/server/firebase-admin-portal';

export const actions = {
	toggleLightMode: async ({ request }) => {
		const formData = await request.formData();
		const userID = String(formData.get('userID'));
		await adminDBPortal.collection('users').doc(userID).update({ darkMode: false });
	},
	toggleDarkMode: async ({ request }) => {
		const formData = await request.formData();
		const userID = String(formData.get('userID'));
		await adminDBPortal.collection('users').doc('telegram').update({ darkMode: true });
	}
};
