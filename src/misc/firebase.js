import firebase from 'firebase/app';
import { Notification as Toast } from 'rsuite';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/messaging';
import 'firebase/functions';
import { isLocalHost } from './helpers';

const firebaseConfig = {
  apiKey: "AIzaSyBMeCI8q8oYIse-ocBC6j9Qf3nUokRzJQI",
  authDomain: "chat-app-7c117.firebaseapp.com",
  databaseURL: "https://chat-app-7c117-default-rtdb.firebaseio.com",
  projectId: "chat-app-7c117",
  storageBucket: "chat-app-7c117.appspot.com",
  messagingSenderId: "58323070593",
  appId: "1:58323070593:web:aa19cb636a52e3dee22780"
};

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
