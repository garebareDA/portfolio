import * as React from 'react';

import { Product, Contents } from '../components/products/product';
import LinkButtons from '../components/products/linkButton';
import { Text } from '../components/products/textStyled';
import { FontSize } from '../styleType/fontSize';

import JSTSCassette from '../../images/cassette/JSTSCassette.webp';
import ElectronMemo from '../../images/javascriptImg/ElectronMemo.webp';
import DesktopAnimation from '../../images/javascriptImg/DesktopAnimation.webp';
import NitdeDance from '../../images/javascriptImg/NITdeDance.webp'
import Marker from '../../images/javascriptImg/marker.webp';
import CoC from '../../images/javascriptImg/CoC.webp';
import LineBot from '../../images/javascriptImg/LINEBot.webp';
import Bord from '../../images/javascriptImg/Bord.webm';
import Smork from '../../images/javascriptImg/Smork.webm';
import Geact from '../../images/javascriptImg/Geact.webm';
import styled from 'styled-components';

function Details(props: FontSize) {
  return (
    <div>
      <Text size={props.size}>ElectronやThree.js,Firebaseなどを使い作成したものです。</Text>
      <Text size={props.size}>フレームワークはVue.jsやReactをよく使います。</Text>
      <Text size={props.size}>サーバーサイドがGoのためTypeScriptを使ったWebアプリはそちらにあります。</Text>
    </div>
  );
}

const BorderShadow = styled.div`
  border-radius : "12x";
  box-shadow: "2px 2px 4px -2px gray";
`;

function JSTS() {
  const [fontSize, setFontsize] = React.useState("25px");
  const [titleFontSize, SettitleFontSize] = React.useState("30px");

  return (
    <div>
      <Product title={"JavaScript/TypeScript"} fontSize={fontSize} titleFontSize={titleFontSize} setFontsize={setFontsize} setTitleFontSize={SettitleFontSize} details={Details} cassette={{ url: JSTSCassette }} />
      <BorderShadow>
        <Contents titleFontSize={{ size: titleFontSize }} title="erectron-memo" image={{ url: ElectronMemo }} video={{ url: "" }}></Contents>
        <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/electron-memo"]} text={["GitHub"]} />
        <Text size={fontSize}>Electronで作成したシンプルなメモ帳です。</Text>
      </BorderShadow>
      <Contents titleFontSize={{ size: titleFontSize }} title="desktop-animation" image={{ url: DesktopAnimation }} video={{ url: "" }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/electron-animation"]} text={["GitHub"]} />
      <Text size={fontSize}>ElectoronとThree.jsで作成したデスクトップマスコットです。</Text>
      <Text size={fontSize}>3DモデルはMgicaVoxelで作成しています。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="NIT-de-dance" image={{ url: NitdeDance }} video={{ url: "" }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/NIT-de-dance"]} text={["GitHub"]} />
      <Text size={fontSize}>Three.jsで作成しました。マウスを動かすとキャラクターが踊ります。</Text>
      <Text size={fontSize}>3DモデルはBlenderで作成しています。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="NIT-AR" image={{ url: Marker }} video={{ url: "" }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/NIT-AR", "https://garebareda.github.io/NIT-AR/"]} text={["GitHub", "GHPages"]} />
      <Text size={fontSize}>Three.jsとAR.jsで作成したWebARです。上のマーカーを読み取るとキャラクターが表示されます。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="CoCDiscord-hubot" image={{ url: CoC }} video={{ url: "" }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/CoCDiscord-hubot"]} text={["GitHub"]} />
      <Text size={fontSize}>Hubotで作成しました。TRPGで使用するDiscordのダイスBOTです。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="LINE-bot" image={{ url: LineBot }} video={{ url: "" }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/LINE-bot"]} text={["GitHub"]} />
      <Text size={fontSize}>Node.jsで作成しました。特定のワードに返信を返してくれるLINEのBOTです。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="Bord" image={{ url: "" }} video={{ url: Bord }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/Bord", "https://write-mine.firebaseapp.com/"]} text={["GitHub", "Firebase"]} />
      <Text size={fontSize}>ホスティング、データベースにFirebase、フレームワークはVueを使い作成しました。</Text>
      <Text size={fontSize}>誰でも投稿できる匿名の掲示板です。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="Smork" image={{ url: "" }} video={{ url: Smork }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/Smork", "https://smork-5493e.firebaseapp.com/"]} text={["GitHub", "Firebase"]} />
      <Text size={fontSize}>ホスティング、データベース、ログインにはFirebase、フレームワークはVue.js、通信部分にSkywayを使い作成しました。</Text>
      <Text size={fontSize}>ラジオが配信できるサイトです。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="Geact" image={{ url: "" }} video={{ url: Geact }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/GeactOne"]} text={["GitHub"]} />
      <Text size={fontSize}>TypeScriptで作成しました。自作Reactです。</Text>
      <Text size={fontSize}>現在はレンダリング、hooksが実装されています。</Text>
    </div>
  )
}

export default JSTS;