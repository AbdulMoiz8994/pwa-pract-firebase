// give the service Worker acess to firebase cloud messaging from such scripts
importScripts('https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.2/firebase-messaging.js');

// This is bydefault firebase app we created ,This is firebase SDK
const firebaseConfig = {
    apiKey: "AIzaSyDb2cMnQ4P_pRTPweE8vZnGhp8LxHLYTRY",
    authDomain: "practicepushnotification-713d0.firebaseapp.com",
    projectId: "practicepushnotification-713d0",
    storageBucket: "practicepushnotification-713d0.appspot.com",
    messagingSenderId: "652076345433",
    appId: "1:652076345433:web:3dd11c25aa9acf51396948",
    measurementId: "G-ZMD3EK4E98"
  };

firebase.initializeApp(firebaseConfig)
firebase.messaging();
