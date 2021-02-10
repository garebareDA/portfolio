import * as React from 'react';
import styled from 'styled-components';
import { Size } from '../../styleType/size';
import { FontSize } from '../../styleType/fontSize';

type cassette = {
  url: string,
  name: string,
  size: Size,
  fontSize: FontSize
}

const Name = styled.div<FontSize>((props: FontSize) => ({
  fontSize:props.size,
}),
  {
    color: "white",
    textAlign: "center",
    fontSize:`${(props:FontSize) => {props.size}}`
  }
);

function Cassette(props: cassette) {
  return (
    <div>
        <Name size={props.fontSize.size}>{props.name}</Name>
        <img src={props.url} height={props.size.height} width={props.size.width} alt="cassette" />
    </div>
  )
}

export default Cassette;