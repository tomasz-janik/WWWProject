import React, { Component } from "react";
import { withRouter } from 'react-router';
import Node from './Node';
import './List.css';

class List extends Component {

  state = {
    active: this.props.location.pathname ? this.props.location.pathname : '/home',
    logged: this.props.logged,
    admin: this.props.admin,
  }

  componentDidUpdate(prevProps, prevState){
    if ((prevProps.logged !== this.props.logged) || (prevProps.admin !== this.props.admin)){
        this.setState({
          logged: this.props.logged,
          admin: this.props.admin,
        })
    }
}

  changeState = (id) => {
    this.setState({
      active: id
    })
  }

  render() {
    if (this.state.logged){
      this.list = this.list.filter(entry => entry.id !== 'Login');
    }
    if (this.state.admin){
      this.list = this.list.filter(entry => entry.id !== 'Admin');
    }

    let nodes = this.list.map((node, key) => {
      return (
        <Node node={node} children={node.submenu} key={key} active={this.state.active} setState={this.changeState} />
      );
    });

    return (
      <ul className='navigation_bar'>
        {nodes}
      </ul>
    );
  }

  list = [
    {
      id: 'Home',
      link: '/',
    },
    {
      id: 'Ranking',
      link: '/ranking',
    },
    {
      id: 'About',
      link: '/about',
    },
    {
      id: 'Contact',
      link: '/contact',
      submenu: [
        {
          id: 'Email',
          link: '/contact/email',
        },
        {
          id: 'Phone number',
          link: '/contact/phone_number',
        },
        {
          id: 'Adress',
          link: '/contact/adress',
        }
      ]
    },
    {
      id: 'Login',
      link: '/login',
    },
    {
      id: 'Admin',
      link: '/admin',
    },
  ];
}

export default withRouter(List);
