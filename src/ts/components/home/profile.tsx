import * as React from 'react';
import styled from 'styled-components';

import ProfileEducation from '../text/profileEducation';
import ProfileLangage from '../text/profileLangage';
import Links from '../text/link'

const Margin = styled.div({
  marginTop: "200px",
  marginBottom:"200px",
  height: "1000px",
  marginLeft: "auto",
  marginRight: "auto",
  width: "30em",
});

function Profile() {
  return (
    <div>
      <Margin>
          <Links/>
          <ProfileEducation />
          <ProfileLangage />
      </Margin>
    </div>
  )
}
export { Profile };