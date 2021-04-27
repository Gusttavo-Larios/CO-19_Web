import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Welcome from '../pages/Welcome/Welcome'
import Home from '../pages/Home/Home'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Welcome} />
      <Route path="/home" component={Home} />
    </Switch>
  );
}