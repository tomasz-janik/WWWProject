import React, { Component } from 'react';
import {
  HashRouter,
  Route,
  Switch
} from "react-router-dom";

import './App.css';
import Header from './Components/Header/Header';

import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
import Contact from "./Components/Contact/Contact";
import ContactTemplate from './Components/Contact/ContactTemplate';
import ContactAdress from "./Components/Contact/ContactAdress";

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Header />

        <div className='content'>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/contact/email" render={(props) => <ContactTemplate {...props} type='email' />} />
            <Route exact path="/contact/phone_number" render={(props) => <ContactTemplate {...props} type='phoneNumber' />} />
            <Route exact path="/contact/adress" component={ContactAdress} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
