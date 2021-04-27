import React from 'react';
import './App.css';
import {InitialNotifications} from './Service/firebaseService'


function App() {
  return (
    <div className="App">
   <h1>Hello World</h1>
   <button onClick={InitialNotifications}>Configure Notification</button>
    </div>

  );
}

export default App;
