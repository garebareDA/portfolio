import * as React from 'react';
import styled from 'styled-components';

const Title = styled.div({
  marginBottom: "16px",
  fontSize:"56px",
  color: "white",
});

const Text = styled.div({
  fontSize: "32px",
  color: "white",
  marginLeft: "56px",
});

const MarginBttom = styled.div({
  marginBottom: "56px"
});

function ProfileEducation() {
  return (
    <div>
      <Title>
        Education
      </Title>
      <Text>2017-??????</Text>
      <Text>2020-??????</Text>
      <MarginBttom />
    </div>
  )
}

export default ProfileEducation;