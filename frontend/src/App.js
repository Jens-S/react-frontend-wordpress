import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Posts from './components/Posts';
import PostPage from './components/PostPage';
import './App.css';

class App extends Component {
  render () {
    return (
      <Router>
      <Fragment>
        <Route exact path="/" component={Posts} />
        <Route exact path="/post/:id" component={PostPage} />
      </Fragment>  
      </Router>
    );
  }
}

export default App;
