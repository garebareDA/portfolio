import * as React from 'react';
import styled from 'styled-components';

import ProfileEducation from '../text/profileEducation';
import ProfileLangage from '../text/profileLangage';
import SmartPhone from '../images/smartPhone';

const Center = styled.div({
  textAlign:"center",
  position:"relative",
  top:"-650px",
});

const Margin = styled.div({
  marginTop:"300px",
  height:"1000px",
});

class Profile extends React.Component {
  render(){
    return (
      <div>
        <Margin>
          <SmartPhone/>
          <Center>
            <ProfileEducation />
            <ProfileLangage />
          </Center>
        </Margin>
      </div>
    )
  }
}

export default Profile;