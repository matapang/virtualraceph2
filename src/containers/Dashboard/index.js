/*
 *
 * Dashboard
 *
 */

import React, { PropTypes } from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import AppLayout from '../../components/AppLayout';
import Button from '../../components/Button';
import CardProfile from '../../components/CardProfile';
import CardRaces from '../../components/CardRaces';
import ActiveRaces from '../ActiveRaces';
import Logo from '../../components/Logo';
import Profile from '../Profile';
import EventRaces from '../EventsRaces';

import { Tabs, Tab, Alert } from 'react-bootstrap';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppLayout>
        {/* Profole submit run goes here*/}

        <Profile />


        <Tabs defaultActiveKey={1}>
          <Tab eventKey={1} title="Active Races">
            <ActiveRaces />
          </Tab>

          <Tab eventKey={2} title="Past Races">
            <br/>
            <Alert>You have no log history</Alert>
          </Tab>
          <Tab eventKey={3} title="Event Races">
            {/*<CardRaces onClick={(id) => this.props.history.push(`/races/${id}`)} />*/}
            <EventRaces onClick={(id) => this.props.history.push(`/races/${id}`)} />
          </Tab>


        </Tabs>
      </AppLayout>
    );
  }
}

export default withRouter(Dashboard);