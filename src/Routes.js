import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppliedRoute from './components/AppliedRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute';
import UnauthenticatedRoute from './components/UnauthenticatedRoute';

import Home from './containers/Home';
import Notes from './containers/Notes';
import Login from './containers/Login';
import Signup from './containers/Signup';
import NewNote from './containers/NewNote';
import NotFound from './containers/NotFound';
import SubmitRun from './containers/SubmitRun';
import Feeds from './containers/Feeds';
import Dashboard from './containers/Dashboard';
import JoinRace from './containers/JoinRace'
import Races from './containers/Races';
import SpartanChallenge from './containers/Races/pages/SpartanChallenge';

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute path="/notes/new" exact component={NewNote} props={childProps} />
    <AuthenticatedRoute path="/notes/:id" exact component={Notes} props={childProps} />
    <UnauthenticatedRoute path="/submit-run" exact component={SubmitRun} props={childProps} />
    <UnauthenticatedRoute path="/feeds" exact component={Feeds} props={childProps} />
    <UnauthenticatedRoute path="/dashboard" exact component={Dashboard} props={childProps} />
    <UnauthenticatedRoute path="/join-race/:id" exact component={JoinRace} props={childProps} />

    <UnauthenticatedRoute path="/races" exact component={Races} props={childProps} />
    <UnauthenticatedRoute path="/races/:id" exact component={Races} props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>
);
