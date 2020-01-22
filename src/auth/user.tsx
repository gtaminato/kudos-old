import React, { useContext } from 'react';
import firebase from 'firebase';
import { AuthContext } from 'App';
import User from 'models/user';

export const withUser = (Component: any) => (props: any) => {
  const user: (firebase.User | undefined) = useContext(AuthContext);
  const parsedUser = new User(
    user!.providerId,
    user!.displayName,
    user!.email,
    user!.photoURL
  );

  return (
    <Component user={parsedUser} {...props} />
  );
}