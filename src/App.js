import React, { Component } from 'react';
import {
  HashRouter
} from "react-router-dom";

import "./index.css";
import './App.css';
import './Components/List.css';


import List from './Components/List';

class App extends Component {

  state = {
    collapsed: false,
  }

  onCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  list = [
    {
      id: 'Home',
    },
    {
      id: 'News'
    },
    {
      id: 'Contact',
      submenu: [
        {
          id: 'Email',
          submenu: [
            {
              id: 'sup'
            }
          ]
        },
        {
          id: 'Phone number'
        },
        {
          id: 'Adress'
        }
      ]
    },
    {
      id: 'Help'
    },
  ];

  render() {
    return (
      <HashRouter>
        <List className="navbar" list={this.list}></List>
      </HashRouter>
    );
  }
}

export default App;
