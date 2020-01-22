import React, { FC } from 'react';
import User from 'models/user';
import { withUser } from 'auth/user';

const HomePage: FC<{ user: User }> = ({ user }) => {
  return (
    <div className="HomePage">
      {JSON.stringify(user)}
    </div>
  );
}

export default withUser(HomePage);
