import React, { Component } from "react";

import './About.css'
import Card from '../Card/Card'

class Overview extends Component {
    render() {
        return (
            <Card>
                Project developed for class
                <br></br>
                <span className='shine'>'WWW Programming'</span>
                <br></br>
                taken in winter semestr of 2019/2020.
                <br></br><br></br>
                It was created by:
                <br></br>
                <span className='shine'>
                    Daniel Dobrowolski
                    <br></br>
                    Tomasz Janik
                </span>
                <br></br><br></br>
                Developed using technologies such as HTML, CSS and React.js
                <br></br>
                This project is a single page application, so it won't be reloaded when clicked on any button.
                <br></br><br></br>
                In order to fullfil requirements we have decided to create following components:
                <br></br>
                <span className='shine'>
                    Dropdown menu
                    <br></br>
                    Infinite scrolling
                    <br></br>
                    Table with availability to filter and sort by given column
                    <br></br>
                    Parallax scrolling
                </span>
                <br></br><br></br>
                On top of that we have used 'leaflet' to display map in Contact section.
                </Card>
        );
    }
}

export default Overview;
