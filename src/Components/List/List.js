import React, { Component } from "react";
import Node from './Node';
import './List.css';

class List extends Component {

    state = {
      active: ''
    }

    changeState = (id) => {
      this.setState({
        active: id
      })
    }

    render() {
        let nodes = this.list.map((node, key) => {
            return (
                <Node node={node} children={node.submenu} key={key} active={this.state.active} setState={this.changeState}/>
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
          link: '',
        },
        {
          id: 'Ranking',
          link: 'ranking',
        },
        {
          id: 'About',
          link: 'about',
        },
        {
          id: 'Contact',
          link: 'contact',
          submenu: [
            {
              id: 'Email',
              link: 'contact/email',
            },
            {
              id: 'Phone number',
              link: 'contact/phone_number',
            },
            {
              id: 'Adress',
              link: 'contact/adress',
            }
          ]
        },
        {
          id: 'Help',
          link: 'help',
        },
      ];
}

export default List;
