import React from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types'
// import { fetchPosts } from '../actions/postActions';
import Posts from '../components/Posts';
import PostForm from '../components/PostForm';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import News from '../components/News';
import Nav from '../components/Nav';
import '../App.css'
import Homepage from  '../components/Homepage';





export default class PostsContainer extends React.Component {

    // componentDidMount() {
    //     this.props.fetchPosts()
    // }

    render() {
        
        return (
            <div>
                <Router>
                    <Nav />
                    <Switch>
                        <Route path='/' exact component={Homepage}/>
                        <Route path='/news' exact component={News}/>
                        <Route path='/posts/new' component={PostForm}/>
                        <Route path='/posts' exact component={Posts}/>
                    </Switch>
                </Router>
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



