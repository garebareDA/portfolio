import * as React from 'react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";

import { FontSize } from "../../styleType/fontSize";

import Icon from '../images/icon';
import Logo from '../images/logo';
import Profile from '../text/profileName';
import Link from '../text/link';
import Arrow from '../images/arrow';

const Portfolio = styled.div<FontSize>((props: FontSize) => ({
  fontSize:props.size,
}),
  {
    color: "white",
    marginTop: "25px",
    fontSize: `${(props:FontSize) => props.size}`,
    textAlign: "center",
  }
);

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
  marginTop: "300px",
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
  marginTop: "70px",
});

const MediaCenter = styled.div({
  textAlign: "center",
})

function First(): JSX.Element {
  return (
    <div>
      <MediaQuery query="(min-width: 768px)">
        <Portfolio size="60px">|Portfolio|</Portfolio>
        <Left>
          <InlineBlock>
            <ProfileText>
              <Profile textMargin="20px" oneSize="70px" twoSize="50px" />
            </ProfileText>
          </InlineBlock>
          <InlineBlock>
            <OuterBorder>
              <InnerBorder>
                <IconHome>
                  <Icon border={false} />
                </IconHome>
              </InnerBorder>
            </OuterBorder>
          </InlineBlock>
        </Left>
        <Links>
          <InlineBlock>
            <Logo width={300} height={300} />
          </InlineBlock>
          <InlineBlockLink>
            <Link size={"51px"} />
          </InlineBlockLink>
        </Links>
        <Arrows>
          <Arrow />
        </Arrows>
      </MediaQuery>

      <MediaQuery query="(max-width: 767px)">
        <Portfolio size="30px">|Portfolio|</Portfolio>
        <PhoneIcon>
          <Icon border={true} />
        </PhoneIcon>
        <MediaCenter>
          <div>
            <InlineBlock>
              <Logo width={100} height={100} />
            </InlineBlock>
            <InlineBlock>
              <Profile textMargin="2px" oneSize="25px" twoSize="20px" />
            </InlineBlock>
          </div>
        </MediaCenter>
        <Portfolio size="30px">|Link|</Portfolio>
        <Link size={"25px"} />
      </MediaQuery>
    </div>
  )
}

export default First;