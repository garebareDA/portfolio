import * as React from 'react';
import styled from 'styled-components';

const Title = styled.div({
  marginBottom:"10px",
});

const Text = styled.div({
  fontSize:"30px",
  color:"white",
});

class ProfileEducation extends React.Component {
  render(){
    return (
      <div>
        <Title>
          <Text>|Education|</Text>
        </Title>
        <Text>2017-N高等学校</Text>
        <Text>2020-サイバー大学</Text>
      </div>
    )
  }
}

export default ProfileEducation;