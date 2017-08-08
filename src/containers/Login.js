import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserInfo } from '../modules/user';
import AWS from 'aws-sdk';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Well
} from 'react-bootstrap';
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from 'amazon-cognito-identity-js';

import FacebookLogin from 'react-facebook-login';
import { withRouter } from 'react-router-dom';
import LoaderButton from '../components/LoaderButton';
import config from '../config.js';
import './Login.css';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      username: '',
      password: '',
    };
  }

  validateForm() {
    return this.state.username.length > 0
      && this.state.password.length > 0;
  }

  login(username, password) {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });
    const authenticationData = {
      Username: username,
      Password: password
    };

    const user = new CognitoUser({ Username: username, Pool: userPool });
    const authenticationDetails = new AuthenticationDetails(authenticationData);

    return new Promise((resolve, reject) => (
      user.authenticateUser(authenticationDetails, {
        onSuccess: (result) => resolve(result.getIdToken().getJwtToken()),
        onFailure: (err) => reject(err),
      })
    ));
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();

    this.setState({ isLoading: true });

    try {
      const userToken = await this.login(this.state.username, this.state.password);
      this.props.updateUserToken(userToken);
    }
    catch (e) {
      alert(e);
      this.setState({ isLoading: false });
    }
  }

  responseFacebook = (response) => {
    this.props.dispatch(updateUserInfo(response.email, response.name, response.picture.data.url))
    this.props.updateUserToken(response.accessToken);
  }

  render() {
    return (
      <div className="Login text-center" >
          <h1>Virtual Race PHILIPPINES</h1>
          <h2>Run for a Cause</h2>
          <FacebookLogin
            appId={config.FB_APP_ID}
            autoLoad={true}
            fields="name,email,picture"
            callback={this.responseFacebook}
            cssClass="btn btn-primary"
            icon="fa-facebook"
          />
        {/*

        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.username}
              onChange={this.handleChange} />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password" />
          </FormGroup>
          <LoaderButton
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
            isLoading={this.state.isLoading}
            text="Login"
            loadingText="Logging in…" />
        </form>*/}
      </div>
    );
  }
}

export default withRouter(connect()(Login));
