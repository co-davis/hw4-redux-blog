import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost, updatePost } from '../actions/index';
import { Button, Glyphicon } from 'react-bootstrap';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';


class Show extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      tags: '',
      content: '',
      oldContent: '',
      isEditing: false,
    };

    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.onEditClick = this.onEditClick.bind(this);
    this.onUpdateClick = this.onUpdateClick.bind(this);
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
        oldContent: props.post.content,
      });
    }
  }

  onDeleteClick(event) {
    this.props.deletePost(this.props.params.id);
  }

  onEditClick(event) {
    if (this.state.isEditing === false) {
      console.log('EDITING');
      this.setState({ isEditing: true });
    } else {
      // if cancel clicked, revert to old content
      this.setState({ isEditing: false, content: this.state.oldContent });
    }
  }

  onUpdateClick(event) {
    this.setState({ isEditing: false });
    console.log('UPDATE');
    this.props.updatePost(this.props.params.id, { title: this.state.title, tags: this.state.tags, content: this.state.content });
  }


  render() {
    if (this.state.isEditing === true) {
      return (
        <div>
          <div>
            <Textarea
              value={this.state.content}
              onChange={e => this.setState({ content: e.target.value })}
            />
          </div>
          <Button bsStyle="success" onClick={this.onUpdateClick}><Glyphicon glyph="ok" /> Save Changes</Button>
          <Button bsStyle="danger" onClick={this.onEditClick}><Glyphicon glyph="remove" /> Cancel</Button>
        </div>
    );
    } else {
      return (
        <div>
          <h1>{this.state.title}</h1>
          <h2>Tags: {this.state.tags}</h2>
          <div className="postContent" dangerouslySetInnerHTML={{ __html: marked(this.state.content || '') }} />
          <Button bsSize="large" onClick={this.onEditClick}><Glyphicon glyph="pencil" /> Edit Post</Button>
          <Button bsStyle="danger" onClick={this.onDeleteClick}><Glyphicon glyph="trash" /> Delete Post</Button>

        </div>
      );
    }
  }
}

const mapStateToProps = (state) => (
  {
    post: state.posts.post,
  }
);

// react-redux glue -- outputs Container that know state in props
export default connect(mapStateToProps, { fetchPost, deletePost, updatePost })(Show);
