import * as React from 'react';
import styled from 'styled-components';

import ProfileEducation from '../text/profileEducation';
import ProfileLangage from '../text/profileLangage';

const Center = styled.div({
  textAlign:"center",

});

const Margin = styled.div({
  marginTop:"300px",
  marginBottom:"300px",
});

const LangageMargin = styled.div({
  marginTop:"20px",
});

class Profile extends React.Component {
  render(){
    return (
      <div>
        <Center>
          <Margin>
          <ProfileEducation />
          <LangageMargin>
            <ProfileLangage />
          </LangageMargin>
          </Margin>
        </Center>
      </div>
    )
  }
}

export default Profile;