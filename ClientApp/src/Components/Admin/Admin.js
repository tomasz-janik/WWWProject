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
        uploadType: "",
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
        const formData = new FormData();

        formData.append("Name", "name");
        formData.append("Description", desc);
        formData.append("Image", this.state.files[0])

        fetch('https://localhost:5001/api/v1/posts', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            body: formData
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

    updateUploadType = (type) => {
        this.setState({
            uploadType: type
        })
    }

    getPlaceholder = () => {
        if (this.state.files.length === 0) {
            if (this.state.uploadLength > 1) {
                return "Can't Upload So Many Files";
            }
            if (this.state.uploadType !== "" && !this.state.uploadType.includes('image')) {
                return "Invalid file type";
            }
            return "Drop File Here";
        }
    }

    render() {
        return (
            <Card>
                <DragAndDrop handleDrop={this.handleDrop} updateUploadLength={this.updateUploadLength}
                    updateUploadType={this.updateUploadType}>
                    <div className='drag_and_drop'>
                        {this.state.files.length === 0 &&
                            <div className='placeholder'>
                                {this.getPlaceholder()}
                            </div>
                        }

                        {this.state.files.length !== 0 &&
                            <img className='uploaded_image' src={this.state.imagePreviewUrl} alt="icon" width="200" />
                        }
                        {this.state.files.flatMap((file, key) =>
                            <div className='uploaded_image_name' key={key}>{file.name}</div>
                        )}
                    </div>
                </DragAndDrop>
                <Form handleSubmit={this.handleSubmit} />
            </Card>
        );
    }
}

export default Admin;
