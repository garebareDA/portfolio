import * as React from 'react';

import { Product, Contents } from '../components/products/product';
import LinkButtons from '../components/products/linkButton';
import { Text } from '../components/products/textStyled';
import { FontSize } from '../styleType/fontSize';

import UnityCassette from '../../images/cassette/UnityCassette.webp';
import MiniVtuber from '../../images/unityImg/MiniVtuber.webm';
import PixelVtuber from '../../images/unityImg/PixleVtuber.webm';
import FireBass from '../../images/unityImg/FireBass.webm';
import Grabi from '../../images/unityImg/Grabi.webm';
import PixelVtuberMulti from '../../images/unityImg/PixelVtuberMulti.webm';
import MinosMaze from '../../images/unityImg/MinosMaze.webp';
import MonsterHouse from '../../images/unityImg/MonsterHouse.webp';

function Details(props: FontSize) {
  return (
    <div>
      <Text size={props.size}>Unityでは主にゲームやVtuberなどを作成しています。</Text>
    </div>
  );
}

function Unity(){
  const [fontSize, setFontsize] = React.useState("25px");
  const [titleFontSize, SettitleFontSize] = React.useState("30px");
  return(
    <div>
      <Product title={"Unity"} fontSize={fontSize} titleFontSize={titleFontSize} setFontsize={setFontsize} setTitleFontSize={SettitleFontSize} details={Details} cassette={{ url: UnityCassette }} />
      <Contents titleFontSize={{ size: titleFontSize }} title="MiniVtuber" image={{ url: "" }} video={{ url: MiniVtuber }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/Vtuber"]} text={["GitHub"]} />
      <Text size={fontSize}>UnityとNode.jsで作成しました。</Text>
      <Text size={fontSize}>スマの傾きと連動し、首が動き、リップシンクで口が動きます。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="MiniVtuber" image={{ url: "" }} video={{ url: PixelVtuber }}></Contents>
      <Text size={fontSize}>Unityで作成しました。ドット絵のVtuberです。</Text>
      <Text size={fontSize}>マイク以外に必要なものなく、起動するだけで動いてくれます。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="fire-of-bass" image={{ url: "" }} video={{ url: FireBass }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/fire-of-bass", "https://garebareda.github.io/fire-of-bass/build/index.html"]} text={["GitHub", "GitHubPages"]} />
      <Text size={fontSize}>Unityで作成しました。クリックするとドット絵が演奏してくれます。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="action-nanika(grabi)" image={{ url: "" }} video={{ url: Grabi }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/action-nanika", "https://garebareda.github.io/action-nanika/WebGL/index.html"]} text={["GitHub", "GitHubPages"]} />
      <Text size={fontSize}>Unityで作成しました。アクションゲームです。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="PixelVtuberMulti" image={{ url: "" }} video={{ url: PixelVtuberMulti }}></Contents>
      <Text size={fontSize}>Unityで作成しました。</Text>
      <Text size={fontSize}>PixelVtuberのマルチプレイヤーバージョンです。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="MinosMaze" image={{ url: MinosMaze }} video={{ url: "" }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://garebare.itch.io/minosmaze",]} text={["itch.io"]} />
      <Text size={fontSize}>Unityを使い二人で共同開発したパズル対戦ゲームです。</Text>
      <Text size={fontSize}>現在itch.ioで配布中です。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="MonsterHouse" image={{ url: MonsterHouse }} video={{ url: "" }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://garebare.itch.io/monsterhouse",]} text={["itch.io"]} />
      <Text size={fontSize}>マンションでモンスターを育成する育成ゲームです。</Text>
      <Text size={fontSize}>現在itch.ioで配布中です。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="Roboterria(WIP)" image={{ url: MonsterHouse }} video={{ url: "" }}></Contents>
      <Text size={fontSize}>島でロボット使う工業ゲームです。</Text>
      <Text size={fontSize}>現在基礎的な部分が完成しています。</Text>
    </div>
  )
}

export default Unity;