import React, { Component } from 'react'

export default class Posts extends Component {
    render() {
        
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            </div>
        ))
        
        return (
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        )
    }
}
