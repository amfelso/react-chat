// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here. Other Firebase libraries
// are not available in the service worker.
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.8.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
  apiKey: 'AIzaSyBMeCI8q8oYIse-ocBC6j9Qf3nUokRzJQI',
  authDomain: 'chat-app-7c117.firebaseapp.com',
  projectId: 'chat-app-7c117',
  storageBucket: 'chat-app-7c117.appspot.com',
  messagingSenderId: '58323070593',
  appId: '1:58323070593:web:aa19cb636a52e3dee22780',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
firebase.messaging();
