import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { fetchPosts } from '../actions/postActions';
import Posts from '../components/Posts';
import PostForm from '../components/PostForm';


class PostsContainer extends React.Component {

    componentDidMount() {
        this.props.fetchPosts()
    }

    render() {
        
        return (
            <div>
                <PostForm />
                <Posts />
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
    posts: state.posts.items,
    newPost: state.posts.item
})

export default connect(mapStateToProps, { fetchPosts })(PostsContainer)
