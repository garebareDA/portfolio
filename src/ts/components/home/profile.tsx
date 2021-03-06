import * as React from 'react';
import styled from 'styled-components';

import ProfileEducation from '../text/profileEducation';
import ProfileLangage from '../text/profileLangage';
import Links from '../text/link'

const Margin = styled.div({
  marginTop: "200px",
  marginBottom:"200px",
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
      </Margin>
    </div>
  )
}
export { Profile };