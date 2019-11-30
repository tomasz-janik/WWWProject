import React, { Component } from "react";
import List from '../List/List';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <div className='header'>
                <List />
                <div className='flexbox-container'>
                    <img className='logo' src='./logo.png' alt='logo' />
                </div>
            </div>
        );
    }

}

export default Header;