import React, { Component } from "react";

import './Login.css'
import Card from '../Card/Card'

class Login extends Component {

    state = {
        username: "",
        password: "",
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
        fetch('https://localhost:5001/api/v1/login/', {
            headers: new Headers({
                'Authorization': 'Basic ' + new Buffer(this.state.username + ':' + this.state.password).toString('base64')
            })
        })
    }
            

    render() {
        return (
            <Card>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="username"><b>Username</b></label>
                        <input className='input' placeholder="Enter Username" 
                            type="text" value={this.state.username} onChange={this.handleUsernameChange} 
                            name="username" required />
                    </div>
                    <div>
                        <label htmlFor="password"><b>Password</b></label>
                        <input className='input' placeholder="Enter Password" 
                            type="password" value={this.state.password} onChange={this.handlePasswordChange} 
                            name="password" required />
                    </div>
                    <button type="submit">Login</button>
                </form>
            </Card>
        );
    }
}

export default Login;
