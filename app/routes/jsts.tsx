import React from "react";
import { Container, Row, Text, Spacer, Grid } from "@nextui-org/react";
import { ProductCassette } from "~/components/products/productCassette";
import cassette from "~/assets/images/cassette/JSTSCassette.webp"
import { Products } from "~/components/products/products";
import type { ProductProps } from "~/components/products/products";

import electronMemo from "~/assets/images/javascriptImg/ElectronMemo.webp";
import desktopAnimation from "~/assets/images/javascriptImg/DesktopAnimation.webp";
import nitdedance from "~/assets/images/javascriptImg/NITdeDance.webp";
import coc from "~/assets/images/javascriptImg/CoC.webp";
import lineBot from "~/assets/images/javascriptImg/LINEBot.webp";
import bord from "~/assets/images/javascriptImg/Bord.webm";
import smork from "~/assets/images/javascriptImg/Smork.webm";
import geact from "~/assets/images/javascriptImg/Geact.webm";

export default function Index(): React.ReactElement {
  const details: string[] = [
    "ElectronやThree.js,Firebaseなどを使い作成したものです。",
    "フレームワークはVue.jsやReactをよく使います",
    "こちらは静的ページアプリとNode.jsアプリです。",
  ];

  const products: ProductProps[] = [
    {
      title: "electron-memo",
      content: { img: electronMemo, video: "" },
      details: ["Electronを使ったメモアプリです。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/electron-memo", }
      ],
    },

    {
      title: "desktop-animation",
      content: { img: desktopAnimation, video: "" },
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
      content: { img: nitdedance, video: "" },
      details: ["Three.jsで作成しました。マウスを動かすとキャラクターが踊ります。", "3DモデルはBlenderで作成しています。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/NIT-de-dance" },
      ]
    },

    {
      title: "CoCDiscord-hubot",
      content: { img: coc, video: "" },
      details: ["Hubotで作成しました。", "TRPGで使用するDiscordのダイスBOTです。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/CoCDiscord-hubot" }
      ]
    },

    {
      title: "LINE-bot",
      content: { img: lineBot, video: "" },
      details: ["Node.jsで作成しました。", "特定のワードに返信を返してくれるLINEのBOTです。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/LINE-bot"}
      ]
    },

    {
      title: "Bord",
      content: { img: "", video: bord },
      details:["ホスティング、データベースにFirebase、フレームワークはVueを使い作成しました。", "誰でも投稿できる匿名の掲示板です", "現在は運用をしていません。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/Bord"}
      ]
    },

    {
      title: "Smork",
      content: { img: "", video: smork },
      details: ["ホスティング、データベース、ログインにはFirebase、フレームワークはVue.js、通信部分にSkywayを使い作成しました。", "現在は運用をしていません。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/Smork"}
      ]
    },

    {
      title:"Geact",
      content: { img: "", video: geact },
      details:[
        "TypeScriptで作成しました。自作Reactです。",
        "現在はレンダリング、hooksが実装されています。"
      ],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/GeactOne" }
      ]
    },
  ];

  return (
    <Container>
      <Spacer y={3} />
      <Row>
        <ProductCassette name={"js/ts"} src={cassette} detail={details}></ProductCassette>
      </Row>
      <Spacer y={3} />
      <Grid.Container justify="center" gap={2}>
        {products.map((product, index) => {
          return (
            <Grid key={index}>
              <Products key={index} {...product}></Products>
            </Grid>
          );
        })}
      </Grid.Container>
      <Spacer y={3} />
    </Container>
  );
};