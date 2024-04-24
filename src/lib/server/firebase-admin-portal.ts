import pkg from 'firebase-admin';
import { ADMIN_PORTAL_PROJECTID, ADMIN_PORTAL_CLIENTEMAIL, ADMIN_PORTAL_PRIVATEKEY } from '$env/static/private'
import { getFirestore } from 'firebase-admin/firestore';
import { getAuth } from 'firebase-admin/auth';

const appPortal = pkg.initializeApp({
    credential: pkg.credential.cert({
        projectId: ADMIN_PORTAL_PROJECTID,
        clientEmail: ADMIN_PORTAL_CLIENTEMAIL,
        privateKey: ADMIN_PORTAL_PRIVATEKEY,
    }),
}, 'Portal-Admin');

export const adminDBPortal = getFirestore(appPortal);
export const adminAuthPortal = getAuth(appPortal);