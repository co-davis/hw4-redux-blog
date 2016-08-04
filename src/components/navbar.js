import React from 'react';
import { Link } from 'react-router';


const NavBar = () => {
  return (
    <div>
      <Link to="/">your site name</Link>
      <Link to="posts/new">new post</Link>
    </div>
  );
};


export default NavBar;
