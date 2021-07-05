import * as React from 'react';
import styled from 'styled-components';

const Title = styled.div({
  marginBottom: "16px",
  fontSize:"56px",
  color: "white"
});

const Text = styled.div({
  fontSize: "32px",
  color: "white",
  marginLeft: "56px",
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