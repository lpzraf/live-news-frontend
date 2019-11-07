import React, { Component } from 'react';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';




// export default class Posts extends Component {
class Posts extends Component {
    
    
    componentDidMount() {
        this.props.fetchPosts()
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
          this.props.posts.unshift(nextProps.newPost);
        }
      }
    
    
    
    render() {

        // check post exist if so map
        
        const postItems = this.props.posts.map(post => (
            <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            </div>
        ))
        
        return (
            <div>
                <h1 className='ui relaxed divided list'>Posts</h1>
                {postItems}
            </div>
        )
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

const mapStateToProps = state => ({
    posts: state.items,
    newPost: state.item
})

export default connect(mapStateToProps, { fetchPosts })(Posts)
