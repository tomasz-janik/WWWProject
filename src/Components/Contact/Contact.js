import React, { Component } from "react";
import './Contact.css';
import ContactAdress from './ContactAdress';
import ContactTemplate from './ContactTemplate';

class Contact extends Component {

    render() {
        return (
            <div>
                <ContactTemplate type='both' />
                <ContactAdress/>
            </div>
        );
    }
}

export default Contact;
