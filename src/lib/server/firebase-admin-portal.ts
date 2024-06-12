import pkg from 'firebase-admin';
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

const appPortal = pkg.initializeApp({
    credential: pkg.credential.cert({
        projectId: import.meta.env.VITE_ADMIN_PORTAL_PROJECTID,
        clientEmail: import.meta.env.VITE_ADMIN_PORTAL_CLIENTEMAIL,
        privateKey: import.meta.env.VITE_ADMIN_PORTAL_PRIVATEKEY,
    }),
}, 'Portal-Admin');

export const adminDBPortal = getFirestore(appPortal);
export const adminAuthPortal = getAuth(appPortal);