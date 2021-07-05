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
    marginTop: "48px",
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
  marginTop: "96px",
  marginBottom: "48px"
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
  marginTop:"96px"
})

function First(): JSX.Element {
  return (
    <div>
      <Portfolio size="60px">|Portfolio|</Portfolio>
      <PhoneIcon>
        <Icon border={true} />
      </PhoneIcon>
      <MediaCenter>
        <div>
          <InlineBlock>
            <Logo width={100} height={100} />
          </InlineBlock>
          <InlineBlock>
            <Profile textMargin="2px" oneSize="32px" twoSize="32px" />
          </InlineBlock>
        </div>
      </MediaCenter>
    </div>
  )
}

export default First;