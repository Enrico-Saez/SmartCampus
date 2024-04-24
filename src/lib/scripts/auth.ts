import { OAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { auth } from "./firebase-portal";
import { goto } from "$app/navigation";

export const authHandlers = {
    loginWithMicrosoft: async () => {
        const provider = new OAuthProvider('microsoft.com');
        const credential = await signInWithPopup(auth, provider);
        
        const idToken = await credential.user.getIdToken()
    
        await fetch("api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // 'CSRF-Token': csrfToken  // HANDLED by sveltekit automatically
          },
          body: JSON.stringify({ idToken }),
        });
        goto('/reservatorios')
    },
    
    logOutWithMicrosoft: async () => {
        await signOut(auth);
        await fetch("/api/login", { method: "DELETE" });
    }
}