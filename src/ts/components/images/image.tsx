import * as React from 'react';
import styled from 'styled-components';

import {Path} from '../../styleType/path';

const Images = styled.img({
  maxWidth:"1000px",
  marginTop:"20px",
  marginBottom:"20px",
  width: "100%",
  height: "100%",
  imageRendering:"pixelated",
});

function Image(props:Path)
{
  return(
    <div>
      <Images src={props.url}/>
    </div>
  )
}

export default Image;