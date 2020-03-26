import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import axios from 'axios';

export class Post extends Component {
  state = {
    author: '',
    isLoaded: false,
  }

  static propTypes = {
    post: PropTypes.object.isRequired,
  }

  componentDidMount() {
    const authorId = this.props.post.author;
    const getAuthor = axios.get(`/wp-json/wp/v2/users/${authorId}`);
    Promise.all([getAuthor]).then(res => {
      this.setState({
        author: res[0].data.name,
        isLoaded: true,
      });
    });
  }

  render() {
    const { id, title, excerpt } = this.props.post;
    const { author, isLoaded } = this.state;
    if (isLoaded) {
      return (
        <div>
          <h2 style={{ marginBottom: '0' }}>{ title.rendered }</h2>
          <small>Created by <strong>{ author }</strong></small>
          <div dangerouslySetInnerHTML={{ __html: excerpt.rendered}}></div>
          <Link to={`/post/${id}`}>Read more</Link>
          <hr />
        </div>
      );
    }
    return null;
  }
}

export default Post;