import * as React from 'react';

import { Product, Contents } from '../components/products/product';
import LinkButtons from '../components/products/linkButton';
import { Text } from '../components/products/textStyled';
import { FontSize } from '../styleType/fontSize';

import GoCassette from '../../images/cassette/GOCassette.webp';
import QRGenerator from '../../images/goImg/QRGenerator.webm';
import WebCrawler from '../../images/goImg/WebCrawler.webm';
import GoDiscordDiceBot from '../../images/goImg/DiceBot.webp';
import RhombusHome from '../../images/goImg/RhombusHome.webm';
import DiscordVoice from '../../images/goImg/DiscordVoice.webm';
import YoutubeTrendingSave from '../../images/goImg/YoutubeTrendingSave.webm';
import ImgPost from '../../images/goImg/ImgPost.webm';
import Slope from '../../images/goImg/Slope.webm';
import Later from '../../images/goImg/Later.webm';
import Gaa from '../../images/goImg/Gaa.webm';
import JsonParser from '../../images/goImg/JsonParser.webm';
import ListChat from '../../images/goImg/listchat.webm';

function Details(props: FontSize) {
  return (
    <div>
      <Text size={props.size}>フレームワークのGinなどを使い作成したものです。</Text>
      <Text size={props.size}>Go言語は主にWebアプリケーションを中心に使っています。</Text>
      <Text size={props.size}>フロントエンドはReact, Vue.jsをよく使います。</Text>
    </div>
  );
}

function Go() {
  const [fontSize, setFontsize] = React.useState("25px");
  const [titleFontSize, SettitleFontSize] = React.useState("30px");

  return (
    <div>
      <Product title={"Go"} fontSize={fontSize} titleFontSize={titleFontSize} setFontsize={setFontsize} setTitleFontSize={SettitleFontSize} details={Details} cassette={{ url: GoCassette }} />
      <Contents titleFontSize={{ size: titleFontSize }} title="QR-generator" image={{ url: "" }} video={{ url: QRGenerator }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/QR-generator"]} text={["GitHub"]} />
      <Text size={fontSize}>QRコードジェネレーターです。</Text>
      <Text size={fontSize}>テキストエリアの文字列を元にQRコードを生成してくれます。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="web-Crawler" image={{ url: "" }} video={{ url: WebCrawler }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/web-Crawler"]} text={["GitHub"]} />
      <Text size={fontSize}>Web画像クローラーです。</Text>
      <Text size={fontSize}>指定されたURLから画像を止めるまで自動でダウンロードしてくれます。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="GoDiscordDiceBot" image={{ url: GoDiscordDiceBot }} video={{ url: "" }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/GoDiscordDiceBot"]} text={["GitHub"]} />
      <Text size={fontSize}>discordgoで作成しました。TRPG用のDiscordのダイスBOTです。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="rhombus-home" image={{ url: "" }} video={{ url: RhombusHome }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/rhombus-home"]} text={["GitHub"]} />
      <Text size={fontSize}>Ginをで作成しました。Web上で動く特定の言葉に反応するアシスタントです。</Text>
      <Text size={fontSize}>フロントサイドはThree.jsを使っています。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="discord-voice" image={{ url: "" }} video={{ url: DiscordVoice }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/discord-voice"]} text={["GitHub"]} />
      <Text size={fontSize}>discordgoで作成しました。</Text>
      <Text size={fontSize}>Discordのボイスチャットの入退室を通知してくれるBotです。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="youtube-trending-save" image={{ url: "" }} video={{ url: YoutubeTrendingSave }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/youtube-trending-save"]} text={["GitHub"]} />
      <Text size={fontSize}>Ginで作成しました。Youtubeの急上昇を保存してくれるサイトです。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="imgPost" image={{ url: "" }} video={{ url: ImgPost }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/imgPost"]} text={["GitHub"]} />
      <Text size={fontSize}>Ginで作成しました。画像に一言添えて投稿できるサイトです。</Text>
      <Text size={fontSize}>フロントサイドはVue.jsを使っています。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="slope" image={{ url: "" }} video={{ url: Slope }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/slope", "https://slope-9080.herokuapp.com/#/"]} text={["GitHub", "Heroku"]} />
      <Text size={fontSize}>Ginで作成しました。思ったことを文字にして投稿できるサイトです。</Text>
      <Text size={fontSize}>ログインにはFirebase,フロントサイドはVue.jsを使っています。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="later" image={{ url: "" }} video={{ url: Later }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/later", "https://later-090.herokuapp.com/#/"]} text={["GitHub", "Heroku"]} />
      <Text size={fontSize}>Ginで作成しました。MarkDownで記事を書いて投稿できるサイトです。</Text>
      <Text size={fontSize}>ログインにはFirebase,フロントサイドはReactを使っています。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="gaa" image={{ url: "" }} video={{ url: Gaa }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/gaa"]} text={["GitHub"]} />
      <Text size={fontSize}>Goで作成しました。小さなWebフレームワークです。</Text>
      <Text size={fontSize}>HTTPルーターなどを自作しました。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="json-parser" image={{ url: "" }} video={{ url: JsonParser }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/json-parser"]} text={["GitHub"]} />
      <Text size={fontSize}>Goで作成したjsonパーサーです。</Text>
      <Text size={fontSize}>jsonをinterfaceにの配列にパースします。</Text>

      <Contents titleFontSize={{ size: titleFontSize }} title="ListChat" image={{ url: "" }} video={{ url: ListChat }}></Contents>
      <LinkButtons size={{ size: fontSize }} url={["https://github.com/garebareDA/list", "https://stormy-stream-93679.herokuapp.com/#/"]} text={["GitHub", "Heroku"]} />
      <Text size={fontSize}>サーバーサイドをGo,フロントサイドをTypeScriptで作成しました。</Text>
      <Text size={fontSize}>リアルタイム性を重視したチャットです。</Text>
    </div>
  )
}

export default Go;