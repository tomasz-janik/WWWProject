import React, { Component } from 'react';
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import ContactAdress from "./Components/Contact/ContactAdress";
import ContactTemplate from './Components/Contact/ContactTemplate';
import Header from './Components/Header/Header';
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import NoMatch from "./Components/NoMatch/NoMatch";
import Ranking from "./Components/Ranking/Ranking";

class App extends Component {

  render() {
    return (
      <HashRouter>
        <Header logged={authenticate.isAuthenticated}/>

        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/ranking' component={Ranking} />
            <Route exact path='/about' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/contact/email' render={(props) => <ContactTemplate {...props} type='email' />} />
            <Route exact path='/contact/phone_number' render={(props) => <ContactTemplate {...props} type='phoneNumber' />} />
            <Route exact path='/contact/adress' component={ContactAdress} />
            <LoginRoute exact path='/login' component={Login} />
            <AdminRoute exact path='/admin' component={Home} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

const authenticate = {
  isAuthenticated: false,
  isAdmin: false,

  authenticate() {
    this.isAuthenticated = true
    this.isAdmin = true
  },

  signout() {
    this.isAuthenticated = false
    this.isAdmin = false
  }
}

const LoginRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    !authenticate.isAuthenticated ?
      <Component {...props} /> :
      <Redirect to='/' />
  )} />
)

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    authenticate.isAdmin ?
      <Component {...props} /> :
      <Redirect to='/' />
  )} />
)

export default App;
