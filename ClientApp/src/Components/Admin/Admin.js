import React, { Component } from "react";

import './Admin.css';
import Card from '../Card/Card';
import DragAndDrop from '../DragAndDrop/DragAndDrop';
import Form from '../AddPost/Form/Form'

class Admin extends Component {

    _isMounted = false;

    state = {
        files: [],
        description: "",
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
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

    handleSubmit = (desc) => {
        fetch('https://localhost:5001/api/v1/add', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({description: desc, files: this.state.files})
        })
            .then(response => response.json())
            .then(response => {
                if (this._isMounted) {
                    window.alert('Added post sucessfully');
                }
            })
            .catch(err => {
                if (this._isMounted){
                    window.alert('Failed to add post');
                }
            });
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
                <Form handleSubmit={this.handleSubmit} />
            </Card>
        );
    }
}

export default Admin;
