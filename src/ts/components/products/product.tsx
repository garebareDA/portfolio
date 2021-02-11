import * as React from 'react';
import styled from 'styled-components';
import MediaQuery from "react-responsive";

import { FontSize } from '../../styleType/fontSize';

type Products = {
  title:string
  titleFontSize:FontSize
}

const Title = styled.div<FontSize>((props: FontSize) => ({
  fontSize: props.size
}),
  {
    color: "white",
    fontSize: `${(props: FontSize) => props.size}`
  });

const Center = styled.div({
  textAlign: "center"
})

function Product(props:Products) {
  return (
    <div>
      <Center>
        <Title size={props.titleFontSize.size}>|{props.title}|</Title>
      </Center>
    </div>
  )
}

export default Product;