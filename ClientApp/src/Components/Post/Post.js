import React, { Component } from "react";

import './Post.css'
import Card from '../Card/Card'

class Post extends Component {

    render() {
        return (
            <Card>
                <div className='post_name'>{this.props.name}</div>
                <img src={this.props.image} alt={this.props.description} />
                <div>{this.props.description}</div>
                <div className='rating'>
                    <button className='plus_button rating_child'>
                        <span>&#43;</span>
                    </button>
                    <div className='overall_rating rating_child'>
                        <div className='content'>
                            {this.props.rating}
                        </div>
                    </div>
                </div>
            </Card>
        );
    }
}

export default Post;