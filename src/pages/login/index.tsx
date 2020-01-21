import React, { FC } from 'react';
import firebase from 'firebase';
import firebaseApp from '../../init-firebase';
import GoogleButton from 'react-google-button';

import User from 'models/user';

import './styles.scss';

interface LoginPageProps {
  onLoggedIn: (user: User) => void
}

const LoginPage: FC<LoginPageProps> = ({ onLoggedIn }) => {
  const handleClick = () => {
    const firebaseProvider = new firebase.auth.GoogleAuthProvider();

    firebaseApp.auth().signInWithPopup(firebaseProvider).then((result: any) => {
      const newUser = new User(
        result.additionalUserInfo?.profile?.id,
        result.additionalUserInfo?.profile?.given_name,
        result.additionalUserInfo?.profile?.name,
        result.additionalUserInfo?.profile?.email,
        result.additionalUserInfo?.profile?.picture,
        result.credential?.idToken,
        result.credential?.accessToken
      );
      onLoggedIn(newUser);
    }).catch(function(error) {
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
