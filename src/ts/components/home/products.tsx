import * as React from 'react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";

import Cassette from '../images/cassette';
import { Size } from '../../styleType/size';
import { FontSize } from '../../styleType/fontSize';

import JSTSCassette from '../../../images/cassette/JSTSCassette.webp';
import RustCassette from '../../../images/cassette/RustCassette.webp';
import GOCassette from '../../../images/cassette/GOCassette.webp';
import UnityCassette from '../../../images/cassette/UnityCassette.webp';
import PIXBLECassette from '../../../images/cassette/PIXBLECassette.webp';
import OtherCassette from '../../../images/cassette/OtherCassette.webp';

type IsBottom = {
  isBottom: boolean
}

const size: Size = {
  width: 448,
  height: 272,
}

const mediaSize: Size = {
  width: 238,
  height: 152,
}

const fontSize = "45px";
const mediaFontSize = "20px";

const ProductsText = styled.div<FontSize>((props: FontSize) => ({
  fontSize: props.size,
}),
  {
    marginTop: "300px",
    fontSize: `${(props: FontSize) => props.size}`,
    color: "white",
    marginBottom: "10px",
  }
);

const Inline = styled.div({
  display: "inline-block",
  margin: "15px"
});

const InlineOut = styled.div({
  display: "inline-block",
})

const Center = styled.div<IsBottom>((props: IsBottom) => ({
  marginBottom: props.isBottom ? "300px" : "0px"
}),
  {
    textAlign: "center",
    marginBottom: `${(props: IsBottom) => props.isBottom ? "300px" : "0px"}`
  }
);

const Click = styled.div<FontSize>((props: FontSize) =>
({
  fontSize: props.size
}),

  {
    fontSize: `${(props: FontSize) => props.size}`,
    marginTop: "5px",
    color: "white",
  }
);

function Products() {
  return (
    <div>
      <MediaQuery query="(min-width: 768px)">
        <Center isBottom={true}>
          <ProductsText size={"60px"}>
            |Products|
          <Click size="30px">
              見たいジャンルのカセットをクリックしてださい
          </Click>
          </ProductsText>
          <InlineOut>
            <Inline>
              <Cassette to="jsts" url={JSTSCassette} name="JavaScript/TypeScript" size={size} fontSize={{ size: fontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="go" url={GOCassette} name="Go" size={size} fontSize={{ size: fontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="rust" url={RustCassette} name="Rust" size={size} fontSize={{ size: fontSize }}></Cassette>
            </Inline>
          </InlineOut>
          <InlineOut>
            <Inline>
              <Cassette to="unity" url={UnityCassette} name="Unity" size={size} fontSize={{ size: fontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="pixble" url={PIXBLECassette} name="Pixel/Blender" size={size} fontSize={{ size: fontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="other" url={OtherCassette} name="Other" size={size} fontSize={{ size: fontSize }}></Cassette>
            </Inline>
          </InlineOut>
        </Center>
      </MediaQuery>

      <MediaQuery query="(max-width: 767px)">
        <Center isBottom={false}>
          <ProductsText size={"30px"}>
            |Products|
          <Click size="20px">
              見たいジャンルのカセットをクリックしてださい
          </Click>
          </ProductsText>
          <InlineOut>
            <Inline>
              <Cassette to="jsts" url={JSTSCassette} name="JavaScript/TypeScript" size={mediaSize} fontSize={{ size: mediaFontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="go" url={GOCassette} name="Go" size={mediaSize} fontSize={{ size: mediaFontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="rust" url={RustCassette} name="Rust" size={mediaSize} fontSize={{ size: mediaFontSize }}></Cassette>
            </Inline>
          </InlineOut>
          <InlineOut>
            <Inline>
              <Cassette to="unity" url={UnityCassette} name="Unity" size={mediaSize} fontSize={{ size: mediaFontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="pixble" url={PIXBLECassette} name="Pixel/Blender" size={mediaSize} fontSize={{ size: mediaFontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="other" url={OtherCassette} name="Other" size={mediaSize} fontSize={{ size: mediaFontSize }}></Cassette>
            </Inline>
          </InlineOut></Center>
      </MediaQuery>
    </div>
  )
}

export default Products;