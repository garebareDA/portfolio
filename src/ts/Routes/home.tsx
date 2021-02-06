import * as React from 'react';
import styled from 'styled-components';
import First from '../components/home/first';
import Profile from '../components/home/profile';

class Home extends React.Component {
  render(){
    return (
      <div>
        <First/>
        <Profile/>
      </div>
    )
  }
}

export default Home;