import React, { useState } from 'react';

import LoginPage from './pages/login';
import HomePage from './pages/home';

import './App.scss';

const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);

  const handleLogin = () => {
    console.info('login');

    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      { isLoggedIn ? <HomePage /> : <LoginPage onLoggedIn={handleLogin} /> }
    </div>
  );
}

export default App;
