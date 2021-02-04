import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  HashRouter
} from 'react-router-dom';

import Router from './router';

const app = document.getElementById("app");
ReactDOM.render(
  <div>
    <HashRouter>
      <Router/>
    </HashRouter>
  </div>,
  app
);