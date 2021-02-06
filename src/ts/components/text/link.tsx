import * as React from 'react';
import styled from 'styled-components';
import { transform } from 'typescript';

const Links = styled.a({
  fontSize:"40px",
  color:"white",
});

const GithubLink = styled.div({
  position:"relative",
  left:"-150px",
  bottom:"30px",
  transform:"rotate(-51deg)"
});

const TwitterLink = styled.div({
  position:"relative",
  left:"-80px",
  bottom:"-15px",
  transform:"rotate(-40deg)"
});

const ZennLink = styled.div({
  position:"relative",
  left:"-25px",
  bottom:"-90px",
  transform:"rotate(-15deg)"
});

class Link extends React.Component {
  render(){
    return (
      <div>
        <GithubLink>
        <Links href="https://github.com/garebareDA" target="blank">Github</Links>
        </GithubLink>
        <TwitterLink>
          <Links href="https://twitter.com/garebare521" target="blank">Twitter</Links>
        </TwitterLink>
        <ZennLink>
           <Links href="https://zenn.dev/garebare" target="blank">Zenn</Links>
        </ZennLink>
      </div>
    )
  }
}

export default Link;