import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions';
import BlogPost from '../components/blogpost';


// example class based component (smart component)
class Index extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
      <div>
        {this.props.posts.map(post => {
          return (
            <BlogPost title={post.title} postId={post.id} tags={post.tags} key={post.id} />
            );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

export default connect(mapStateToProps, actions)(Index);
