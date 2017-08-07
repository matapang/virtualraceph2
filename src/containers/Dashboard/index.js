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

import { Tabs, Tab } from 'react-bootstrap';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppLayout>
        {/* Profole submit run goes here*/}

        <Profile />


        <Tabs defaultActiveKey={2}>
          <Tab eventKey={1} title="Event Races">
            {/*<CardRaces onClick={(id) => this.props.history.push(`/races/${id}`)} />*/}
            <EventRaces />
          </Tab>
          <Tab eventKey={2} title="Active Races">
            <ActiveRaces />
          </Tab>
          <Tab eventKey={3} title="Past Races">
            Past Races
          </Tab>

        </Tabs>
      </AppLayout>
    );
  }
}

export default withRouter(Dashboard);