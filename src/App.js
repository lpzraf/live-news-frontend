import React from 'react';
import PostsContainer from './containers/PostsContainer';

class App extends React.Component {
 
  render() {
  return (
      <div className="ui container">
          <PostsContainer />
      </div>
    );
  }
}

export default App;

