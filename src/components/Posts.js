import React, { Component } from 'react';
import { fetchPosts } from '../actions/postActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Posts extends Component {

    state= {
        votes: {}
    }
    
    
    componentDidMount() {
        this.props.fetchPosts()
    }

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.newPost) {
          this.props.posts.unshift(nextProps.newPost);
        }
      }

    handleClick = (id) => () => {
        this.setState((prevState) => ({ 
           [id]: prevState[id] ? prevState[id] + 1 : 1, 
        }));
    }
    
    render() {
        

        const postItems = this.props.posts.map((post, index) => (

            <div key={post.id} className="ui three stackable cards">
                <div className="ui card">
                    <div className="content">
                        <div className="header">{post.title}</div>
                        <div className="meta"> {post.author}</div>
                        <div className="description">
                        <p>{post.body}</p>
                        </div>
                    </div>
                    <div className="extra content">
                        <i className="check icon"></i>
                        {this.state[post.id] || 0} Votes
                    </div>
                    <button className="ui button" 
                        type="submit" 
                        onClick={this.handleClick(post.id)}>Add a Vote</button>
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
