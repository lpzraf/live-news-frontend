import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types'
// import { fetchPosts } from '../actions/postActions';
import Posts from '../components/Posts';
import PostForm from '../components/PostForm';
import {Route, Switch} from 'react-router-dom'

import News from '../components/News';



export default class PostsContainer extends React.Component {

    // componentDidMount() {
    //     this.props.fetchPosts()
    // }

    render() {
        
        return (
            <div>
                <Switch>
                <Route path='/news' component={News}/>

                    <Route path='/posts/new' component={PostForm}/>
                    <Route path='/posts' component={Posts}/>
                <PostForm />
                <br />
                <br />
                <Posts />
                </Switch>
            </div>
        )
    }
}



// Posts.propTypes = {
//     fetchPosts: PropTypes.func.isRequired,
//     posts: PropTypes.array.isRequired,
//     newPost: PropTypes.object
// }

// const mapStateToProps = state => ({
//     posts: state.items,
//     newPost: state.item
// })

// export default connect(mapStateToProps, { fetchPosts })(PostsContainer)



