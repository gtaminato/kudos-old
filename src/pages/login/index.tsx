import React, { FC } from 'react';
import firebase from 'firebase';
import firebaseApp, { db } from '../../init-firebase';
import GoogleButton from 'react-google-button';

import './styles.scss';

const LoginPage: FC<{
  onLoggedIn: (user: firebase.User | null) => void
}> = ({ onLoggedIn }) => {
  const getTeams = (userId: string | undefined) => {
    if (!userId) return [];

    const teams = db.collection('teams').where('members', 'array-contains', userId)
      .get()
      .then((response) => {
        console.info('response', response);
      })
      .catch((error) => {
        console.info('error', error);
      });

    console.info('teams', teams);

    return teams;
  };

  const handleClick = () => {

    firebaseApp
      .auth()
      .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      .then(() => {
        const firebaseProvider = new firebase.auth.GoogleAuthProvider();

        firebaseApp.auth().signInWithPopup(firebaseProvider).then(async (result: firebase.auth.UserCredential) => {
          const user = result.user;

          const teams = await getTeams(user?.uid);
          onLoggedIn(user);
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
