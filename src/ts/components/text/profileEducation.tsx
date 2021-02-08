import * as React from 'react';
import styled from 'styled-components';

const Title = styled.div({
  marginBottom: "15px",
});

const Text = styled.div({
  fontSize: "25px",
  color: "white",
});

const MarginBttom = styled.div({
  marginBottom: "10px"
});

function ProfileEducation() {
  return (
    <div>
      <Title>
        <Text>|Education|</Text>
      </Title>
      <Text>2017-N高等学校</Text>
      <Text>2020-サイバー大学</Text>
      <MarginBttom />
    </div>
  )
}

export default ProfileEducation;