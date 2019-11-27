import React, { Component } from "react";
import axios from 'axios';

class Bitcoin extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            currency: '',
            value: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ currency: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.get('https://api.coindesk.com/v1/bpi/currentprice/' + this.state.currency +'.json')
            .then(res => {
                this.setState({ 
                    value: res.data.bpi[this.state.currency].rate
                });
            }).catch( () => {
                this.setState({ 
                    value: "Niewspierana waluta"
                });
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Waluta:
                    <input type="text" value={this.state.currency} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Wyślij" />
                </form>
                <ul>
                    <li>{this.state.value}</li>
                </ul>
            </div>
        );
    }
}

export default Bitcoin;
