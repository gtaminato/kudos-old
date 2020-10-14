import React, { FC, useState } from 'react';
import { Layout, Menu, Icon } from 'antd';

import './styles.scss'

const SideMenu: FC<{
  picture?: string,
  name?: string,
  onLogout?: () => void
}> = ({
  picture = 'https://img.ibxk.com.br/2016/10/programas/9167627095224276.png',
  name = 'Gestor de Pedidos',
  onLogout
}) => {
  const [collapsed, setCollapsed] = useState(false);

  const { Sider } = Layout;

  return (
    <Sider
      className="SideMenu"
      collapsible
      collapsed={collapsed}
      onCollapse={() => setCollapsed(!collapsed)}
    >
      <div className="SideMenu__team">
        <div className="SideMenu__team-logo-wrapper">
          <img className="SideMenu__team-logo" src={picture} alt="iFood" />
        </div>
        <h3 className="SideMenu__team-name">{name}</h3>
      </div>
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1">
          <Icon type="heart" />
          <span>Dashboard</span>
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="team" />
          <span>Teams</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={onLogout}>
          <Icon type="logout" />
          <span>Logout</span>
        </Menu.Item>
      </Menu>
    </Sider>
  );
};

export default SideMenu;