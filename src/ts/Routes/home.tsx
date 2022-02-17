import * as React from 'react';
import styled from 'styled-components';
import First from '../components/home/first';
import {Profile} from '../components/home/profile';
import Products from '../components/home/products';
import Background from '../components/home/background';

const Content = styled.div`
    position:relative;
    overflow:hidden;
`

function Home() {
  return (
    <Content>
      <Background />
      <First />
      <Profile />
      <Products />
    </Content>
  )
}

export default Home;