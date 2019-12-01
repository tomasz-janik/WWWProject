import React, { Component } from "react";

import './Ranking.css'
import Card from '../Card/Card'

class Ranking extends Component {
    _isMounted = false;

    state = {
        isLoading: true,
        data: [],
        error: false,
    }

    componentDidMount() {
        this._isMounted = true;
        this.loadData();
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    loadData = () => {
        fetch('http://localhost:8081/data2')
        .then(response => response.json())
        .then(response => {
            if (this._isMounted) {
                this.setState(
                    {
                        isLoading: false,
                        data: this.state.data.concat(response),
                    });
                    console.log(this.state.data)
            }
        })
        .catch(err => {
            console.log(err);
            this.setState(
                {
                    isLoading: false,
                }
            )
        });
    }

    renderTableHeader() {
        if (this.state.data[0]) {
            let header = Object.keys(this.state.data[0])
            return header.map((key, index) => {
                return <th key={index}>{key.toUpperCase()}</th>
            })
        }
    }

    renderTableData() {
        return this.state.data.map((entry, index) => {
            console.log(entry)
            return (
                <tr key={index}>
                    <td>{entry.id}</td>
                    <td>{entry.name}</td>
                    <td>{entry.rating}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <Card>
                {!this.state.isLoading &&
                    <div className='table_border'>
                        <h1 className='table_name'>Ranking</h1>
                        <table className='table'>
                            <tbody>
                                <tr>{this.renderTableHeader()}</tr>
                                {this.renderTableData()}
                            </tbody>
                        </table>
                    </div>
                }
            </Card>
        );
    }
}

export default Ranking;
