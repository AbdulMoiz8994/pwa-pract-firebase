// we install firebase module for for duplication we can not import from public folder because of standered
import firebase from 'firebase';


const firebaseConfig = {
    apiKey: "AIzaSyDju_pntZbVAuzRjVp7n0SQ-5_1r4Cihoc",
    authDomain: "notificationapp-44436.firebaseapp.com",
    projectId: "notificationapp-44436",
    storageBucket: "notificationapp-44436.appspot.com",
    messagingSenderId: "461558480740",
    appId: "1:461558480740:web:2d64dc668962ad1c780471",
    measurementId: "G-RD55XST8YV"
  };
 firebase.initializeApp(firebaseConfig); 
 const messaging= firebase.messaging()


export const InitialNotifications=() =>{
    Notification.requestPermission().then((permission) => {
        console.log(permission);
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("Token ", currentToken);
                } else {
                  console.log('No registration token available. Request permission to generate one.');
                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err)
              });
                 
        }
    })
}