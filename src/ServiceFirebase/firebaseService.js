import firebase from 'firebase'

firebase.initializeApp  ({
    apiKey: "AIzaSyDb2cMnQ4P_pRTPweE8vZnGhp8LxHLYTRY",
    authDomain: "practicepushnotification-713d0.firebaseapp.com",
    projectId: "practicepushnotification-713d0",
    storageBucket: "practicepushnotification-713d0.appspot.com",
    messagingSenderId: "652076345433",
    appId: "1:652076345433:web:3dd11c25aa9acf51396948",
    measurementId: "G-ZMD3EK4E98"
  });
const messaging= firebase.messaging();

//here we are getting registration token,initially it will make network call once reterived then next time it will retrun from cache
export const PushNotification=() =>{
Notification.requestPermission().then((permission) =>{
    console.log(permission);
      if(permission === "granted"){
          messaging.getToken().then((currentToken) =>{
              if(currentToken){
                   console.log("Token" , currentToken)
         }else{
          console.log("No Registration token avalliable, Do Request to genetrate one");
      }
          })
      }
}).catch(function(err) {
    console.error("Getting error when requesting the permission " , err);
})
}
