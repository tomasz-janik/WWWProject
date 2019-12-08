import React, { Component } from "react";

import './Home.css'
import Card from '../Card/Card'

class Home extends Component {
    _isMounted = false;

    state = {
        isLoading: false,
        index: 0,
        data: [],
        hasMore: true,
        error: false,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.scrollFunction)
        this._isMounted = true;
        this.loadData();
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.scrollFunction)
        this._isMounted = false;
    }

    scrollFunction = () => {
        if (this.state.error || this.state.isLoading || !this.state.hasMore) return;

        if (window.innerHeight + document.documentElement.scrollTop >= document.body.scrollHeight) {
            this.loadData()
        }
    }

    loadData = () => {
        this.setState({ isLoading: true }, () => {
        
            fetch('https://localhost:5001/api/v1/posts/' + this.state.index)
                .then(response => response.json())
                .then(response => {
                    if (this._isMounted) {
                        console.log(response);
                        this.setState(
                            {
                                isLoading: false,
                                index: this.state.index + 10,
                                data: this.state.data.concat(response),
                                hasMore: response.hasMore
                            });
                    }
                })
                .catch(err => {
                    console.log(err);
                    if (this._isMounted) {
                        this.setState(
                            {
                                error: true,
                                isLoading: false,
                                hasMore: true
                            }
                        )
                    }
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
                {this.state.error &&
                    <Card>
                        Couldn't get data - please try again later
                    </Card>
                }
                {this.state.isLoading &&
                    <Card>
                        Just one moment - loading more data
                    </Card>
                }
                {!this.state.hasMore &&
                    <Card>
                        There is no more data - you've seen everything
                    </Card>
                }
            </div>
        );
    }
}

export default Home;
