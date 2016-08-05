import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost, updatePost } from '../actions/index';
import { Button, Glyphicon, Label } from 'react-bootstrap';
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
    let image = `http://loremflickr.com/600/300/${this.state.tags}`;

    if (this.state.title === '') {
      return (
        <div>
          <i className="fa fa-refresh fa-spin fa-3x fa-fw"></i>
          <span className="sr-only">Loading...</span>
          <Button bsSize="large" onClick={this.onEditClick}><Glyphicon glyph="pencil" /> Edit Post</Button>
          <Button bsStyle="danger" onClick={this.onDeleteClick}><Glyphicon glyph="trash" /> Delete Post</Button>
        </div>
      );
    }
    if (this.state.isEditing === true) {
      return (
        <div>
          <div className="forminput">
          Title: &nbsp;
            <Textarea
              value={this.state.title}
              onChange={e => this.setState({ title: e.target.value })}
            />
          </div>
          <div className="forminput">
          Tags: &nbsp;
            <Textarea
              value={this.state.tags}
              onChange={e => this.setState({ tags: e.target.value })}
            />
          </div>

          <div className="forminput">
            Content: &nbsp;
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
        <div className="blogpost-container">
          <div className="blogpost-title">{this.state.title}</div>
          <h3><Label>{this.state.tags}</Label></h3>
          <img className="blogpost-image" src={image} alt={this.state.tags} />
          <div className="blogpost-content" dangerouslySetInnerHTML={{ __html: marked(this.state.content || '') }} />
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
