import React, { Component } from "react";

class Node extends Component {

    state = {
        active: this.props.active
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.position !== this.props.position) {
            this.setState({
                active: this.props.active
            })
        }
    }

    handleClick = () => {
        this.props.setState(this.props.node.link);
    }

    generateClassName = () => {
        return this.props.active === this.props.node.link ? ' active' : '';
    }

    render() {
        let childnodes = null;

        if (this.props.children) {
            childnodes = this.props.children.map((childnode, key) => {
                return (
                    <Node node={childnode} children={childnode.submenu} key={key} active={this.props.active} setState={this.props.setState}/>
                );
            });
            return (
                <li className={'dropdown' + this.generateClassName()} key={this.props.node.id}>
                    <a href={'#' + this.props.node.link} className="dropbtn" onClick={this.handleClick}>
                        {this.props.node.id}
                    </a>
                    <ul className="dropdown-content">{childnodes}</ul>
                </li>
            );
        }
        return (
            <li className={this.generateClassName()}>
                <a href={'#' + this.props.node.link} key={this.props.node.id} onClick={this.handleClick}>
                    {this.props.node.id}
                </a>
            </li>
        );

    }

}

export default Node;
