import React, { Component } from "react";

import './About.css';
import Card from '../Card/Card'

class DropdownMenu extends Component {
    render() {
        return (
            <Card>
                <h1>Dropdown Menu</h1>
                Used as a navigation component. Can be seen on top of the website.
                <br></br>
                Helps users to navigate the site without manually writting links and groups similar contents together.
            </Card>
        );
    }
}

export default DropdownMenu;
