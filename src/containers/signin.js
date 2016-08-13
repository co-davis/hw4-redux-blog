import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signinUser } from '../actions/index';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userPass: '',
    };

    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignInClick = this.onSignInClick.bind(this);
  }

  onUsernameChange(event) {
    console.log(event.target.value);
    this.setState({ userName: event.target.value });
  }

  onPasswordChange(event) {
    console.log(event.target.value);
    this.setState({ userPass: event.target.value });
  }

  onSignInClick(event) {
    this.props.signinUser({ email: this.state.userName, password: this.state.userPass });
  }

  render() {
    return (
      <div id="signin-form">
        <Form horizontal>
          <FormGroup bsSize="large" controlId="formhortizontalUsername">
            <ControlLabel>Username</ControlLabel>
            {' '}
            <FormControl onChange={this.onUsernameChange} value={this.state.userName} placeholder="Username" />
          </FormGroup>

          {' '}
          <FormGroup controlId="formhorizontalPassword">
            <ControlLabel>Password</ControlLabel>
            {' '}
            <FormControl onChange={this.onPasswordChange} value={this.state.userPass} placeholder="Password" />
          </FormGroup>

          {' '}
          <Button onClick={this.onSignInClick}>Sign In</Button>
        </Form>
      </div>
    );
  }
}


// react-redux glue -- outputs Container that know state in props
export default connect(null, { signinUser })(SignIn);
