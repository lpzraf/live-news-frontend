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
        
        const postItems = this.props.posts.map((post, index) => (
        
            <div key={index} className="green card">
                <div className="ui card">
                    <div className="content">
                        <i className="right floated like icon"></i>
                        <i className="right floated star icon"></i>
                        <div className="header">{post.title}</div>
                        <div className="description">
                        <p>{post.body}</p>
                        </div>
                    </div>
                    <div className="extra content">
                        <span className="left floated like">
                        <i className="like icon"></i>
                        Like
                        </span>
                        <span className="right floated star">
                        <i className="star icon"></i>
                        Favorite
                        </span>
                    </div>
                </div>
            </div>
        ))

        
        return (
            <div>
                <h2 className="ui header">
                    <i className="pencil alternate icon"></i>
                <div className="content">
                    Article Feed
                    <div className="sub header">Read them all!</div>
                </div>
                </h2>
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
