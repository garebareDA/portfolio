import * as React from 'react';
import styled from 'styled-components';

const Title = styled.div({
  marginBottom:"15px",
});

const Text = styled.div({
  fontSize:"25px",
  color:"white",
});

const MarginBttom = styled.div({
  marginBottom:"10px"
});

class ProfileEducation extends React.Component {
  render(){
    return (
      <div>
        <Title>
          <Text>|Education|</Text>
        </Title>
        <Text>2017-????</Text>
        <Text>2020-????</Text>
        <MarginBttom/>
      </div>
    )
  }
}

export default ProfileEducation;