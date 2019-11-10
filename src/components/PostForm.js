import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { connect } from 'react-redux';
import { createPost } from '../actions/postActions';


class Postform extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: ""
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
            body: this.state.body
        };

        this.props.createPost(post);
        this.props.history.push('/posts');
    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>           
                <form onSubmit={this.onSubmit}>
                <div className="ui form">
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