import React, { Component } from 'react';
import { connect } from 'react-redux';
import Reveal from 'react-reveal';
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
import AboutUs from '../components/AboutUs';
import Footer from '../components/Footer';
import ImageLandingPage from '../components/ImageLandingPage';
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

  componentDidMount() {
    window.sr.reveal('#about', {duration:2000});
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
      <div className="" >
        
        <div className="text-center">
        
          <br/>
          
          <br/>
          
          <br/>
     
         
          <br/>
          
          <br/>
          
          <br/>
          
          <br/>
          
          <br/>
          
          <br/>
          
          <br/>
          <br/>
          <br/>
          <br/>
          
          <br/>
          <br/>
          <br/>
          <br/>
          
          <br/>
          <br/>
          <br/>
          <br/>
      
         
          
          <br/>
          <br/>
          <br/>
          <br/>
          
          <br/>
          <br/>
          <br/>

          <div id="about">
          <AboutUs/>
          </div>
        
          <p className="lead">Run for a cause</p>
          <FacebookLogin
            appId={config.FB_APP_ID}
            autoLoad={false}
            fields="name,email,picture"
            callback={this.responseFacebook}
            cssClass="btn btn-primary"
            icon="fa-facebook"
          />
        </div>
        <br />

        <Footer />
      </div>
    );
  }
}

export default withRouter(connect()(Login));
