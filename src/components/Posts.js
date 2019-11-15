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
    
    //   Capitalize(str){
    //     return str.charAt(0).toUpperCase() + str.slice(1);
    //     }
    
    render() {
        

        const postItems = this.props.posts.map((post, index) => (
            // <div key={index}>
            //     <h2>{index}. {post.title}</h2>
            //     <h4>- {post.author}</h4>
            //     <p>{post.body}</p>
            //     <br />
            // </div>

            <div class="ui three stackable cards">
            <div key={index} className="ui card">
            <div class="content">
                <div className="header">{post.title}</div>
                <div className="meta"> {post.author}</div>
                <div className="description">
                <p>{post.body}</p>
                </div>
            </div>
            <div className="extra content">
                <i className="check icon"></i>
                121 Votes
            </div>
            </div>
            </div>
        
        ))

        
        return (
            <div>
                <br />
                <h2 className="ui header">
                    <i className="pencil alternate icon"></i>
                <div className="content">
                    Blog Feed
                    <div className="sub header"><a href="/posts/new">Create New Post!</a></div>
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
