import React, { Component } from "react";

import './Ranking.css'
import Card from '../Card/Card'
import Hamburger from "../Hamburger/Hamburger";

class Ranking extends Component {
    _isMounted = false;

    state = {
        isLoading: true,
        data: [],
        displayedData: [],
        error: false,
        idFilterValue: "",
        nameFilterValue: "",
        ratingFilterValue: "",
        sortedByValue: "id",
        reversed: false
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
                            displayedData: this.state.data.concat(response)
                        });
                }
            })
            .catch(err => {
                console.log(err);
                if (this._isMounted) {
                    this.setState(
                        {
                            isLoading: false,
                        }
                    )
                }
            });
    }

    sortArray = (key) => {
        if (this.state.sortedByValue === key) {
            this.setState(
                {
                    reversed: !this.state.reversed,
                    displayedData: this.state.displayedData.reverse()
                }
            )
            return;
        }
        this.setState(
            {
                sortedByValue: key,
                reversed: false,
                displayedData: this.state.displayedData.sort((a, b) => {
                    return a[key] - b[key];
                })
            }
        )
    }

    getHamburger = (key) => {
        var pos = key === this.state.sortedByValue ? this.state.reversed ? 'reversed' : 'sorted' : 'default';
        return (
            <Hamburger position={pos} />
        )
    }


    renderTableHeader() {
        if (this.state.data[0]) {
            let header = Object.keys(this.state.data[0])
            return header.map((key, index) => {
                return <th key={index} onClick={e => this.sortArray(key)}>
                    <div>
                        <span className='key'>{key.toUpperCase()}</span>
                        {this.getHamburger(key)}
                    </div>
                </th>
            })
        }
    }

    renderTableData() {
        if (this.state.displayedData.length === 0) {
            return (
                <tr>
                    <td colSpan="3">
                        None of avalible data matches your request!
                    </td>
                </tr>
            )
        }
        return this.state.displayedData.map((entry, index) => {
            return (
                <tr key={index}>
                    <td>{entry.id}</td>
                    <td>{entry.name}</td>
                    <td>{entry.rating}</td>
                </tr>
            )
        })
    }

    renderTableFilters = () => {
        return (
            <tr>
                <td>
                    <input type="text" value={this.state.idFilterValue} onChange={this.handleIdFilterChange} />
                </td>
                <td>
                    <input type="text" value={this.state.nameFilterValue} onChange={this.handleNameFilterChange} />
                </td>
                <td>
                    <input type="text" value={this.state.ratingFilterValue} onChange={this.handleRatingFilterChange} />
                </td>
            </tr>
        )
    }

    filterData = () => {
        this.setState(
            {
                displayedData: this.state.data.filter((entry) => {
                    return (entry.id + '').includes(this.state.idFilterValue)
                        && entry.name.includes(this.state.nameFilterValue)
                        && entry.rating.includes(this.state.ratingFilterValue);
                })
            }
        );
    }

    handleIdFilterChange = (event) => {
        this.setState(
            {
                idFilterValue: event.target.value
            },
            this.filterData
        );
    }

    handleNameFilterChange = (event) => {
        this.setState(
            {
                nameFilterValue: event.target.value
            },
            this.filterData
        );
    }

    handleRatingFilterChange = (event) => {
        this.setState(
            {
                ratingFilterValue: event.target.value
            },
            this.filterData
        );
    }

    render() {
        return (
            <Card>
                <div className='table_border'>
                    <h1 className='table_name'>Ranking</h1>
                    <table className='table'>
                        <tbody>
                            <tr>
                                {this.renderTableHeader()}
                            </tr>
                            {this.renderTableFilters()}
                            {this.renderTableData()}
                        </tbody>
                    </table>
                </div>
            </Card>
        );
    }
}

export default Ranking;