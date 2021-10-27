import * as React from 'react';
import styled from 'styled-components';
import First from '../components/home/first';
import {Profile} from '../components/home/profile';
import Products from '../components/home/products';
import Background from '../components/home/background';

function Home() {
  return (
    <div>
      <Background />
      <First />
      <Profile />
      <Products />
    </div>
  )
}

export default Home;