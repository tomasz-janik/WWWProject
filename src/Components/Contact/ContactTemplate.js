import React, { Component } from "react";

import './Contact.css'
import Card from '../Card/Card'

class ContacTemplate extends Component {

    generateText = () => {
        switch (this.props.type) {
            case 'both':
                return (
                    <div>
                        If you have any questions or ideas how to make this site better, please contact us at:
                        <br></br><br></br>
                        <a className='email' href="mailto:tomasz.janik@student.uj.edu.pl">tomasz.janik@student.uje.edu.pl</a>
                        <br></br><br></br>
                        or call
                        <br></br><br></br>
                        <span className='phone_number'>508478726</span>
                    </div>
                )
            case 'email':
                return (
                    <div>
                        If you have any questions or ideas how to make this site better, please contact us at:
                        <br></br><br></br>
                        <a className='email' href="mailto:tomasz.janik@student.uj.edu.pl">tomasz.janik@student.uje.edu.pl</a>
                    </div>
                )
            case 'phoneNumber':
                return (
                    <div>
                        If you have any questions or ideas how to make this site better, please contact us at:
                        <br></br><br></br>
                        <span className='phone_number'>508478726</span>
                    </div>
                )
            default:
                return;
        }
    }

    render() {
        return (
            <div>
                <Card>
                    {this.generateText()}
                </Card>
            </div>
        );
    }
}

export default ContacTemplate;
