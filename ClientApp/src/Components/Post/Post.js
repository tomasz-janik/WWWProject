import React, { Component } from "react";

import './Post.css'
import Card from '../Card/Card'
import Comment from '../Comment/Comment'

class Post extends Component {


    render() {
        return (
            <Card>
                <div className='post_name'>{this.props.data.name}</div>
                <div>{this.props.data.description}</div>
                <img className='post_image' src={this.props.data.image} alt={this.props.data.description} />
                <div className='divider'></div>
                <Comment id={this.props.data.id} />
            </Card>
        );
    }
}

export default Post;