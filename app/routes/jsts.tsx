import React from "react";
import type { ProductProps } from "~/components/products/products";

import { ProductContents } from "~/components/products/productContents";

const github = "javascriptImg";
const cassette = "JSTSCassette";

export default function Index(): React.ReactElement {
  const details: string[] = [
    "ElectronやThree.js,Firebaseなどを使い作成したものです。",
    "フレームワークはVue.jsやReact, Remixをよく使います",
    "こちらは静的ページアプリとNode.jsアプリです。",
  ];

  const products: ProductProps[] = [
    {
      title: "electron-memo",
      content: { img: "ElectronMemo", video: "", url: github },
      details: ["Electronを使ったメモアプリです。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/electron-memo", }
      ],
    },

    {
      title: "desktop-animation",
      content: { img: "DesktopAnimation", video: "", url: github },
      details: [
        "ElectronとThree.jsで作成しました。",
        "デスクトップマスコットです"
      ],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/electron-animation" }
      ],
    },

    {
      title: "NIT-de-dance",
      content: { img: "NITdeDance", video: "", url: github },
      details: ["Three.jsで作成しました。マウスを動かすとキャラクターが踊ります。", "3DモデルはBlenderで作成しています。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/NIT-de-dance" },
      ]
    },

    {
      title: "CoCDiscord-hubot",
      content: { img: "CoC", video: "", url: github },
      details: ["Hubotで作成しました。", "TRPGで使用するDiscordのダイスBOTです。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/CoCDiscord-hubot" }
      ]
    },

    {
      title: "LINE-bot",
      content: { img: "LINEBot", video: "", url: github },
      details: ["Node.jsで作成しました。", "特定のワードに返信を返してくれるLINEのBOTです。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/LINE-bot" }
      ]
    },

    {
      title: "Bord",
      content: { img: "", video: "Bord", url: github },
      details: ["ホスティング、データベースにFirebase、フレームワークはVueを使い作成しました。", "誰でも投稿できる匿名の掲示板です", "現在は運用をしていません。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/Bord" }
      ]
    },

    {
      title: "Smork",
      content: { img: "", video: "Smork", url: github },
      details: ["ホスティング、データベース、ログインにはFirebase、フレームワークはVue.js、通信部分にSkywayを使い作成しました。", "現在は運用をしていません。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/Smork" }
      ]
    },

    {
      title: "Geact",
      content: { img: "", video: "Geact", url: github },
      details: [
        "TypeScriptで作成しました。自作Reactです。",
        "現在はレンダリング、hooksが実装されています。"
      ],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/GeactOne" }
      ]
    },

    {
      title: "dottoys",
      content: { img: "Dottoys", video: "", url: github },
      details: ["TypeScriptで作成しました。自作Reactです。", "現在はレンダリング、hooksが実装されています。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/WebsDevs" },
        {title: "Netlify", url: "https://dottoys.garebare.net"}
      ],
    }
  ];

  return (
    <ProductContents products={products} cassette={{
      name: "js/ts",
      src: cassette,
      detail: details,
    }} />
  );
};