import React, { Component } from 'react';
import {connect} from 'react-redux';
import {updateUserInfo} from './modules/user';
import {
  withRouter,
  Link
} from 'react-router-dom';
import {
  Nav,
  NavItem,
  Navbar
} from 'react-bootstrap';
import AWS from 'aws-sdk';
import { CognitoUserPool, } from 'amazon-cognito-identity-js';
import AppNav from './components/AppNav';
import ContactBar from './components/ContactBar';
import Routes from './Routes';
import RouteNavItem from './components/RouteNavItem';
import config from './config.js';
import theme from './theme';
import './App.css';
import { ThemeProvider } from 'styled-components';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      userToken: null,
      isLoadingUserToken: true
    };
  }

  async componentDidMount() {
    const currentUser = this.getCurrentUser();
    if (currentUser === null) {
      this.setState({ isLoadingUserToken: false });
      return;
    }
    this.props.dispatch(updateUserInfo(currentUser.username));


    this.setState({
      userName: currentUser.username
    });

    try {
      const userToken = await this.getUserToken(currentUser);
      this.updateUserToken(userToken);
    }
    catch (e) {
      alert(e);
    }

    this.setState({ isLoadingUserToken: false });
  }

  updateUserToken = (userToken) => {
    this.setState({
      userToken: userToken
    });
  }

  getCurrentUser() {
    const userPool = new CognitoUserPool({
      UserPoolId: config.cognito.USER_POOL_ID,
      ClientId: config.cognito.APP_CLIENT_ID
    });

    return userPool.getCurrentUser();
  }

  getUserToken(currentUser) {
    return new Promise((resolve, reject) => {
      currentUser.getSession(function (err, session) {
        if (err) {
          reject(err);
          return;
        }
        resolve(session.getIdToken().getJwtToken());
      });
    });
  }

  handleLogout = (event) => {
    const currentUser = this.getCurrentUser();

    if (currentUser !== null) {
      currentUser.signOut();
    }

    if (AWS.config.credentials) {
      AWS.config.credentials.clearCachedId();
    }

    this.updateUserToken(null);

    this.props.history.push('/login');
  }

  render() {
    const childProps = {
      userToken: this.state.userToken,
      updateUserToken: this.updateUserToken,
      userName:this.state.userName
    };    
    return !this.state.isLoadingUserToken
      &&
      (
        <ThemeProvider theme={theme}>
          <div >
            <AppNav userToken={this.state.userToken} history={this.props.history} handleLogout={this.handleLogout} />
            <div style={{ maxWidth: 992, margin: 'auto' }}>
              <Routes childProps={childProps} />
            </div>
          </div>
        </ThemeProvider>
      );
  }

}


export default withRouter(connect(null, null)(App));
