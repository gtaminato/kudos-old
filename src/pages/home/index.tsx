import React, { FC } from 'react';
import { Layout } from 'antd';

import User from 'models/user';
import { withUser } from 'auth/user';

import SideMenu from 'components/side-menu';
import Copyright from 'components/copyright';

import './styles.scss';
import Header from 'components/header';

const HomePage: FC<{ user: User }> = ({ user }) => {
  const { Header: HeaderLayout, Footer, Sider, Content } = Layout;

  return (
    <div className="HomePage">
      <Layout style={{ height: "100%" }}>
        <Sider>
          <SideMenu />
        </Sider>
        <Layout>
          <HeaderLayout>
            <Header />
          </HeaderLayout>
          <Content>
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
