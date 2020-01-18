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
import Register from "./Components/Register/Register";
import NoMatch from "./Components/NoMatch/NoMatch";
import Ranking from "./Components/Ranking/Ranking";
import Admin from "./Components/Admin/Admin";

var jwtDecode = require('jwt-decode');

class App extends Component {

  state = {
    isLogged: sessionStorage.getItem('isLogged'),
    isAdmin: sessionStorage.getItem('isAdmin'),
  }

  login = (token, refreshToken) => {
    var isAdmin = jwtDecode(token).role === 'Admin'
    sessionStorage.setItem('isLogged', 'true')
    sessionStorage.setItem('isAdmin', isAdmin)
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('refreshToken', refreshToken)
    this.setState({
      isLogged: 'true',
      isAdmin: isAdmin
    })
    setInterval(() => {
      fetch('https://localhost:5001/api/v1/identity/refresh', {
        method: 'POST',
        headers: new Headers({ 'content-type': 'application/json' }),
        body: JSON.stringify({ token: sessionStorage.getItem('token'), refreshToken: sessionStorage.getItem('refreshToken') })
      })
        .then(response => response.json())
        .then((response) => {
          sessionStorage.setItem('token', response.token)
          sessionStorage.setItem('refreshToken', response.refreshToken)
        })
    }, 900000);
  }

  render() {
    return (
      <HashRouter>
        <Header logged={this.state.isLogged} admin={this.state.isAdmin} />

        <div className='content'>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/ranking' component={Ranking} />
            <Route exact path='/about' component={About} />
            <Route exact path='/about/overview' component={About} />
            <Route exact path='/contact' component={Contact} />
            <Route exact path='/contact/email' render={(props) => <ContactTemplate {...props} type='email' />} />
            <Route exact path='/contact/phone_number' render={(props) => <ContactTemplate {...props} type='phoneNumber' />} />
            <Route exact path='/contact/adress' component={ContactAdress} />
            <LoginRoute exact path='/login' isLogged={this.state.isLogged} component={(props) => <Login {...props} registered={this.login} />} />
            <RegisterRoute exact path='/register' isLogged={this.state.isLogged} component={(props) => <Register {...props} registered={this.login} />} />
            <AdminRoute exact path='/admin' isAdmin={this.state.isAdmin} component={Admin} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </HashRouter>
    );
  }
}

const RegisterRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    !rest.isLogged ?
      <Component {...props} /> :
      <Redirect to='/' />
  )} />
)

const LoginRoute = ({ component: Component, ...rest }) => (
  < Route {...rest} render={props => (
    !rest.isLogged ?
      <Component {...props} /> :
      <Redirect to='/' />
  )} />
)

const AdminRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    rest.isAdmin ?
      <Component {...props} /> :
      <Redirect to='/' />
  )} />
)

export default App;
