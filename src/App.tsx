import React from 'react';
import firebase from 'firebase';
import firebaseApp from './init-firebase';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebaseApp.auth().signInWithPopup(provider).then(function(result) {
      console.info(result);
    }).catch(function(error) {
      console.info(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
