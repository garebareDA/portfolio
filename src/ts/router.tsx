import * as React from 'react';
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';

import Home from './Routes/home';

function Router() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
    </Switch>
  );
}

export default withRouter(Router);