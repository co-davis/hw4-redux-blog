import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions/index';
import { Form, FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap';


class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      userName: '',
      userPass: '',
    };
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onUsernameChange = this.onUsernameChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSignUpClick = this.onSignUpClick.bind(this);
  }

  onEmailChange(event) {
    console.log(event.target.value);
    this.setState({ email: event.target.value });
  }

  onUsernameChange(event) {
    console.log(event.target.value);
    this.setState({ userName: event.target.value });
  }

  onPasswordChange(event) {
    console.log(event.target.value);
    this.setState({ userPass: event.target.value });
  }

  onSignUpClick(event) {
    this.props.signupUser({ email: this.state.email, username: this.state.userName, password: this.state.userPass });
  }

  render() {
    return (
      <div id="signin-form">
        <Form horizontal>

          <FormGroup bsSize="large" controlId="formhortizontalEmail">
            <ControlLabel>Email</ControlLabel>
            {' '}
            <FormControl onChange={this.onEmailChange} value={this.state.email} placeholder="Email" />
          </FormGroup>

          {' '}
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
          <Button onClick={this.onSignUpClick}>Sign In</Button>
        </Form>
      </div>
    );
  }
}


// react-redux glue -- outputs Container that know state in props
export default connect(null, { signupUser })(SignUp);
