import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Size } from '../../styleType/size';
import { FontSize } from '../../styleType/fontSize';

import {Path} from '../../styleType/path';



type cassette = {
  image: Path,
  name: string,
  to:string,
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

const Img = styled.img({
  transitionDuration:"0.3s",
  transform: "scale(1)",
  marginTop:"5px",

  ":hover":{
    transform: "scale(1.1)",
    transitionDuration: "0.3s",
  }
});

function Cassette(props: cassette) {
  return (
    <div>
        <Name size={props.fontSize.size}>{props.name}</Name>
        <Link to={props.to}>
          <Img src={props.image.url} height={props.size.height} width={props.size.width} alt="cassette" />
        </Link>
    </div>
  )
}

export default Cassette;