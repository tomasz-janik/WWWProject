import React, { Component } from "react";

import './Home.css'
import Card from '../Card/Card'

class Home extends Component {

    state = {
        isLoading: false,
        index: 0,
        data: [],
        hasMore: true
    }

    componentDidMount() {
        this.loadUsers();
        setInterval(() => this.loadUsers(), 10000);
    }

    loadUsers = () => {
        this.setState({ isLoading: true }, () => {
            fetch('http://localhost:8081/data/' + this.state.index)
                .then(response => response.json())
                .then(response => {
                    this.state.data.concat(response.data);                    
                    this.setState(
                    { 
                        isLoading: false,
                        index: this.state.index + 10,
                        data: this.state.data.concat(response.data),
                        hasMore: response.hasMore
                    });
                    return response.data;
                })
                .catch(err => {
                    console.log(err);
                    this.setState(
                        {
                            isLoading: false,
                            hasMore: false
                        }
                    )
                });
        });
    }

    render() {
        return (
            <div>
                {this.state.data.map((entry, key) => (
                    <Card key={key}>
                        {entry.name}
                    </Card>
                ))}
                {this.state.isLoading &&
                    <div>Loading...</div>
                }
                {!this.state.hasMore &&
                    <div>You did it! You reached the end!</div>
                }
            </div>
        );
    }
}

export default Home;
