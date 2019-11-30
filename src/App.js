import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";

import './App.css';
import Header from './Components/Header/Header';

import Home from "./Home";
import NoMatch from "./Components/NoMatch/NoMatch";

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Header />

        <div className='content'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
