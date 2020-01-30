import React, { useState, createContext, useEffect } from 'react';
import firebaseApp from 'init-firebase';
import { ClipLoader } from "react-spinners";

import LoginPage from './pages/login';
import HomePage from './pages/home';

import './App.scss';
import './base.scss';

export const AuthContext = createContext(undefined);

const App = () => {
  const [ user, setUser ] = useState();
  const [ isLoading = true, setLoading ] = useState();

  const handleLogin = (user: firebase.User | null) => {
    setUser(user);
  };

  useEffect(() => {
    firebaseApp.auth().onAuthStateChanged(user => {
      setUser(user);
      setLoading(false);
    });
  });

  return (
    <div className="App">
      <AuthContext.Provider value={user}>
        { isLoading
          ? <div className="App__loader"><ClipLoader color={"#3E3E3E"} /></div>
          : (!!user ? <HomePage /> : <LoginPage onLoggedIn={handleLogin} />) }
      </AuthContext.Provider>
    </div>
  );
}

export default App;
