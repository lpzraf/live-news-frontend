import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';


class Postform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            author: ""        
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault();

        const post = {
            title: this.state.title,
            body: this.state.body,
            author: this.state.author
        };

        this.props.createPost(post);
        this.props.history.push('/posts');
    }

    render() {
        return (
            <div>
                <br />

                <h2 className="ui header">
                <i className="edit icon"></i>
                <div className="content">
                    Feeling creative?
                    <div className="sub header">Add a new post!</div>
                </div>
                </h2> 
                <br />          
                <form onSubmit={this.onSubmit}>
                <div className="ui form">
                <div className="field">
                            <label>Author</label>
                            <input rows="2" type="text" name="author" onChange={this.onChange} value={this.state.author} />
                    </div>
                    
                    <div className="field">
                            <label>Title</label>
                            <input rows="2" type="text" name="title" onChange={this.onChange} value={this.state.title} />
                    </div>
                    <div className="field">
                        <label>Body</label>
                        <textarea name="body" onChange={this.onChange} value={this.state.body} />
                    </div>
                </div>
                <br />
                <button className="ui button" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

Postform.propTypes = {
    createPost: PropTypes.func.isRequired
}

export default connect(null, { createPost })(Postform);