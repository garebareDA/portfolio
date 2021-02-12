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
import Unity from './Routes/unity'
import PIXBLE from './Routes/pixble';
import Other from './Routes/other';
import NotFound from './Routes/notFound';

function Router() {
  return (
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path="/jsts" exact component={JSTS} />
      <Route path="/go" exact component={Go} />
      <Route path="/unity" exact component={Unity} />
      <Route path="/rust" exact component={Rust} />
      <Route path="/pixble" exact component={PIXBLE} />
      <Route path="/other" exact component={Other} />
      <Route component={NotFound}/>
    </Switch>
  );
}

export default withRouter(Router);