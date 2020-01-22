import React, { FC } from 'react';
import firebase from 'firebase';
import firebaseApp from '../../init-firebase';
import GoogleButton from 'react-google-button';

import './styles.scss';

const LoginPage: FC<{
  onLoggedIn: (user: firebase.User | null) => void
}> = ({ onLoggedIn }) => {
  const handleClick = () => {

    firebaseApp
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        const firebaseProvider = new firebase.auth.GoogleAuthProvider();

        firebaseApp.auth().signInWithPopup(firebaseProvider).then((result: firebase.auth.UserCredential) => {
          onLoggedIn(result.user);
        });
      }).catch((error) => {
        console.info(error);
      });
  }

  return (
    <div className="LoginPage">
      <h1 className="LoginPage__title">Kudos</h1>
      <GoogleButton onClick={handleClick} className="LoginPage__button" />
    </div>
  );
}

export default LoginPage;
