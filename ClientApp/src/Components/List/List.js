import React, { Component } from "react";
import { withRouter } from 'react-router';
import Node from './Node';
import './List.css';

class List extends Component {

  state = {
    active: this.props.location.pathname ? this.props.location.pathname : '/home',
  }

  changeState = (id) => {
    this.setState({
      active: id,
    })
  }

  render() {
    var renderList = [...this.list]
    if (this.props.logged === 'true') {
      renderList = renderList.filter(entry => entry.id !== 'Login');
    }
    if (this.props.admin === null || this.props.admin === 'false') {
      renderList = renderList.filter(entry => entry.id !== 'Admin');
    }
    if (this.props.admin === 'true' || this.props.logged === 'true') {
      renderList = renderList.filter(entry => entry.id !== 'Register');
    }

    let nodes = renderList.map((node, key) => {
      return (
        <Node node={node} children={node.submenu} key={key} active={this.state.active} setState={this.changeState} />
      );
    });

    return (
      <ul className='navigation_bar'>
        {nodes}
        {this.props.logged === 'true' && <li>
          <button className='logout_button' onClick={this.props.logout}>
            Logout
          </button>
        </li>}
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
      submenu: [
        {
          id: 'Overview',
          link: '/contact/overview',
        },
        {
          id: 'Dropdown menu',
          link: '/contact/dropdown_menu',
        },
        {
          id: 'Infinite Scrolling',
          link: '/contact/infinite_scrolling',
        },
        {
          id: 'Table',
          link: '/contact/table',
        }
      ]
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
      id: 'Register',
      link: '/register',
    },
    {
      id: 'Admin',
      link: '/admin',
    },
  ];
}

export default withRouter(List);