import React, { Component } from "react";
import './Form.css';

class Form extends Component {

    state = {
        description: "",
    }

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit(this.state.description);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label className='label_description' htmlFor="description"><b>Description</b></label>
                    <input className='input_field' placeholder="Enter Description"
                        type="text" value={this.state.description} onChange={this.handleDescriptionChange}
                        name="description" required />
                </div>
                <button className='submit_button' type="submit">Submit</button>
            </form>
        );
    }
}

export default Form;
