import * as React from 'react';
import styled from 'styled-components';
import Profile from '../home/profile';

const Title = styled.div({
  marginBottom:"10px",
});

const Text = styled.div({
  fontSize:"30px",
  color:"white",
});

class ProfileLangage extends React.Component {
  render(){
    return (
      <div>
        <Title>
          <Text>|Programing Langage Skill|</Text>
        </Title>
        <Text>HTML</Text>
        <Text>CSS</Text>
        <Text>JavaScript</Text>
        <Text>TypeScript</Text>
        <Text>(Node.js)</Text>
        <Text>Python</Text>
        <Text>Go</Text>
        <Text>Rust</Text>
      </div>
    )
  }
}

export default ProfileLangage;