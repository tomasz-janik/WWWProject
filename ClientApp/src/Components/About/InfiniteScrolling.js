import React, { Component } from "react";

import './About.css';
import Card from '../Card/Card'

class InfiniteScrolling extends Component {
    render() {
        return (
            <Card>
                <h1>Infinite Scrolling</h1>
                Used to load posts on home page - backend can return bunch od posts and to make it easier for user to see them we use infinite scrolling that loads posts as user sees them.
            </Card>
        );
    }
}

export default InfiniteScrolling;
