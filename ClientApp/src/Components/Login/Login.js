import React, { Component } from "react";

import './Login.css'
import Card from '../Card/Card'

class Login extends Component {

    _isMounted = false;

    state = {
        username: "",
        password: "",
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleUsernameChange = (event) => {
        this.setState({
            username: event.target.value,
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch('https://localhost:5001/api/v1/identity/login', {
            method: 'POST',
            headers: new Headers({ 'content-type': 'application/json' }),
            body: JSON.stringify({ email: this.state.username, password: this.state.password })
        })
            .then(response => response.json())
            .then((response) => {
                if (this._isMounted) {
                    if (response.errors) {
                        window.alert('Failed to login: ' + response.errors)
                    }
                    else {
                        this.props.registered(response.token, response.refreshToken)
                        this.props.history.replace('/')
                    }
                }
            })
            .catch((e) => {
                if (this._isMounted) {
                    window.alert('Failed to login')
                }
            });
    }


    render() {
        return (
            <Card>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label className='label_login' htmlFor="username"><b>Username</b></label>
                        <input className='input_field' placeholder="Enter Username"
                            type="text" value={this.state.username} onChange={this.handleUsernameChange}
                            name="username" required />
                    </div>
                    <div>
                        <label className='label_login' htmlFor="password"><b>Password</b></label>
                        <input className='input_field' placeholder="Enter Password"
                            type="password" value={this.state.password} onChange={this.handlePasswordChange}
                            name="password" required />
                    </div>
                    <button className='login_button' type="submit">Login</button>
                </form>
            </Card>
        );
    }
}

export default Login;
