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
  width: 480,
  height: 296,
}

const mediaSize: Size = {
  width: 238,
  height: 152,
}

const fontSize = "35px";
const mediaFontSize = "35px";

const ProductsText = styled.div<FontSize>((props: FontSize) => ({
  fontSize: props.size,
}),
  {
    marginTop: "304px",
    fontSize: `${(props: FontSize) => props.size}`,
    color: "white",
    marginBottom: "8px",
  }
);

const Inline = styled.div({
  display: "inline-block",
  margin: "16px"
});

const InlineOut = styled.div({
  display: "inline-block",
})

const Center = styled.div<IsBottom>((props: IsBottom) => ({
  marginBottom: props.isBottom ? "96px" : "0px"
}),
  {
    textAlign: "center",
    marginBottom: `${(props: IsBottom) => props.isBottom ? "304px" : "0px"}`
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
      <Center isBottom={true}>
        <ProductsText size={"56px"}>
          |Products|
          <Click size="32px">
            見たいジャンルのカセットをクリックしてださい
          </Click>
        </ProductsText>
        <MediaQuery query="(min-width: 768px)">
          <InlineOut>
            <Inline>
              <Cassette to="jsts" image={{ url: JSTSCassette }} name="JavaScript/TypeScript" size={size} fontSize={{ size: fontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="go" image={{ url: GOCassette }} name="Go" size={size} fontSize={{ size: fontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="rust" image={{ url: RustCassette }} name="Rust" size={size} fontSize={{ size: fontSize }}></Cassette>
            </Inline>
          </InlineOut>
          <InlineOut>
            <Inline>
              <Cassette to="unity" image={{ url: UnityCassette }} name="Unity" size={size} fontSize={{ size: fontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="pixble" image={{ url: PIXBLECassette }} name="Pixel/Blender" size={size} fontSize={{ size: fontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="other" image={{ url: OtherCassette }} name="Other" size={size} fontSize={{ size: fontSize }}></Cassette>
            </Inline>
          </InlineOut>
        </MediaQuery>

        <MediaQuery query="(max-width: 767px)">
          <InlineOut>
            <Inline>
              <Cassette to="jsts" image={{ url: JSTSCassette }} name="JavaScript/TypeScript" size={mediaSize} fontSize={{ size: mediaFontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="go" image={{ url: GOCassette }} name="Go" size={mediaSize} fontSize={{ size: mediaFontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="rust" image={{ url: RustCassette }} name="Rust" size={mediaSize} fontSize={{ size: mediaFontSize }}></Cassette>
            </Inline>
          </InlineOut>
          <InlineOut>
            <Inline>
              <Cassette to="unity" image={{ url: UnityCassette }} name="Unity" size={mediaSize} fontSize={{ size: mediaFontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="pixble" image={{ url: PIXBLECassette }} name="Pixel/Blender" size={mediaSize} fontSize={{ size: mediaFontSize }}></Cassette>
            </Inline>
            <Inline>
              <Cassette to="other" image={{ url: OtherCassette }} name="Other" size={mediaSize} fontSize={{ size: mediaFontSize }}></Cassette>
            </Inline>
          </InlineOut>
        </MediaQuery>
      </Center>
    </div>
  )
}

export default Products;