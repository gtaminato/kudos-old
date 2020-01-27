import React, { FC } from 'react';
import { Layout } from 'antd';

import User from 'models/user';
import { withUser } from 'auth/user';

import SideMenu from 'components/side-menu';
import Copyright from 'components/copyright';

import './styles.scss';

const HomePage: FC<{ user: User }> = ({ user }) => {
  const { Header, Footer, Sider, Content } = Layout;

  return (
    <div className="HomePage">
      <Layout>
        <Sider>
          <SideMenu />
        </Sider>
        <Layout>
          <Header>

          </Header>
          <Content>

          </Content>
          <Footer>
            <Copyright />
          </Footer>
        </Layout>
      </Layout>
      {JSON.stringify(user)}
    </div>
  );
}

export default withUser(HomePage);
