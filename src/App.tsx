import React from 'react';

import LoginPage from './pages/login';
import HomePage from './pages/home';

import './App.scss';

class App extends React.Component {
  state = {
    isLoggedIn: false
  };

  handleLogin = () => {
    console.info('login');

    this.setState({
      isLoggedIn: true
    });
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div className="App">
        { isLoggedIn ? <HomePage /> : <LoginPage onLoggedIn={this.handleLogin} /> }
      </div>
    );
  }
}

export default App;
