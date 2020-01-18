import React, { Component } from "react";

import './Post.css'
import Card from '../Card/Card'

class Post extends Component {

    render() {
        return (
            <Card>
                <div className='post_name'>{this.props.data.name}</div>
                <img className='post_image' src={this.props.data.image} alt={this.props.data.description} />
                <div>{this.props.data.description}</div>
            </Card>
        );
    }
}

export default Post;