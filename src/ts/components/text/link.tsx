import * as React from 'react';
import styled from 'styled-components';

const Links = styled.a({
  fontSize:"40px",
  color:"white",
});

class Link extends React.Component {
  render(){
    return (
      <div>
        <div>
          <Links href="https://github.com/garebareDA" target="blank">Github</Links>
        </div>
        <div>
          <Links href="https://twitter.com/garebare521" target="blank">Twitter</Links>
        </div>
        <div>
           <Links href="https://zenn.dev/garebare" target="blank">Zenn</Links>
        </div>
      </div>
    )
  }
}

export default Link;