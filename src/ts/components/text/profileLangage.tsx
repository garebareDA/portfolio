import * as React from 'react';
import styled from 'styled-components';

const Title = styled.div({
  marginBottom: "15px",
  fontSize:"50px",
  color: "white"
});

const Text = styled.div({
  fontSize: "35px",
  color: "white",
  marginLeft: "50px",
});

function ProfileLangage() {
  return (
    <div>
      <Title>
        Programing Language
      </Title>

      <Text>HTML</Text>
      <Text>CSS</Text>
      <Text>JavaScript</Text>
      <Text>TypeScript</Text>
      <Text>(Node.js)</Text>
      <Text>Python</Text>
      <Text>Go</Text>
      <Text>Rust</Text>
      <Text>Unity C#</Text>

      
    </div>
  )
}

export default ProfileLangage;