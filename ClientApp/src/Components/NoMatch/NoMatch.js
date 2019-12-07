import React, { Component } from "react";

import './NoMatch.css'
import Card from '../Card/Card'

class NoMatch extends Component {
    render() {
        return (
            <Card>
                Unfortunatelly there is nothing here
                <br></br><br></br>
                Mayby you meant to enter different link?
                <br></br>
                Use the menu at the top of the website
            </Card>
        );
    }
}

export default NoMatch;
