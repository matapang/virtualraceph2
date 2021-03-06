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
import Races from './containers/Races';
import RaceLogs from './containers/RaceLogs';

export default ({ childProps }) => (
  <Switch>
    <AppliedRoute path="/" exact component={Home} props={childProps} />
    <UnauthenticatedRoute path="/login" exact component={Login} props={childProps} />
    <UnauthenticatedRoute path="/signup" exact component={Signup} props={childProps} />
    <AuthenticatedRoute path="/notes/new" exact component={NewNote} props={childProps} />
    <AuthenticatedRoute path="/notes/:id" exact component={Notes} props={childProps} />
    <AuthenticatedRoute path="/submit-run/:id" exact component={SubmitRun} props={childProps} />
    <AuthenticatedRoute path="/feeds" exact component={Feeds} props={childProps} />
    <AuthenticatedRoute path="/dashboard" exact component={Dashboard} props={childProps} />
   
    <AuthenticatedRoute path="/races" exact component={Races} props={childProps} />
    <AuthenticatedRoute path="/races/:id" exact component={Races} props={childProps} />
    <AuthenticatedRoute path="/races/:id/logs" exact component={RaceLogs} props={childProps} />

    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>
);
