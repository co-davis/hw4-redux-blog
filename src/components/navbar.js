import React from 'react';
import { Link } from 'react-router';
import { Button, Glyphicon, Navbar } from 'react-bootstrap';
import { signoutUser } from '../actions';
import { connect } from 'react-redux';


const NavBar = (props) => {
  if (props.authenticated) {
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
            <span id="newpost-form-button">
              <Link to="posts/new">
                <Button bsStyle="primary"><Glyphicon glyph="plus" /> New Post</Button>
              </Link>
            </span>
            <span id="signout-button">
              <Button bsStyle="default" onClick={props.signoutUser}><i className="fa fa-sign-out" aria-hidden="true"></i> Sign Out </Button>
            </span>
          </Navbar.Form>
        </Navbar>
      </span>
    );
  } else {
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
              <Button bsStyle="primary"><Glyphicon glyph="plus" /> New Post </Button>
            </Link>
            <span id="signin-button">
              <Link to="/signin">
                <Button bsStyle="default"><i className="fa fa-sign-in" aria-hidden="true"></i> Sign In </Button>
              </Link>
            </span>
            <span id="signup-button">
              <Link to="/signup">
                <Button bsStyle="default"><i className="fa fa-user-plus" aria-hidden="true"></i> Sign Up </Button>
              </Link>
            </span>
          </Navbar.Form>
        </Navbar>
      </span>
    );
  }
};


const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, { signoutUser })(NavBar);
