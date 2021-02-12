import * as React from 'react';
import styled from 'styled-components';

import { Product } from '../components/products/product';
import { Text } from '../components/products/textStyled';
import { FontSize } from '../styleType/fontSize';

import Image from '../components/images/image';

import PIXBLECassette from '../../images/cassette/PIXBLECassette.webp'

import Crane from '../../images/blenderImg/Crane.webp';
import Desk from '../../images/blenderImg/Desk.webp';
import Garebare from '../../images/blenderImg/Garebare.webp';
import NIT from '../../images/blenderImg/NIT.webp';
import Oni from '../../images/blenderImg/Oni.webp';
import Piano from '../../images/blenderImg/Piano.webp';
import WarWolf from '../../images/blenderImg/WarWolf.webp';

import Airship from '../../images/magicaImg/Airship.webp';
import bin from '../../images/magicaImg/bin.webp';
import Bridge from '../../images/magicaImg/Bridge.webp';
import Controler from '../../images/magicaImg/Controler.webp';
import Dice from '../../images/magicaImg/Dice.webp';
import Train from '../../images/magicaImg/Train.webp';

import Ambllera from '../../images/pixelImg/ambllera.webp';
import Animation from '../../images/pixelImg/animation.webp';
import Bloom from '../../images/pixelImg/bloom.webp';
import Coffee from '../../images/pixelImg/coffee.webp';
import Lookup from '../../images/pixelImg/lookup.webp';
import Radio from '../../images/pixelImg/radio.webp';
import Radio3 from '../../images/pixelImg/radio3.webp';
import Radio5 from '../../images/pixelImg/radio5.webp';
import Radio8 from '../../images/pixelImg/radio8.webp';
import Riceball from '../../images/pixelImg/riceball.webp';
import Tree from '../../images/pixelImg/tree.webp';

const Center = styled.div({
  textAlign: "center",
});

function Details(props: FontSize) {
  return (
    <div>
      <Text size={props.size}>ドット絵や3DCGなどの作品です。</Text>
      <Text size={props.size}>ドット絵はAceprite、3DCGはBlender、ボクセルアートはMagicaVoxelで作成しています。</Text>
    </div>
  );
}

function PixBle() {
  const [fontSize, setFontsize] = React.useState("25px");
  const [titleFontSize, SettitleFontSize] = React.useState("30px");
  return (
    <div>
      <Product title={"PIX/BLE"} fontSize={fontSize} titleFontSize={titleFontSize} setFontsize={setFontsize} setTitleFontSize={SettitleFontSize} details={Details} cassette={{ url: PIXBLECassette }} />
      <Center>
        <Image url={Crane} />
        <Image url={Desk} />
        <Image url={Garebare} />
        <Image url={NIT} />
        <Image url={Oni} />
        <Image url={Piano} />
        <Image url={WarWolf} />
        <Image url={Airship} />
        <Image url={bin} />
        <Image url={Bridge} />
        <Image url={Controler} />
        <Image url={Dice} />
        <Image url={Train} />
        <Image url={Ambllera} />
        <Image url={Animation} />
        <Image url={Bloom} />
        <Image url={Coffee} />
        <Image url={Radio} />
        <Image url={Radio3} />
        <Image url={Radio5} />
        <Image url={Radio8} />
        <Image url={Riceball} />
        <Image url={Tree} />
      </Center>
    </div>
  )
}

export default PixBle;