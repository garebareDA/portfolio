import * as React from 'react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";

import { FontSize } from '../../styleType/fontSize';
import { Size } from '../../styleType/size';
import {Path} from '../../styleType/path';

type ProductsTitle = {
  title: string,
  titleFontSize:FontSize,
  image: Path,
}

type Cassette = {
  size: Size,
  marginTop: string
}

const size: Size = {
  width: 448,
  height: 272,
}

const mediaSize: Size = {
  width: 238,
  height: 152,
}

const Center = styled.div({
  textAlign: "center"
});

const TitleText = styled.div<FontSize>((props: FontSize) => ({
  fontSize: props.size
}),
  {
    marginTop: "25px",
    fontSize: `${(props: FontSize) => { props.size }}`,
    color: "white",
  }
);

const Cassette = styled.img((props: Cassette) =>
({
  width: props.size.width,
  height: props.size.height,
  marginTop: props.marginTop,
}),
  {
    marginTop: `${(props: Cassette) => props.marginTop}`,
    width: `${(props: Cassette) => props.size.width}`,
    height: `${(props: Cassette) => props.size.height}`
  }
);

function Title(props: ProductsTitle) {
  return (
    <div>
      <Center>
        <TitleText size={props.titleFontSize.size}>|{props.title}|</TitleText>
        <MediaQuery query="(min-width: 768px)">
          <Center>
            <Cassette marginTop="150px" size={size} src={props.image.url} />
          </Center>
        </MediaQuery>
        <MediaQuery query="(max-width: 767px)">
          <Cassette marginTop="150px" size={mediaSize} src={props.image.url} />
        </MediaQuery>
      </Center>
    </div>
  )
}

export default Title;