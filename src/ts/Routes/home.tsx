import * as React from 'react';
import styled from 'styled-components';
import First from '../components/home/first';
import {Profile} from '../components/home/profile';
import Products from '../components/home/products';
import Famicom from '../components/home/famicom';

function Home() {
  return (
    <div>
      <First />
      <Profile />
      <Products />
    </div>
  )
}

export default Home;