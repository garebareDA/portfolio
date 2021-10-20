import * as React from 'react';
import styled from 'styled-components';

import {Path} from '../../styleType/path';

const Videos = styled.video({
  maxWidth:"800px",
  marginTop:"24px",
  marginBottom:"24px",
  width: "100%",
  height: "100%",
  borderRadius: "30px",
});

function Video(props:Path)
{
  return(
    <div>
      <Videos 
        controls
        webkit-playsinline
        muted
        loop
        autoPlay
        src={props.url}/>
    </div>
  )
}

export default Video;