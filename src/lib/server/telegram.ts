import { adminDBPortal } from "./firebase-admin-portal";

async function sendTelegramMessage(chatID: String, message: String) {
	const url = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`;
	console.log(url)
	const response = await fetch(url, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			chat_id: chatID,
			text: message
		})
	});	
	if (!response.ok) {
		throw new Error(`HTTP error! status: ${response.status}`);
	} 
}

async function getConfigData() {
	const [refTelegram, refAlerts] = await Promise.all([
		adminDBPortal.collection('config').doc('telegram').get(),
		adminDBPortal.collection('config').doc('alerts').get()
	]);
	const resulTelegram = refTelegram.data()
	const resulAlerts = refAlerts.data()

	return {resulTelegram, resulAlerts}
}

export async function startProcess() {
	const data = await getConfigData();
	const resulTelegram = data.resulTelegram
	const resulAlerts = data.resulAlerts
	sendTelegramMessage(resulTelegram!["chatID"], resulTelegram!["message"], )


}