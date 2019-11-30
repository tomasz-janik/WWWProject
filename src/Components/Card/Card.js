import React, { Component } from "react";

import './Card.css'

class Card extends Component {
    render() {
        return (
            <div className='card'>
                <div className='clear'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Card;
