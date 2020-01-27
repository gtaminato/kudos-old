import React, { useState, createContext } from 'react';

import LoginPage from './pages/login';
import HomePage from './pages/home';
import CompanyPage from './pages/company';

import User from 'models/user';

import './App.scss';
import './base.scss';

export const AuthContext = createContext(undefined);

const App = () => {
  const [ user, setUser ] = useState();

  const handleLogin = (user: User) => {
    setUser(user);
  };

  return (
    <div className="App">
      <AuthContext.Provider value={user}>
        { !!user ? <HomePage /> : <LoginPage onLoggedIn={handleLogin} /> }
        { user && <CompanyPage user={user} /> }
      </AuthContext.Provider>
    </div>
  );
}

export default App;
