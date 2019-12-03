import React, { Component } from 'react';
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ContactAdress from "./Components/Contact/ContactAdress";
import ContactTemplate from './Components/Contact/ContactTemplate';
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import NoMatch from "./Components/NoMatch/NoMatch";
import Ranking from "./Components/Ranking/Ranking";

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Header />

        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/ranking' component={Ranking} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/contact/email' render={(props) => <ContactTemplate {...props} type='email' />} />
            <Route exact path='/contact/phone_number' render={(props) => <ContactTemplate {...props} type='phoneNumber' />} />
            <Route exact path='/contact/adress' component={ContactAdress} />
            <PrivateRoute exact path='/admin' component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

const authenticate = {
  isAuthenticated: true,

  authenticate() {
    this.isAuthenticated = true
  },

  signout() {
    this.isAuthenticated = false
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    authenticate.isAuthenticated ?
      <Component {...props} /> :
      <Redirect to='/' />
  )} />
)

export default App;
