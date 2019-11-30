import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";

import "./index.css";
import './App.css';
import Header from './Components/Header/Header';

import Home from "./Home";
import NoMatch from "./NoMatch";

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Header/>

        <Switch className="content">
          <Route exact path="/" component={Home} />
          <Route component={NoMatch} />
        </Switch>

      </HashRouter>
    );
  }
}

export default App;
