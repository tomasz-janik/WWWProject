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
        fetch('https://localhost:5001/api/v1/posts?pageNumber=1&pageSize=1000')
            .then(response => response.json())
            .then(response => {
                if (this._isMounted) {
                    this.setState(
                        {
                            isLoading: false,
                            data: this.state.data.concat(response.data),
                            displayedData: this.state.data.concat(response.data)
                        });
                }
            })
            .catch(err => {
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
                    if (a[key] < b[key]) {
                        return -1;
                    } else if (a[key] > b[key]) {
                        return 1;
                    } else {
                        return 0;
                    }
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
            header = header.filter(entry => entry === 'name' || entry === 'description' || entry === 'created');
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

    appendLeadingZeros = (n) => {
        if (n <= 9) {
            return "0" + n;
        }
        return n
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
            let current_datetime = new Date(entry.created)
            let formatted_date = this.appendLeadingZeros(current_datetime.getDate()) + "-" + this.appendLeadingZeros(current_datetime.getMonth() + 1) + "-" + this.appendLeadingZeros(current_datetime.getFullYear()) + " " + this.appendLeadingZeros(current_datetime.getHours()) + ":" + this.appendLeadingZeros(current_datetime.getMinutes()) + ":" + this.appendLeadingZeros(current_datetime.getSeconds())
            return (
                <tr key={index}>
                    <td>{entry.name}</td>
                    <td>{entry.description}</td>
                    <td>{formatted_date}</td>
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
