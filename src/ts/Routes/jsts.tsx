import * as React from 'react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";

import { FontSize } from '../styleType/fontSize';

import JSTSCassette from '../../images/cassette/JSTSCassette.webp';

import Products from '../components/products/product';

import Title from '../components/products/title';

const fontSizePC = "35px";
const fontSizeMedia = "25px"

const titleFontSizePC = "60px";
const titleFontSizeMedia = "30px";

const Center = styled.div({
  textAlign: "center",
  marginTop: "30px"
});

const Text = styled.div((porps: FontSize) => ({
  fontSize: porps.size
}),
  {
    color: "white",
    fontSize: `${(props: FontSize) => { props.size }}`,
  });

const Space = styled.div({
  marginTop: "100px",
});

function Details(props: FontSize) {
  return (
    <div>
      <Text size={props.size}>ElectronやThree.js,Firebaseなどを使い作成したものです。</Text>
      <Text size={props.size}>フレームワークはVue.jsやReactをよく使います。</Text>
      <Text size={props.size}>TypeScriptを使ったものはサーバーサイドがGoのためそちらにあります。</Text>
    </div>
  );
}

function JSTS() {
  const [fontSize, setFontsize] = React.useState("25px");
  const [titleFontSize, setTitleFontSize] = React.useState("30px");

  React.useEffect(() => {
    if (window.parent.screen.width < 768) {
      setFontsize(fontSizeMedia);
      setTitleFontSize(titleFontSizeMedia);
    } else {
      setFontsize(fontSizePC);
      setTitleFontSize(titleFontSizePC);
    }
  });

  const handleMediaQueryChange = (matches: boolean) => {
    if (matches) {
      setFontsize(fontSizePC);
      setTitleFontSize(titleFontSizePC);
    }
  }

  const handleMediaQueryChangeMax = (matches: boolean) => {
    if (matches) {
      setFontsize(fontSizeMedia);
      setTitleFontSize(titleFontSizeMedia);
    }
  }

  return (
    <div>
      <Title title="JavaScript/TypeScript" titleFontSize={{ size: titleFontSize }} src={JSTSCassette}></Title>
      <MediaQuery query="(min-width: 768px)" onChange={handleMediaQueryChange}>
        <Center>
          <Details size={fontSize} />
        </Center>
      </MediaQuery>

      <MediaQuery query="(max-width: 767px) " onChange={handleMediaQueryChangeMax}>
        <Center>
          <Details size={fontSize} />
        </Center>
      </MediaQuery>
      <Space />
      <Products titleFontSize={{ size: titleFontSize }} title="erectron-memo"></Products>
    </div>
  )
}

export default JSTS;