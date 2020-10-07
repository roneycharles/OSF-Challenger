import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';
import Users from '../pages/Users';

const Routes: React.FunctionComponent = () => (
  <Switch>
    <Route path="/" exact component={Users} />
    <Route path="users/user/:repositories" component={Dashboard} />
    <Route path="/repositories/:repository+" component={Repository} />
  </Switch>
);

export default Routes;
