import * as React from 'react';
import styled from 'styled-components';

import Icon from '../components/icon/icon';
import Logo from '../components/icon/logo';
import Profile from '../components/text/profile';

const Portfolio = styled.h3({
  color:"white",
});

const IconHome = styled.div({
  paddingTop:"200px",
  paddingRight:"150px",
  paddingLeft:"50px",
});

const ProfileText = styled.div({
  paddingTop:"200px",
  textAlign:"center"
});

const InlineBlock = styled.div({
  display:"inline-block",
  textAlign:"left",
  verticalAlign:"middle",
})

class Home extends React.Component {
  render(){
    return (
      <div>
        <Portfolio>Porfolio</Portfolio>
        <InlineBlock>
          <IconHome>
            <Icon/>
          </IconHome>
        </InlineBlock>
        <InlineBlock>
          <ProfileText>
            <Profile/>
          </ProfileText>
        </InlineBlock>
        <Logo/>
      </div>
    )
  }
}

export default Home;