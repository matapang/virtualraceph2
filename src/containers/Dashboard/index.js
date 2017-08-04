/*
 *
 * Dashboard
 *
 */

import React, { PropTypes } from 'react';
import {withRouter} from 'react-router-dom';
import styled from 'styled-components';
import AppLayout from '../../components/AppLayout';
import Button from '../../components/Button';
import CardProfile from '../../components/CardProfile';
import CardRaces from '../../components/CardRaces';
import ActiveRaces from '../ActiveRaces';
import Logo from '../../components/Logo';
import Profile from '../Profile';
import { Tabs } from 'antd';

export class Dashboard extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <AppLayout>
        {/* Profole submit run goes here*/}
        
        <Profile />
        <div>
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Event Races" key="1">
              <CardRaces onClick={(id) => this.props.history.push(`/races/${id}`)} />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Active Races" key="2">
              <ActiveRaces />
            </Tabs.TabPane>
            <Tabs.TabPane tab="Past Races" key="3">Past Races

              <Logo/>
            </Tabs.TabPane>
          </Tabs>
        </div>
      </AppLayout>
    );
  }
}

export default withRouter(Dashboard);