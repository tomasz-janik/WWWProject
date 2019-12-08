import React, { Component } from "react";

import './Admin.css';
import Card from '../Card/Card';
import DragAndDrop from '../DragAndDrop/DragAndDrop';
import Form from '../AddPost/Form/Form'

class Admin extends Component {

    state = {
        files: [],
        description: "",
    }

    handleDrop = (files) => {
        let fileList = this.state.files
        for (var i = 0; i < files.length; i++) {
            fileList.push(files[i])
        }

        this.setState(
            {
                files: fileList
            }
        )
    }

    handleDescriptionChange = (event) => {
        this.setState({
            description: event.target.value,
        })
    }

    handleSubmit = (description) => {
        console.log(description)
    }

    render() {
        return (
            <Card>
                <DragAndDrop handleDrop={this.handleDrop}>
                    <div className='drag_and_drop'>
                        {this.state.files.length === 0 &&
                            <div className='placeholder'>Drop Files Here</div>
                        }
                        {this.state.files.flatMap((file, key) =>
                            <div key={key}>{file.name}</div>
                        )}
                    </div>
                </DragAndDrop>
                <Form handleSubmit={this.handleSubmit}/>
            </Card>
        );
    }
}

export default Admin;
