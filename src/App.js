import React, { Component } from 'react';
import './App.css';
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Stuff from "./Stuff";
import Contact from "./Contact";
import Bitcoin from "./Bitcoin";
import SideMenu from "./Components/SideMenu";
import "./index.css";

import { Layout, Menu, Breadcrumb, Icon } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class App extends Component {

  state = {
    collapsed: false,
  }

  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <HashRouter>
        <Layout style={{ minHeight: '100vh' }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <SideMenu></SideMenu>
          </Sider>
          <Layout>
            <Content style={{ margin: '16px 16px' }}>
              <div style={{ padding: 24, background: '#fff', minHeight: 360, textAlign: 'center' }}>
                Lelum polelum
              </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>Programowanie WWW 2019 :)</Footer>
          </Layout>
        </Layout>
      </HashRouter>
    );
  }
}

export default App;
