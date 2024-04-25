import { OAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { PUBLIC_AZURE_TENANT, PUBLIC_AZURE_APPID } from '$env/static/public'
import { auth } from "./firebase-portal";
import { goto } from "$app/navigation";

export const authHandlers = {
    loginWithMicrosoft: async (setLoading: (value: boolean) => void) => {
          setLoading(true);
            const provider = new OAuthProvider('microsoft.com');
            provider.setCustomParameters({
              tenant: PUBLIC_AZURE_TENANT
            });
            
            await signInWithPopup(auth, provider).then((credential) => {
              console.log("Logged In", credential);
              const idToken = credential.user.getIdToken()
              fetch("api/login", {  
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                  // 'CSRF-Token': csrfToken  // HANDLED by sveltekit automatically
                },
                body: JSON.stringify({ idToken }),
              });
              goto("/reservatorios")
            })
            .catch((error) => {
              console.log("Caught error Popup closed: " + error);
              setLoading(false);
            });;
      },
    
    logOutWithMicrosoft: async () => {
        await signOut(auth);
        await fetch("/api/login", { method: "DELETE" });
        window.location.href = "https://login.microsoftonline.com/" + PUBLIC_AZURE_TENANT + "/oauth2/v2.0/logout?" + PUBLIC_AZURE_APPID + "&post_logout_redirect_uri=http%3A%2F%2Flocalhost%3A5173";
    }
}