import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import AppLayout from '../components/AppLayout';
import Dashboard from './Dashboard';
import {
  PageHeader,
  ListGroup,
  ListGroupItem,
} from 'react-bootstrap';
import { invokeApig } from '../libs/awsLib';
import Login from './Login';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      notes: [],
    };
  }

  render() {
    
    return (
      <div className="Home">
        { this.props.userToken === null
          ? <Login updateUserToken={this.props.updateUserToken} />
          : <Dashboard /> }
      </div>
    );
  }
}

export default withRouter(Home);
