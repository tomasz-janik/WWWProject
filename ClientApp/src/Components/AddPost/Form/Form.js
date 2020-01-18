import React, { Component } from "react";
import './Form.css';

class Form extends Component {

    state = {
        name: "",
        description: "",
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value,
        })
    }

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.name, this.state.description);
        this.setState({
            name: "",
            description: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label className='label_name' htmlFor="name"><b>Name</b></label>
                    <input className='input_name_field' placeholder="Enter Name"
                        type="text" value={this.state.name} onChange={this.handleNameChange}
                        name="name" required />
                </div>
                <div>
                    <label className='label_description' htmlFor="description"><b>Description</b></label>
                    <input className='input_description_field' placeholder="Enter Description"
                        type="text" value={this.state.description} onChange={this.handleDescriptionChange}
                        name="description" required />
                </div>
                <button className='submit_button' type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;
