import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Button } from 'react-bootstrap';


class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      tags: '',
      content: '',
    };

    this.onDeleteClick = this.onDeleteClick.bind(this);
  }


  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
  }

  componentWillReceiveProps(props) {
    if (props.post) {
      this.setState({
        title: props.post.title,
        tags: props.post.tags,
        content: props.post.content,
      });
    }
  }

  onDeleteClick(event) {
    this.props.deletePost(this.props.params.id);
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>Tags: {this.state.tags}</h2>
        <p> {this.state.content}</p>
        <Button bsStyle="danger" onClick={this.onDeleteClick}>Delete Post</Button>
      </div>
  );
  }
}


const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { fetchPost, deletePost })(Show);
