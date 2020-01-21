import React, { useContext } from 'react';
import { AuthContext } from 'App';
import User from 'models/user';

export const withUser = (Component: any) => (props: any) => {
  const user: (User | undefined) = useContext(AuthContext);

  return (
    <Component user={user} {...props} />
  );
}