import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  HashRouter
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Scroll from './scroll';
import font from '../../font/x12y16pxMaruMonica.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family:'pixleFont';
    src: url(${font});
  }
  body {
    font-family: 'pixleFont', sans-serif;
    background-color:#003e80;
  }
`;

import Router from './router';

const app = document.getElementById("app");
ReactDOM.render(
  <div>
    <GlobalStyles/>
    <HashRouter>
      <Scroll/>
      <Router/>
    </HashRouter>
  </div>,
  app
);