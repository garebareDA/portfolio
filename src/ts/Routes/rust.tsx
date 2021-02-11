import * as React from 'react';

import {Product, Contents} from '../components/products/product';
import LinkButtons from '../components/products/linkButton';
import {Text} from '../components/products/textStyled';
import { FontSize } from '../styleType/fontSize';

import RustCassette from '../../images/cassette/RustCassette.webp';

function Details(props: FontSize) {
  return (
    <div>
      <Text size={props.size}>Rustは主にいろんな物を自作しています。</Text>
      <Text size={props.size}>プログラミング言語やGitなどを自作してきました。</Text>
    </div>
  );
}

function Rust() {
  const [fontSize, setFontsize] = React.useState("25px");
  const [titleFontSize, SettitleFontSize] = React.useState("30px");

  return(
    <div>
       <Product fontSize={fontSize} titleFontSize={titleFontSize} setFontsize={setFontsize} setTitleFontSize={SettitleFontSize} details={Details} cassette={{url:RustCassette}}/>
    </div>
  )
}

export default Rust;