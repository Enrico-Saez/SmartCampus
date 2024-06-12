import { adminDBPortal } from "./firebase-admin-portal";

async function sendTelegramMessage(chatID: String, message: String) {
	const url = `https://api.telegram.org/bot${import.meta.env.VITE_TELEGRAM_BOT_TOKEN}/sendMessage`;
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