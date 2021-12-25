import './App.css';
import React, { useState } from 'react';
import Test from './components/Test/Test';
import Login from './components/Login/Login';
import Header from './components/UI/Header';


function App() {

  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [timeOver, setTimeOver] = useState(false);

  const startTestHandler = (username) => {
    setisLoggedIn(true);
    setUsername(username);
  }

  const logoutHandler=()=>{
    window.location.reload();
    setisLoggedIn(false);
    setTimeOver(false);
  }
  const timeOverHandler=()=>{
    setTimeOver(true);
  }
  return (
    <React.Fragment>
      {isLoggedIn && <React.Fragment>
        <Header username={username} onTimeOver={timeOverHandler} timeOver={timeOver} />
        <Test onTimeOver={timeOverHandler} isLoggedIn={isLoggedIn} onLogout={logoutHandler} timeOver={timeOver}  />
      </React.Fragment>}
      {!isLoggedIn && <Login onStart={startTestHandler} />}
    </React.Fragment>
  )
}
export default App;




