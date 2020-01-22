import React, { Component } from "react";
import { withRouter } from 'react-router';

import './Register.css'
import Card from '../Card/Card'

class Register extends Component {

    _isMounted = false;

    state = {
        login: "",
        password: "",
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleLoginChange = (event) => {
        this.setState({
            login: event.target.value,
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if (!/.+@.+\.[A-Za-z]+$/.test(this.state.login)) {
            window.alert("Invalid email address!")
            return;
        }
        if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(this.state.password)) {
            window.alert("Password should have at least one upper letter, one lower letter, one number and one special character and be at least 8 characters!")
            return;
        }
        fetch('https://localhost:5001/api/v1/identity/register', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify({ email: this.state.login, password: this.state.password })
        })
            .then(response => response.json())
            .then((response) => {
                if (this._isMounted) {
                    if (response.errors) {
                        window.alert('Failed to register: ' + response.errors)
                    }
                    else {
                        window.alert('You are now registered!')
                        this.props.registered(response.token, response.refreshToken)
                        this.props.history.replace('/')
                    }
                }
            })
            .catch((e) => {
                if (this._isMounted) {
                    window.alert('Failed to register: ' + e)
                }
            });
    }


    render() {
        return (
            <Card>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label className='label_login' htmlFor="email"><b>Login</b></label>
                        <input className='input_field_register' placeholder="Enter Login"
                            type="text" value={this.state.login} onChange={this.handleLoginChange}
                            name="Login" required />
                    </div>
                    <div>
                        <label className='label_login' htmlFor="Password"><b>Password</b></label>
                        <input className='input_field_register' placeholder="Enter Password"
                            type="password" value={this.state.password} onChange={this.handlePasswordChange}
                            name="Password" required />
                    </div>
                    <button className='login_button' type="submit">Register</button>
                </form>
            </Card>
        );
    }
}

export default withRouter(Register);
