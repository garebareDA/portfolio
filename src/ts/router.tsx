import * as React from 'react';
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';

import Home from './Routes/home';
import JSTS from './Routes/jsts';
import Go from './Routes/go';
import Rust from './Routes/rust';

function Router() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path="/jsts" exact component={JSTS} />
      <Route path="/go" exact component={Go} />
      <Route path="/rust" exact component={Rust} />
      
    </Switch>
  );
}

export default withRouter(Router);