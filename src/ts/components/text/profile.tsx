import * as React from 'react';
import styled from 'styled-components';

const Profile = styled.div({
  textAlign:"left",
});

const TextProfile = styled.div({
  textDecoration:"underline",
  color:"white",
  fontSize:"25px"
});

class Icon extends React.Component {
  render(){
    return (
      <div>
        <Profile>
          <TextProfile>Name:田中 大貴</TextProfile>
          <TextProfile>Handle Name:ガレバレ</TextProfile>
        </Profile>
      </div>
    )
  }
}

export default Icon;