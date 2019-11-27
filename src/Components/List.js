import React, { Component } from "react";
import Node from './Node';
import './List.css';


class List extends Component {

    render() {

        let nodes = this.props.list.map(function (node, key) {
            return (
                <Node node={node} children={node.submenu} key={key}/>
            );
        });

        return (
            <div>
                <ul>
                    {nodes}
                </ul>
            </div>
        );
    }

}

export default List;
