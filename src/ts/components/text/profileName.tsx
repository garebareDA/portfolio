import * as React from 'react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";


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
        <TextProfile>
          <OneText>N</OneText><TowText>anme:田中大貴</TowText>
        </TextProfile>
        <TextProfile>
          <OneText>H</OneText><TowText>andle Name:ガレバレ</TowText>
        </TextProfile>
    </div>
  )
}

export default ProfileName;