import * as React from 'react';
import styled from 'styled-components';

import ProfileEducation from '../text/profileEducation';
import ProfileLangage from '../text/profileLangage';
import ProfileParticipant from '../text/profileParticipant';
import Links from '../text/link'

const Margin = styled.div({
  marginTop: "200px",
  marginBottom: "700px",
  height: "800px",
  marginLeft: "auto",
  marginRight: "auto",
  width: "20em",
});

function Profile() {
  return (
    <div>
      <Margin>
          <Links/>
          <ProfileEducation />
          <ProfileLangage />
          <ProfileParticipant />
      </Margin>
    </div>
  )
}
export { Profile };