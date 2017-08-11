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
import RaceLogs from '../RaceLogs';
import { Tabs, Tab, Row, Col } from 'react-bootstrap';

export class Dashboard2 extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <AppLayout>

                <Profile />
                <RaceLogs match={{ params: { id: 'spartan-challenge' } }} />

            </AppLayout>
        );
    }
}

export default withRouter(Dashboard2);