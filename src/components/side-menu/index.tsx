import React from 'react';
import { Layout, Menu, Icon } from 'antd';

import './styles.scss'

class SideMenu extends React.Component<{
  picture?: string,
  name?: string
}> {
  state = {
    collapsed: false
  };

  static defaultProps = {
    picture: 'https://img.ibxk.com.br/2016/10/programas/9167627095224276.png',
    name: 'Gestor de Pedidos'
  };

  onCollapse = () => {
    const collapsed = this.state.collapsed;

    this.setState({
      collapsed: !collapsed
    });
  }

  render() {
    const { Sider } = Layout;
    const { picture, name } = this.props;

    return (
      <Sider
        className="SideMenu"
        collapsible
        collapsed={this.state.collapsed}
        onCollapse={this.onCollapse}
      >
        <div className="SideMenu__team">
          <div className="SideMenu__team-logo-wrapper">
            <img className="SideMenu__team-logo" src={picture} />
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
          <Menu.Item key="3">
            <Icon type="logout" />
            <span>Logout</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
};

export default SideMenu;