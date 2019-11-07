import React, { Component } from 'react';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';



// export default class Posts extends Component {
class Posts extends Component {
    
    
    componentDidMount() {
        this.props.fetchPosts()
    }
    
    
    render() {

        // check post exist if so map
        
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

const mapStateToProps = state => ({
    posts: state.items,
    newPost: state.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts)
