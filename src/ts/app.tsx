import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {
  HashRouter
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import font from '../../font/k8x12L.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family:'pixleFont';
    src: url(${font});
  }
  body {
    font-family: 'pixleFont', sans-serif;
  }
`;

import Router from './router';

const app = document.getElementById("app");
ReactDOM.render(
  <div>
    <GlobalStyles/>
    <HashRouter>
      <Router/>
    </HashRouter>
  </div>,
  app
);