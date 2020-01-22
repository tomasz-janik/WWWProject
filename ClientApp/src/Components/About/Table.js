import React, { Component } from "react";

import './About.css';
import Card from '../Card/Card'

class Table extends Component {
    render() {
        return (
            <Card>
                <h1>Table</h1>
                <br></br>
                Allows user to sort and filter results based on some criteries e.g. date of creation.
            </Card>
        );
    }
}

export default Table;
