import * as React from 'react';
import styled from 'styled-components';

import { FontSize } from "../../styleType/fontSize";

import Icon from '../images/icon';
import Logo from '../images/logo';
import Profile from '../text/profileName';

const Portfolio = styled.div<FontSize>((props: FontSize) => ({
  fontSize: props.size,
}),
  {
    color: "white",
    marginTop: "50px",
    fontSize: `${(props: FontSize) => props.size}`,
    textAlign: "center",
  }
);

const InlineBlock = styled.div({
  display: "inline-block",
  textAlign: "left",
  verticalAlign: "middle",
})


const PhoneIcon = styled.div({
  textAlign: "center",
  marginTop: "100px",
  marginBottom: "50px"
});

const MediaCenter = styled.div({
  textAlign: "center",
})

const ProfileText = styled.div({
  marginLeft: "auto",
  marginRight: "auto",
  width: "15em",
  color:"white",
  fontSize:"25px",
  marginTop:"100px"
})

function First(): JSX.Element {
  return (
    <div>
      <Portfolio size="60px">|Portfolio |</Portfolio>
      <PhoneIcon>
        <Icon border={true} />
      </PhoneIcon>
      <MediaCenter>
        <div>
          <InlineBlock>
            <Logo width={100} height={100} />
          </InlineBlock>
          <InlineBlock>
            <Profile textMargin="2px" oneSize="35px" twoSize="35px" />
          </InlineBlock>
        </div>
      </MediaCenter>
    </div>
  )
}

export default First;