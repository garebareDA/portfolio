import * as React from 'react';
import styled from 'styled-components';
import First from '../components/home/first';
import {Profile} from '../components/home/profile';

function Home() {
  return (
    <div>
      <First />
      <Profile />
    </div>
  )
}

export default Home;