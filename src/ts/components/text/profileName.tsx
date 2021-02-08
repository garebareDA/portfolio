import * as React from 'react';
import styled from 'styled-components';

const Profile = styled.div({
  textAlign: "left",
});

const TextProfile = styled.div({
  color: "white",
  margin: "20px",
  whiteSpace: "nowrap",
});

const OneText = styled.span({
  fontSize: "55px"
});

const TowText = styled.span({
  fontSize: "30px"
});

function ProfileName() {
  return (
    <div>
      <Profile>
        <TextProfile>
          <OneText>N</OneText><TowText>anme:田中大貴</TowText>
        </TextProfile>
        <TextProfile>
          <OneText>H</OneText><TowText>andle Name:ガレバレ</TowText>
        </TextProfile>
      </Profile>
    </div>
  )
}

export default ProfileName;