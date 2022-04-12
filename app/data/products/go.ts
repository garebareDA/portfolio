import type { ProductProps } from "~/components/products/products";

const github = "goImg";

export const details: string[] = [
  "フレームワークのGinなどを使い作成したものです。",
  "Go言語は主にWebアプリケーションを中心に使っています。",
  "フロントエンドはReact, Vue.jsをよく使います。"
];

export const products: ProductProps[] = [
  {
    title: "QR-generator",
    content: { img: "", video: "QRGenerator", url: github },
    details: ["QRコードジェネレーターです。", "テキストエリアの文字列を元にQRコードを生成してくれます"],
    buttons: [
      { url: "https://github.com/garebareDA/QR-generator", title: "GitHub", }
    ]
  },

  {
    title: "web-Crawler",
    content: { img: "", video: "WebCrawler", url: github },
    details: ["Web画像クローラーです。", "指定されたURLから画像を止めるまで自動でダウンロードしてくれます。"],
    buttons: [
      { url: "https://github.com/garebareDA/web-Crawler", title: "GitHub", }
    ]
  },

  {
    title: "GoDiscordDiceBot",
    content: { img: "DiceBot", video: "", url: github },
    details: ["discordgoで作成しました。。", "TRPG用のDiscordのダイスBOTです"],
    buttons: [
      { url: "https://github.com/garebareDA/GoDiscordDiceBot", title: "GitHub", }
    ]
  },

  {
    title: "rhombus-home",
    content: { img: "", video: "RhombusHome", url: github },
    details: ["Ginをで作成しました。", "Web上で動く特定の言葉に反応するアシスタントです。", "フロントサイドはThree.jsを使っています。"],
    buttons: [
      { url: "https://github.com/garebareDA/rhombus-home", title: "GitHub", }
    ]
  },

  {
    title: "discord-voice",
    content: { img: "", video: "DiscordVoice", url: github },
    details: ["discordgoで作成しました。", "Discordのボイスチャットの入退室を通知してくれるBotです。"],
    buttons: [
      { url: "https://github.com/garebareDA/discord-voice", title: "GitHub", }
    ]
  },

  {
    title: "youtube-trending-save",
    content: { img: "", video: "YoutubeTrendingSave", url: github },
    details: ["Ginで作成しました。", "Youtubeの急上昇を保存してくれるサイトです。", "現在は運用していません。"],
    buttons: [
      { url: "https://github.com/garebareDA/youtube-trending-save", title: "GitHub", }
    ]
  },

  {
    title: "imgPost",
    content: { img: "", video: "ImgPost", url: github },
    details: ["Ginで作成しました。", "画像に一言添えて投稿できるサイトです。", "フロントサイドはVue.jsを使っています。", "現在は運用していません。" ],
    buttons: [
      { url: "https://github.com/garebareDA/imgPost", title: "GitHub", }
    ],
  },

  {
    title: "slope",
    content: { img: "", video: "Slope", url: github },
    details: ["Ginで作成しました。", "思ったことを文字にして投稿できるサイトです。", "ログインにはFirebase,フロントサイドはVue.jsを使っています。"],
    buttons: [
      { url: "https://github.com/garebareDA/slope", title: "GitHub" },
      { url: "https://slope-9080.herokuapp.com/#/", title: "Heroku" }
    ]
  },

  {
    title: "later",
    content: { img: "", video: "Later", url: github },
    details: ["Ginで作成しました。", "時間を計測して時間を計算してくれるサイトです。", "ログインにはFirebase,フロントサイドはVue.jsを使っています。"],
    buttons: [
      { url: "https://github.com/garebareDA/later", title: "GitHub" },
      { url: "https://later-090.herokuapp.com/#/", title: "Heroku" }
    ]
  },

  {
    title: "gaa",
    content: { img: "", video: "Gaa", url: github },
    details: ["Goで作成しました。", "小さなWebフレームワークです。", "HTTPルーターなどを自作しました。"],
    buttons: [
      { url: "https://github.com/garebareDA/gaa", title: "GitHub" },
    ]
  },

  {
    title: "json-parser",
    content: { img: "", video: "JsonParser", url: github },
    details: ["Goで作成したjsonパーサーです。", "jsonをinterfaceにの配列にパースします。"],
    buttons: [
      { url: "https://github.com/garebareDA/json-parser", title: "GitHub" },
    ]
  },

  {
    title: "ListChat",
    content: { img: "", video: "listchat", url: github },
    details: ["サーバーサイドをGo,フロントサイドをTypeScriptで作成しました。", "リアルタイム性を重視したチャットです。"],
    buttons: [
      { url: "https://github.com/garebareDA/list", title: "GitHub" },
      { url: "https://stormy-stream-93679.herokuapp.com/#/", title: "Heroku" }
    ]
  },

  {
    title: "discordRadio",
    content: { img: "", video: "", url: github },
    details: ["DiscordGoで作成しました。", "Discordのチャットでラジオを流します。"],
    buttons: [
      { url: "https://github.com/garebareDA/discordRadio", title: "GitHub" },
    ]
  }
];
