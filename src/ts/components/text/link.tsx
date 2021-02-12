import * as React from 'react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";
import { FontSize } from "../../styleType/fontSize";

const Links = styled.a<FontSize>((props: FontSize) => ({
  fontSize: props.size
}),
  {
    //40px
    fontSize: `${(props: FontSize) => props.size}`,
    color: "white",
  }
);

const MediaLink = styled.div({
  textAlign:"center",
  marginTop:"10px",
})

const GithubLink = styled.div({
  position: "relative",
  left: "-150px",
  bottom: "30px",
  transform: "rotate(-51deg)"
});

const TwitterLink = styled.div({
  position: "relative",
  left: "-80px",
  bottom: "-15px",
  transform: "rotate(-40deg)"
});

const ZennLink = styled.div({
  position: "relative",
  left: "-25px",
  bottom: "-90px",
  transform: "rotate(-15deg)"
});

function Link(props: FontSize) {
  return (
    <div>
      <MediaQuery query="(min-width: 768px)">
        <GithubLink>
          <Links size={props.size} href="https://github.com/garebareDA" target="blank">Github</Links>
        </GithubLink>
        <TwitterLink>
          <Links size={props.size} href="https://twitter.com/garebare521" target="blank">Twitter</Links>
        </TwitterLink>
        <ZennLink>
          <Links size={props.size} href="https://zenn.dev/garebare" target="blank">Zenn</Links>
        </ZennLink>
      </MediaQuery>

      <MediaQuery query="(max-width: 767px)">
        <MediaLink>
          <Links size={props.size} href="https://github.com/garebareDA" target="blank">Github</Links>
        </MediaLink>
        <MediaLink>
          <Links size={props.size} href="https://twitter.com/garebare521" target="blank">Twitter</Links>
        </MediaLink>
        <MediaLink>
          <Links size={props.size} href="https://zenn.dev/garebare" target="blank">Zenn</Links>
        </MediaLink>
      </MediaQuery>

    </div>
  )
}

export default Link;