import * as React from 'react';

import {Product, Contents} from '../components/products/product';
import LinkButtons from '../components/products/linkButton';
import {Text} from '../components/products/textStyled';
import { FontSize } from '../styleType/fontSize';

import OtherCassette from '../../images/cassette/OtherCassette.webp';
import TodoList from '../../images/otherImg/TodoList.webm'
;
function Details(props: FontSize) {
  return (
    <div>
      <Text size={props.size}>その他ものです。</Text>
    </div>
  );
}

function Other() {
  const [fontSize, setFontsize] = React.useState("25px");
  const [titleFontSize, SettitleFontSize] = React.useState("30px");
  return (
    <div>
      <Product title={"Other"} fontSize={fontSize} titleFontSize={titleFontSize} setFontsize={setFontsize} setTitleFontSize={SettitleFontSize} details={Details} cassette={{ url: OtherCassette }} />
      <Contents titleFontSize={{ size: titleFontSize }} title="erectron-memo" image={{ url: "" }} video={{ url: TodoList }}></Contents>
      <LinkButtons size={{size:fontSize}} url={["https://github.com/garebareDA/todo_list"]} text={["GitHub"]}/>
      <Text size={fontSize}>Flutterで作成しました。TODOリストです。</Text>
    </div>
  )
}

export default Other;