import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";

import "./index.css";
import './App.css';
import List from './Components/List';
import Home from "./Home";
import NoMatch from "./NoMatch";

class App extends Component {

  render() {
    return (
      <HashRouter>
        <List className="navbar" list={this.list}></List>

        <Switch className="content">
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>

      </HashRouter>
    );
  }

  list = [
    {
      id: 'Home',
      link: '',
    },
    {
      id: 'News',
      link: 'news',
    },
    {
      id: 'Contact',
      link: 'contact',
      submenu: [
        {
          id: 'Email',
          link: 'email',
        },
        {
          id: 'Phone number',
          link: 'phone_number',
        },
        {
          id: 'Adress',
          link: 'adress',
        }
      ]
    },
    {
      id: 'Help',
      link: 'help',
    },
  ];
}

export default App;
