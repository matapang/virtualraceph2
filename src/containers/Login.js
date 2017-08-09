import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUserInfo } from '../modules/user';
import AWS from 'aws-sdk';
import {
  FormGroup,
  FormControl,
  ControlLabel,
  Panel
} from 'react-bootstrap';
import {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser
} from 'amazon-cognito-identity-js';

import FacebookLogin from 'react-facebook-login';
import { withRouter } from 'react-router-dom';
import LoaderButton from '../components/LoaderButton';
import Logo from '../components/Logo';
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
      <div className="text-center" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }} >
        <p style={{
          height: "50%",
          backgroundImage: "url('https://virtualraceph.com/wp-content/uploads/2016/12/virtualraceph_frontpage_objectives-1-2560x550.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover"

        }}>
        </p>
        <div style={{ paddingTop: 30 }}>
          <img src="https://virtualraceph.com/wp-content/uploads/2017/05/VRPH_Long_Rectangle.png"
            style={{ width: 300 }}
          />
          <p className="lead">Run for a cause</p>
          <FacebookLogin
            appId={config.FB_APP_ID}
            autoLoad={true}
            fields="name,email,picture"
            callback={this.responseFacebook}
            cssClass="btn btn-primary"
            icon="fa-facebook"
          />
        </div>
        <br/>

        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-3">
              <Panel>
                Step 1
              </Panel>
            </div>
            <div className="col-xs-3">
              <Panel>
                Step 2
              </Panel>
            </div>
            <div className="col-xs-3">
              <Panel>
                Step 3
              </Panel>
            </div>
            <div className="col-xs-3">
              <Panel>
                Step 4
              </Panel>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(connect()(Login));
