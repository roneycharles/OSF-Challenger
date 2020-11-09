import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Repository from '../pages/Repository';
import Users from '../pages/Users';

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Users} />
    <Route path="/repositories/:userParam" component={Repository} />
  </Switch>
);

export default Routes;
