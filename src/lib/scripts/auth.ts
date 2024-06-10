import { OAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { PUBLIC_AZURE_TENANT, PUBLIC_AZURE_APPID } from '$env/static/public';
import { auth } from './firebase-portal';
import { goto } from '$app/navigation';

export const authHandlers = {
	loginWithMicrosoft: async (setLoading: (value: boolean) => void) => {
		try {
			const provider = new OAuthProvider('microsoft.com');
			provider.setCustomParameters({
				tenant: PUBLIC_AZURE_TENANT
			});

			const credential = await signInWithPopup(auth, provider);

			setLoading(true);

			const idToken = await credential.user.getIdToken();

			var loginStatus = await (await fetch('api/login', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
					// 'CSRF-Token': csrfToken  // HANDLED by sveltekit automatically
				},
				body: JSON.stringify({ idToken })
			})).json();
			if (loginStatus["result"] == 'signedIn') {
				await goto('/reservatorios');
			}
		} catch (error) {
			// Lidar com o erro aqui, se necessário
			console.error('Erro durante o processo de login:', error);
		} finally {
			setLoading(false); // Garante que loading seja definido como false, independentemente de sucesso ou falha
		}
	},

	logOutWithMicrosoft: async () => {
		await signOut(auth);
		await fetch('/api/login', { method: 'DELETE' });
		window.location.href =
			'https://login.microsoftonline.com/' +
			PUBLIC_AZURE_TENANT +
			'/oauth2/v2.0/logout?' +
			PUBLIC_AZURE_APPID +
			'&post_logout_redirect_uri=http%3A%2F%2Flocalhost%3A5173';
	}
};
