import React, { useState, createContext, useEffect } from 'react';
import firebaseApp from 'init-firebase';

import LoginPage from './pages/login';
import HomePage from './pages/home';

import './App.scss';
import './base.scss';

export const AuthContext = createContext(undefined);

const App = () => {
  const [ user, setUser ] = useState();

  const handleLogin = (user: firebase.User | null) => {
    setUser(user);
  };

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      setUser(user);
    });
  });

  return (
    <div className="App">
      <AuthContext.Provider value={user}>
        { !!user ? <HomePage /> : <LoginPage onLoggedIn={handleLogin} /> }
      </AuthContext.Provider>
    </div>
  );
}

export default App;
