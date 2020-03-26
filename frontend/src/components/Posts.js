import React, { Component } from 'react';
import Post from './Post';
import axios from 'axios';

export class Posts extends Component {
  state = {
    posts: [],
    isLoaded: false,
  }

  componentDidMount() {
    axios.get('wp-json/wp/v2/posts')
      .then(res => this.setState({
        posts: res.data,
        isLoaded: true,
      }))
      .catch(err => console.log(err));
  }

  render() {
    const { posts, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          {posts.map(post => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      );
    }
    return <h3>Loading...</h3>
    
  }
}

export default Posts;