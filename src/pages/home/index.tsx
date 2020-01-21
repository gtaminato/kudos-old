import React, { FC } from 'react';
import User from 'models/user';
import { withUser } from 'auth/user';

interface HomePageProps { user: User }

const HomePage: FC<HomePageProps> = ({ user }) => {
  return (
    <div className="HomePage">
      {JSON.stringify(user)}
    </div>
  );
}

export default withUser(HomePage);
