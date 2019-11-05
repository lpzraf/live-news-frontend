import React from 'react';
import { connect } from 'react-redux';
import { postActions } from './actions/postActions';


class App extends React.Component {

  componentDidMount() {
    this.props.postActions({type: 'POST_ACTIONS', payload: {name: 'Checking'}})
  }

  render() {
  return (
      <div className="App">
          App
      </div>
    );
  }
}

export default connect(null, { postActions })(App);

