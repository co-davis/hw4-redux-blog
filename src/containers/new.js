import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from '../actions/index';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


class New extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      tags: '',
      content: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onCreateClick = this.onCreateClick.bind(this);
  }

  onTitleChange(event) {
    console.log(event.target.value);
    this.setState({ title: event.target.value });
  }

  onTagsChange(event) {
    console.log(event.target.value);
    this.setState({ tags: event.target.value });
  }

  onContentChange(event) {
    console.log(event.target.value);
    this.setState({ content: event.target.value });
  }

  onCreateClick(event) {
    this.props.createPost({ title: this.state.title, tags: this.state.tags, content: this.state.content });
  }

  render() {
    return (
      <div id="newpost-form">
        <Form horizontal>
          <FormGroup bsSize="large" controlId="formhortizontalTitle">
            <ControlLabel>Title</ControlLabel>
            {' '}
            <FormControl onChange={this.onTitleChange} value={this.state.title} placeholder="Post title" />
          </FormGroup>

          {' '}
          <FormGroup controlId="formhorizontalTags">
            <ControlLabel>Tags</ControlLabel>
            {' '}
            <FormControl onChange={this.onTagsChange} value={this.state.tags} placeholder="Post tags" />
          </FormGroup>

          {' '}
          <FormGroup controlId="formhorizontalContent">
            <ControlLabel>Content</ControlLabel>
            {' '}
            <FormControl onChange={this.onContentChange} value={this.state.content} placeholder="Post body" />
          </FormGroup>

          {' '}
          <Button onClick={this.onCreateClick}>Create Post</Button>
        </Form>
      </div>
    );
  }
}


const mapStateToProps = (state) => (
  {
    posts: state.posts.all,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { createPost })(New);
