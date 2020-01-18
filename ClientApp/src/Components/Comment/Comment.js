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
        comment: "",
        logged: sessionStorage.getItem('isLogged'),
        admin: sessionStorage.getItem("isAdmin")
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
        this.setState({
            comment: ""
        })

        event.preventDefault();
        fetch(this.state.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + sessionStorage.getItem("token")
            },
            body: JSON.stringify({ postId: this.state.id, comment: this.state.comment })
        })
            .then(response => {
                if (this._isMounted) {
                    if (response.ok) {
                        window.alert('Added comment sucessfully');
                        this.loadData();
                    }
                    else {
                        window.alert('Failed to add comment');
                    }
                }
            })
            .catch(err => {
                console.log(err)
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
                            data: response.data,
                        })
                    }

                }
            })
    }

    deleteComment = (entry) => {
        fetch('https://localhost:5001/api/v1/comments/' + entry.id, {
            method: 'DELETE',
            headers: new Headers(
                { 'Authorization': 'Bearer ' + sessionStorage.getItem("token") },
            )
        })
            .then(response => {
                if (this._isMounted) {
                    if (response.ok) {
                        window.alert('Comment removed');
                        this.loadData();
                    }
                    else {
                        window.alert('Couldnt remove comment');
                    }
                }
            })
            .catch(err => {
                console.log(err)
                if (this._isMounted) {
                    window.alert('Couldnt remove comment');
                }
            });
    }

    render() {
        return (
            <div>
                {this.state.logged === 'true' && <form onSubmit={this.handleSubmit}>
                    <div>
                        <input className='input_field_comments' placeholder="Enter Comment"
                            type="text" value={this.state.comment} onChange={this.handleCommentChange}
                            name="comment" required />
                    </div>
                    <button className='comment_button' type="submit">Comment</button>
                </form>}
                {this.state.data.length === 0 && <span className='comments'>There are no comments</span>}
                {this.state.data.length > 0 && <span className='comments'>Comments:</span>}
                {this.state.data.map((entry, key) => (
                    <div className='comment_card' key={key}>
                        <div className='comment_card_clear'>
                            <div className='comment'>{entry.comment}</div>
                            {this.state.admin === 'true' && <button className='comment_delete' onClick={() => this.deleteComment(entry)}><span role="img" aria-label="close">❌</span></button>}
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default Comment;