import * as React from 'react';
import styled from 'styled-components';

import { FontSize } from '../../styleType/fontSize';

type URL = {
  text: Array<string>,
  url: Array<string>,
  size:FontSize,
}

const Center = styled.div({
  marginBottom:"24px",
  textAlign: "center"
});

const Link = styled.a<FontSize>((props) => ({
  fontSize:props.size
}),
  
  {
  border: "2px",
  paddingBottom: "0.375em",
  paddingTop: "0.375em",
  paddingLeft: "0.75em",
  paddingRight: "0.75em",
  borderStyle: "solid",
  borderColor: "white",
  borderRadius: "10px",
  color: "white",
  backgroundColor: "#003e80",
  marginTop:"0.375em",
  marginBottom:"0.375em",
  marginLeft:"8px",
  marginRight:"8px",
  fontSize: `${(props) => {props.size}}`,
  ":hover": {
    color: "#003e80",
    backgroundColor: "white",
  }
});

function LinkButtons(props: URL) {
  const items: any = [];
  for (let i = 0; i < props.text.length; i++) {
    items.push(< Link key={i} size={props.size.size} href={props.url[i]} target="blank "> {props.text[i]} </Link>);
  }

  return (
    <div>
      <Center>
        {items}
      </Center>
    </div>
  )
}

export default LinkButtons;