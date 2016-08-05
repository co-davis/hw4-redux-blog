import React from 'react';
import { Link } from 'react-router';
import { Col, Label, Thumbnail, Button } from 'react-bootstrap';


export default function BlogPost(props) {
  // random placeholder image using flickr
  let image = `http://loremflickr.com/400/200/${props.tags}`;

  return (
    <Col xs={6} md={4}>
      <Thumbnail src={image} alt="242x200">
        <span className="postTitle">
          <h3>{props.title} <Label>{props.tags}</Label></h3>
        </span>
        <p>
          <Link to={`posts/${props.postId}`}><Button bsStyle="primary"> Read Post </Button></Link>
        </p>
      </Thumbnail>
    </Col>
  );
}
