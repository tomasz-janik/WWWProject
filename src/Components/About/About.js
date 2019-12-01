import React, { Component } from "react";

import './About.css';
import Overview from './Overview';
import DropdownMenu from './DropdownMenu'
import InfiniteScrolling from "./InfiniteScrolling";
import Table from "./Table";

class About extends Component {
    render() {
        return (
            <div>
                <Overview/>
                <DropdownMenu/>
                <InfiniteScrolling/>
                <Table/>
            </div>
        );
    }
}

export default About;
