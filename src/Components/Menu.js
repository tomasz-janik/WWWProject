import React, { Component } from "react";
import Node from './Node';
//import './List.css';

class Menu extends Component {

    renderMenu = (items) => {
        return <ul>
            {items.map(i => {
                return <li>
                    <a href={i.id}>{i.id}</a>
                    {i.submenu && this.renderMenu(i.submenu)}
                </li>
            })}
        </ul>
    }

    render() {
        return <nav>
            <h2>{this.props.data.title}</h2>
            {this.renderMenu(this.props.data)}
        </nav>
    }

}

export default Menu;