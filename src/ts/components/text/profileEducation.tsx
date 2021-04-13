import * as React from 'react';
import styled from 'styled-components';

const Title = styled.div({
  marginBottom: "15px",
  fontSize:"50px",
  color: "white",
});

const Text = styled.div({
  fontSize: "35px",
  color: "white",
  marginLeft: "50px",
});

const MarginBttom = styled.div({
  marginBottom: "50px"
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