import React, { FC } from 'react';
import firebase from 'firebase';
import firebaseApp from '../init-firebase';
import GoogleButton from 'react-google-button';

interface LoginPageProps {
  onLoggedIn: () => void
}

const LoginPage: FC<LoginPageProps> = ({ onLoggedIn }) => {
  const handleClick = () => {
    const firebaseProvider = new firebase.auth.GoogleAuthProvider();

    firebaseApp.auth().signInWithPopup(firebaseProvider).then((result) => {
      console.info(result);
      onLoggedIn();
    }).catch(function(error) {
      console.info(error);
    });
  }

  return (
    <div className="LoginPage">
      <GoogleButton onClick={handleClick} className="LoginPage__button" />
    </div>
  );
}

export default LoginPage;
