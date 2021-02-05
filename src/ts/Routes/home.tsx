import * as React from 'react';
import styled from 'styled-components';

import Icon from '../components/icon/icon';
import Logo from '../components/icon/logo';
import Profile from '../components/text/profile';

const Portfolio = styled.div({
  color:"white",
  fontSize:"25px",
});

const IconHome = styled.div({
  marginTop:"200px",
  padding:"10px",
  backgroundColor:"#ffffff",
  borderRadius:"50%",
});

const ProfileText = styled.div({
  textAlign:"center"
});

const InlineBlock = styled.div({
  display:"inline-block",
  textAlign:"left",
  verticalAlign:"middle",
})

const Left = styled.div({
  marginLeft:"50vw"
});

class Home extends React.Component {
  render(){
    return (
      <div>
        <Portfolio>Garebare Portfolio</Portfolio>
        <Left>  
          <InlineBlock>
            <ProfileText>
              <Profile/>
            </ProfileText>
          </InlineBlock>
          <InlineBlock>
            <IconHome>
              <Icon/>
            </IconHome>
          </InlineBlock>
        </Left>
        <Logo/>
      </div>
    )
  }
}

export default Home;