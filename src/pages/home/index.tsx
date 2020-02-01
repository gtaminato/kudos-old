import React, { FC } from 'react';
import { Layout, Button } from 'antd';
import { db } from '../../init-firebase';

import User from 'models/user';
import { withUser } from 'auth/user';

import SideMenu from 'components/side-menu';
import Copyright from 'components/copyright';

import './styles.scss';
import Header from 'components/header';

const HomePage: FC<{
  user: User,
  onLogout: () => void
}> = ({
  user,
  onLogout
}) => {
  const { Header: HeaderLayout, Footer, Sider, Content } = Layout;

  const handleClick = async () => {
    await db.collection('teams').add({
      name: 'Gestor de Pedidos',
      members: [user.id]
    }).then((response) => {
      console.info(response);
    }).catch((error) => {
      console.info(error);
    });
  };

  return (
    <div className="HomePage">
      <Layout style={{ height: "100%" }}>
        <Sider>
          <SideMenu onLogout={onLogout} />
        </Sider>
        <Layout>
          <HeaderLayout>
            <Header />
          </HeaderLayout>
          <Content>
            <Button onClick={handleClick}>Xablau</Button>
            {JSON.stringify(user)}
          </Content>
          <Footer>
            <Copyright />
          </Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default withUser(HomePage);
