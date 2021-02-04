import * as React from 'react';
import {
  Route,
  Switch,
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';

import Home from './Routes/home';

interface Props extends RouteComponentProps<{}>{}

class Router extends React.Component<Props> {
  render() {
    return (
        <Switch>
          <Route path= '/' exact component={Home}/>
        </Switch>
    );
  }
}

export default withRouter(Router);