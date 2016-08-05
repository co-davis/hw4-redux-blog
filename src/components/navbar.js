import React from 'react';
import { Link } from 'react-router';
import { Button, Glyphicon, Navbar } from 'react-bootstrap';


const NavBar = () => {
  return (
    <span className="navBar">
      <Navbar inverse>
        <Navbar.Header pullLeft>
          <Navbar.Brand>
            <span className="nav-logo">
              <Link to="/"> MY BL
                <i className="fa fa-circle-o-notch  fa-spin"></i>
                G
              </Link>
            </span>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Form pullRight>
          <Link to="posts/new">
            <Button bsStyle="primary"><Glyphicon glyph="plus" /> New Post</Button>
          </Link>
        </Navbar.Form>
      </Navbar>
    </span>
  );
};


export default NavBar;
