import * as React from 'react';
import styled from 'styled-components';

const Title = styled.div({
  marginBottom: "15px",
});

const Text = styled.div({
  fontSize: "35px",
  color: "white",
});

function ProfileLangage() {
  return (
    <div>
      <Title>
        <Text>|Programing Langage|</Text>
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

export default ProfileLangage;