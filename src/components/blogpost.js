import React from 'react';
import { Link } from 'react-router';

export default function BlogPost(props) {
  return (
    <Link to={`posts/${props.postId}`}>
      <div>
        {props.title}
      </div>
    </Link>
  );
}
