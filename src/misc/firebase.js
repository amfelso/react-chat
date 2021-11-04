import firebase from 'firebase/app';
import { Notification as Toast } from 'rsuite';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalHost } from './helpers';

const firebaseConfig = ${{ secrets.FIREBASE_CONFIG }};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const database = app.database();
export const storage = app.storage();
export const functions = app.functions('us-east1');

export const messaging = firebase.messaging.isSupported()
  ? app.messaging()
  : null;

if (messaging) {
  messaging.usePublicVapidKey(messagingKey);

  messaging.onMessage(({ notification }) => {
    const { title, body } = notification;
    Toast.info({ title, description: body, duration: 0 });
  });
}

if (isLocalHost) {
  functions.useFunctionsEmulator('http://localhost:5001');
}
