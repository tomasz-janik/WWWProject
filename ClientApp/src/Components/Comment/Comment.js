import React, { Component } from "react";

import './Comment.css'

class Comment extends Component {
    _isMounted = false;

    constructor(props) {
        super(props)
        this.loadData()
    }

    state = {
        id: this.props.id,
        url: 'https://localhost:5001/api/v1/comments/',
        data: [],
        comment: ""
    }

    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handleCommentChange = (event) => {
        this.setState({
            comment: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        fetch(this.state.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            },
            body: JSON.stringify({ postId: this.state.id, comment: this.state.comment })
        })
            .then(response => response.json())
            .then(response => {
                if (this._isMounted) {
                    window.alert('Added comment sucessfully');
                }
            })
            .catch(err => {
                if (this._isMounted) {
                    window.alert('Failed to add comment');
                }
            });
    }


    loadData = () => {
        fetch(this.state.url + this.state.id)
            .then(response => response.json())
            .then(response => {
                if (this._isMounted) {
                    if (response.data) {
                        this.setState({
                            data: this.state.data.concat(response.data),
                        })
                    }

                }
            })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <input className='input_field_comments' placeholder="Enter Comment"
                            type="text" value={this.state.comment} onChange={this.handleCommentChange}
                            name="comment" required />
                    </div>
                    <button className='comment_button' type="submit">Comment</button>
                </form>
                {this.state.data.length === 0 && <span className='comments'>There are no comments</span>}
                {this.state.data.length > 0 && <span className='comments'>Comments:</span>}
                {this.state.data.map((entry, key) => (
                    <div className='commend_card' key={key}>
                        {entry.comment}
                    </div>
                ))}
            </div>
        );
    }
}

export default Comment;