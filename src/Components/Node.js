import React, { Component } from "react";

class Node extends Component {

    render() {
        let childnodes = null;

        if (this.props.children) {
            childnodes = this.props.children.map(function (childnode, key) {
                return (
                    <Node node={childnode} children={childnode.submenu} key={key}/>
                );
            });
            return (
                <li className="dropdown" key={this.props.node.id}>
                    <a className="dropbtn">{this.props.node.id}</a>
                    <ul className="dropdown-content">{childnodes}</ul>
                </li>
            );
        }
        return (
            <li>
                <a href="#" key={this.props.node.id}>
                    {this.props.node.id}
                </a>
            </li>
        );

    }

}

export default Node;
