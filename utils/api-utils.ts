// These utils are used by the backend only
import admin from 'firebase-admin';
import { Buffer } from 'buffer';
import { cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

export function getFirestoreDB() {
    if (admin.apps.length === 0) {
      const serviceAccount = JSON.parse(Buffer.from(process.env.FIRESTORE_KEY_BASE64 || '', 'base64').toString('utf-8'));
      admin.initializeApp({
        credential: cert(serviceAccount),
      });
    }

    return getFirestore()
}
