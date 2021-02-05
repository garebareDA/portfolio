import * as React from 'react';
import styled from 'styled-components';

import Icon from '../components/icon/icon';
import Logo from '../components/icon/logo';
import Profile from '../components/text/profile';
import Link from '../components/text/link';

const Portfolio = styled.div({
  color:"white",
  marginTop:"25px",
  fontSize:"30px",
  textAlign:"center",
});

const IconHome = styled.div({
  padding:"10px",
  backgroundColor:"#004085",
  borderRadius:"50%",
});

const InnerBorder = styled.div({
  padding:"20px",
  backgroundColor:"#002852",
  borderRadius:"50%",
});

const OuterBorder = styled.div({
  padding:"30px",
  backgroundColor:"#001b38",
  borderRadius:"50%",
});

const ProfileText = styled.div({
  left:"34%",
  textAlign:"center",
});

const InlineBlock = styled.div({
  display:"inline-block",
  textAlign:"left",
  verticalAlign:"middle",
})

const Left = styled.div({
  marginLeft:"45vw",
  marginTop:"150px",
  clear:'none',
});

class Home extends React.Component {
  render(){
    return (
      <div>
        <Portfolio>|Portfolio|</Portfolio>
        <Left>  
          <InlineBlock>
            <ProfileText>
              <Profile/>
            </ProfileText>
          </InlineBlock>
          <InlineBlock>
            <OuterBorder>
              <InnerBorder>
                <IconHome>
                  <Icon/>
                </IconHome>
              </InnerBorder>
            </OuterBorder>
          </InlineBlock>
        </Left>
        <InlineBlock>
          <Logo/>
        </InlineBlock>
        <InlineBlock>
          <Link/>
        </InlineBlock>
      </div>
    )
  }
}

export default Home;