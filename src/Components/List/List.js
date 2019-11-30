import React, { Component } from "react";
import Node from './Node';
import './List.css';

class List extends Component {

    render() {
        let nodes = this.list.map(function (node, key) {
            return (
                <Node node={node} children={node.submenu} key={key} />
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

export default List;
