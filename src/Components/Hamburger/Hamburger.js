import React, { Component } from "react";

import './Hamburger.css'

class Hamburger extends Component {

    state = {
        position: this.props.position
    }

    componentDidUpdate(prevProps, prevState){
        if (prevProps.position !== this.props.position){
            this.setState({
                position: this.props.position
            })
        }

    }

    getLowerClassName = () => {
        switch (this.state.position) {
            case 'sorted':
                return 'component component_smallest change'
            default:
                return 'component';
        }
    }

    getMiddleClassName = () => {
        switch (this.state.position) {
            case 'default':
                return 'component'
            default:
                return 'component change component_middle';
        }
    }

    getUpperClassName = () => {
        switch (this.state.position) {
            case 'reversed':
                return 'component change component_smallest'
            default:
                return 'component';
        }
    }

    render() {
        return (
            <div className='menu_icon'>
                <div id='component_upper' className={this.getUpperClassName()}></div>
                <div id='component_middle' className={this.getMiddleClassName()}></div>
                <div id='component_bottom' className={this.getLowerClassName()}></div>
            </div>
        );
    }
}

export default Hamburger;
