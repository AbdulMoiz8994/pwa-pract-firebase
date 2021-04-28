import React from 'react';
import './App.css';
import {PushNotification} from './ServiceFirebase/firebaseService'


function App() {
  return (
    <div className="App">
   <h1>Hello World</h1>
   <button onClick={PushNotification}>Configure Notification</button>
    </div>

  );
}

export default App;
