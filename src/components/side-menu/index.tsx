import React from 'react';
import { Layout, Menu, Icon } from 'antd';

class SideMenu extends React.Component {
  state = {
    collapsed: false
  };

  onCollapse = () => {
    const collapsed = this.state.collapsed;

    this.setState({
      collapsed: !collapsed
    });
  }

  render() {
    const { Sider } = Layout;

    return (
      <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
        <div className="logo" />
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