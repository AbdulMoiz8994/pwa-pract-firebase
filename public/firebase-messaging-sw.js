// give the service worker access to firebase messaging  below scripts
 importScripts('https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.2/firebase-messaging.js');

//  For Firebase JS SDK v7.20.0 and later, measurementId is optional
// This is configuration which we copy from our project's seting 
const firebaseConfig = {
    apiKey: "AIzaSyDju_pntZbVAuzRjVp7n0SQ-5_1r4Cihoc",
    authDomain: "notificationapp-44436.firebaseapp.com",
    projectId: "notificationapp-44436",
    storageBucket: "notificationapp-44436.appspot.com",
    messagingSenderId: "461558480740",
    appId: "1:461558480740:web:2d64dc668962ad1c780471",
    measurementId: "G-RD55XST8YV"
};

// we can make whole above object iwith below like  that firebase.initializeApp({api: "", ... }) for clean code we do this
firebase.initializeApp(firebaseConfig)

// we  should make firebase function to retrive an instance of firebase msg
firebase.messaging()