import * as React from 'react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";

import Title from './title';
import Image from '../images/image';
import Video from '../images/video';

import { FontSize } from '../../styleType/fontSize';
import { Path } from '../../styleType/path';

type Contents = {
  title: string,
  titleFontSize: FontSize,
  image: Path,
  video: Path,
}

const Space = styled.div({
  marginTop: "124px",
});

const Titles = styled.div<FontSize>((props: FontSize) => ({
  fontSize: props.size
}),
  {
    color: "white",
    fontSize: `${(props: FontSize) => props.size}`
  });

const CenterText = styled.div({
  textAlign: "center"
})

function Contents(props: Contents) {
  let contents;
  if (props.image.url !== "") {
    contents = <Image url={props.image.url}/>
  }

  if (props.video.url !== "") {
    contents = <Video url={props.video.url}/>;
  }

  return (
    <div>
      <Space />
      <CenterText>
        <Titles size={props.titleFontSize.size}>|{props.title}|</Titles>
        {contents}
      </CenterText>
    </div>
  )
}

const fontSizePC = "32px";
const fontSizeMedia = "24px"
const titleFontSizePC = "64px";
const titleFontSizeMedia = "32px";

const Center = styled.div({
  textAlign: "center",
  marginTop: "32px"
});

type Products = {
  title:string,
  cassette:Path,
  details:(props: FontSize) => JSX.Element,
  fontSize:string,
  titleFontSize:string,
  setFontsize:React.Dispatch<React.SetStateAction<string>>,
  setTitleFontSize:React.Dispatch<React.SetStateAction<string>>,
}

function Product(props:Products) {
  const Detali = props.details;
  React.useEffect(() => {
    if (window.parent.screen.width < 768) {
      props.setFontsize(fontSizeMedia);
      props.setTitleFontSize(titleFontSizeMedia);
    } else {
      props.setFontsize(fontSizePC);
      props.setTitleFontSize(titleFontSizePC);
    }
  });

  const handleMediaQueryChange = (matches: boolean) => {
    if (matches) {
      props.setFontsize(fontSizePC);
      props.setTitleFontSize(titleFontSizePC);
    }
  }

  const handleMediaQueryChangeMax = (matches: boolean) => {
    if (matches) {
      props.setFontsize(fontSizeMedia);
      props.setTitleFontSize(titleFontSizeMedia);
    }
  }

  return (
    <div>
      <Title title={props.title} titleFontSize={{ size: props.titleFontSize }} image={props.cassette}></Title>
      <MediaQuery query="(min-width: 768px)" onChange={handleMediaQueryChange}>
        <Center>
          <Detali size={props.fontSize}/>
        </Center>
      </MediaQuery>

      <MediaQuery query="(max-width: 767px) " onChange={handleMediaQueryChangeMax}>
        <Center>
        <Detali size={props.fontSize}/>
        </Center>
      </MediaQuery>
    </div>
  )
}

export {Product, Contents};