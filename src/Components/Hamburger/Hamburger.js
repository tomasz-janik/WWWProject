import React, { Component } from "react";

import './Hamburger.css'

class Hamburger extends Component {

    state = {
        position: 'default'
    }

    render() {
        return (
            <div className='menu_icon'>
                <div id='component_upper' className='component'></div>
                <div id='component_middle' className='component'></div>
                <div id='component_bottom' className='component'></div>
            </div>
        );
    }
}

export default Hamburger;
