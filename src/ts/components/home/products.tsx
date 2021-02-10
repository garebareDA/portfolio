import * as React from 'react';
import styled from 'styled-components';

import Cassette from '../images/cassette';
import { Size } from '../../styleType/size';
import {FontSize} from '../../styleType/fontSize';

import JSTSCassette from '../../../images/cassette/JSTSCassette.webp';
import RustCassette from '../../../images/cassette/RustCassette.webp';
import GOCassette from '../../../images/cassette/GOCassette.webp';
import UnityCassette from '../../../images/cassette/UnityCassette.webp';
import PIXBLECassette from '../../../images/cassette/PIXBLECassette.webp';
import OtherCassette from '../../../images/cassette/OtherCassette.webp';

const size: Size = {
  width: 448,
  height: 272,
}

const ProductsText = styled.div<FontSize>((props:FontSize) => ({
  fontSize:props.size,
}),
  {
    marginTop:"300px",
    fontSize:`${(props:FontSize) => props.size}`,
    color:"white",
    marginBottom:"10px",
  }
);

const Inline = styled.div({
  display: "inline-block",
  margin: "15px"
});

const InlineOut = styled.div({
  display: "inline-block",
})

const Center = styled.div({
  textAlign: "center",
  marginBottom: "300px"
});

const Click = styled.div({
  fontSize:"30px",
  marginTop:"5px",
  color:"white",
});

function Products() {
  return (
    <div>
      <Center>
        <ProductsText size={"60px"}>
          |Products|
          <Click>
            見たいジャンルのカセットをクリックしてださい
          </Click>
        </ProductsText>
        
        <InlineOut>
          <Inline>
            <Cassette to="jsts" url={JSTSCassette} name="JavaScript/TypeScript" size={size} fontSize={{ size: "45px" }}></Cassette>
          </Inline>
          <Inline>
            <Cassette to="go" url={GOCassette} name="Go" size={size} fontSize={{ size: "45px" }}></Cassette>
          </Inline>
          <Inline>
            <Cassette to="rust" url={RustCassette} name="Rust" size={size} fontSize={{ size: "45px" }}></Cassette>
          </Inline>
        </InlineOut>
        <InlineOut>
          <Inline>
            <Cassette to="unity" url={UnityCassette} name="Unity" size={size} fontSize={{ size: "45px" }}></Cassette>
          </Inline>
          <Inline>
            <Cassette to="pixble" url={PIXBLECassette} name="Pixel/Blender" size={size} fontSize={{ size: "45px" }}></Cassette>
          </Inline>
          <Inline>
            <Cassette to="other" url={OtherCassette} name="Other" size={size} fontSize={{ size: "45px" }}></Cassette>
          </Inline>
        </InlineOut>
      </Center>
    </div>
  )
}

export default Products;