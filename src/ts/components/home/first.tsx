import * as React from 'react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";

import Icon from '../images/icon';
import Logo from '../images/logo';
import Profile from '../text/profileName';
import Link from '../text/link';
import Arrow from '../images/arrow';

const Portfolio = styled.div({
  color: "white",
  marginTop: "25px",
  fontSize: "30px",
  textAlign: "center",
});

const IconHome = styled.div({
  padding: "10px",
  backgroundColor: "#004085",
  borderRadius: "50%",
});

const InnerBorder = styled.div({
  padding: "20px",
  backgroundColor: "#002852",
  borderRadius: "50%",
});

const OuterBorder = styled.div({
  padding: "30px",
  backgroundColor: "#001b38",
  borderRadius: "50%",
});

const ProfileText = styled.div({
  left: "34%",
  textAlign: "center",
});

const InlineBlock = styled.div({
  display: "inline-block",
  textAlign: "left",
  verticalAlign: "middle",
})

const InlineBlockLink = styled.div({
  display: "inline-block",
  textAlign: "left",
  verticalAlign: "top",
})

const Left = styled.div({
  whiteSpace: "nowrap",
  textAlign: "center",
  marginTop: "250px",
  marginBottom: "50px",
  clear: 'none',
});

const Links = styled.div({
  whiteSpace: "nowrap",
  textAlign: "center",
  marginRight: "50vw",
});

const Arrows = styled.div({
  textAlign: "center",
});

const PhoneIcon = styled.div({
  textAlign: "center",
  marginTop:"70px",
});

function First(): JSX.Element {
  return (
    <div>
      <Portfolio>|Portfolio|</Portfolio>
      <MediaQuery query="(min-width: 768px)">
        <Left>
          <InlineBlock>
            <ProfileText>
              <Profile />
            </ProfileText>
          </InlineBlock>
          <InlineBlock>
            <OuterBorder>
              <InnerBorder>
                <IconHome>
                  <Icon />
                </IconHome>
              </InnerBorder>
            </OuterBorder>
          </InlineBlock>
        </Left>
        <Links>
        <InlineBlock>
          <Logo width={300} height={300}/>
        </InlineBlock>
        <InlineBlockLink>
          <Link />
        </InlineBlockLink>
      </Links>
      </MediaQuery>

      <MediaQuery query="(max-width: 767px)">
        <PhoneIcon>
          <Icon />
          <Profile />
        </PhoneIcon>
        <Logo width={150} height={150}/>
      </MediaQuery>
      <Arrows>
        <Arrow />
      </Arrows>
    </div>
  )
}

export default First;