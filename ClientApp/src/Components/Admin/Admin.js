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
        uploadLength: 1,
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

        let reader = new FileReader();
        reader.onloadend = () => {
            this.setState({
                imagePreviewUrl: reader.result
            });
        }

        reader.readAsDataURL(this.state.files[0])

        this.setState(
            {
                files: fileList
            }
        )

    }

    handleSubmit = (desc) => {
        console.log(this.state.files)
        fetch('https://localhost:5001/api/v1/add', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ description: desc, files: this.state.files })
        })
            .then(response => response.json())
            .then(response => {
                if (this._isMounted) {
                    window.alert('Added post sucessfully');
                }
            })
            .catch(err => {
                if (this._isMounted) {
                    window.alert('Failed to add post');
                }
            });
    }

    updateUploadLength = (length) => {
        this.setState({
            uploadLength: length
        })
    }

    render() {
        return (
            <Card>
                <DragAndDrop handleDrop={this.handleDrop} updateUploadLength={this.updateUploadLength}>
                    <div className='drag_and_drop'>
                        {this.state.files.length === 0 && (this.state.uploadLength > 1 ?
                            <div className='placeholder'>Can't Upload So Many Files</div> :
                            <div className='placeholder'>Drop File Here</div>
                        )
                        }
                        {this.state.files.length !== 0 &&
                            <img src={this.state.imagePreviewUrl} alt="icon" width="200" />
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
