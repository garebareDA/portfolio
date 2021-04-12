import * as React from 'react';
import styled from 'styled-components';
import { FontSize } from "../../styleType/fontSize";

const Links = styled.a<FontSize>((props: FontSize) => ({
  fontSize: props.size
}),
  {
    //40px
    fontSize: `${(props: FontSize) => props.size}`,
    color: "white",
    ":hover": {
      color: "gray"
    }
  }
);

const MediaLink = styled.div({
  marginTop: "10px",
  marginLeft: "50px",
})

const Title = styled.div({
  marginBottom: "15px",
  fontSize:"50px",
  color: "white",
});

const MarginBttom = styled.div({
  marginBottom: "50px"
});

function Link() {
  return (
    <div>
      <Title>
        |Links|
      </Title>
      <MediaLink>
        <Links size={"35px"} href="https://github.com/garebareDA" target="blank">Github</Links>
      </MediaLink>
      <MediaLink>
        <Links size={"35px"} href="https://twitter.com/garebare521" target="blank">Twitter</Links>
      </MediaLink>
      <MediaLink>
        <Links size={"35px"} href="https://zenn.dev/garebare" target="blank">Zenn</Links>
      </MediaLink>
      <MediaLink>
        <Links size={"35px"} href="https://qiita.com/DA_garebare" target="blank">Qiita</Links>
      </MediaLink>
      <MediaLink>
        <Links size={"35px"} href="https://speakerdeck.com/garebareda" target="blank">Speaker Deck</Links>
      </MediaLink>
      <MediaLink>
        <Links size={"35px"} href="https://www.youtube.com/channel/UCswsDUmDhE96PxKj8hN4rcA" target="blank">Youtube</Links>
      </MediaLink>
      <MarginBttom />
    </div>
  )
}

export default Link;