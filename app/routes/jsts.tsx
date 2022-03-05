import React from "react";
import { Container, Row, Text, Spacer, Grid } from "@nextui-org/react";
import { ProductCassette } from "~/components/products/productCassette";
import cassette from "~/assets/images/cassette/JSTSCassette.webp"
import { Products } from "~/components/products/products";
import type { ProductProps } from "~/components/products/products";

import electronMemo from "~/assets/images/javascriptImg/ElectronMemo.webp";
import desktopAnimation from "~/assets/images/javascriptImg/DesktopAnimation.webp";


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
      content: { img: "", video: "" },
      details: ["Three.jsで作成しました。マウスを動かすとキャラクターが踊ります。", "3DモデルはBlenderで作成しています。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/NIT-de-dance" },
      ]
    },

    {
      title: "NIT-AR",
      content: { img: "", video: "" },
      details: ["Three.jsとAR.jsで作成したWebARです。", "上のマーカーを読み取るとキャラクターが表示されます。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/NIT-AR" }
      ]
    },

    {
      title: "CoCDiscord-hubot",
      content: { img: "", video: "" },
      details: ["Hubotで作成しました。", "TRPGで使用するDiscordのダイスBOTです。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/CoCDiscord-hubot" }
      ]
    },

    {
      title: "LINE-bot",
      content: { img: "", video: "" },
      details: ["Node.jsで作成しました。", "特定のワードに返信を返してくれるLINEのBOTです。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/LINE-bot"}
      ]
    },

    {
      title: "Bord",
      content: { img: "", video: "" },
      details:["ホスティング、データベースにFirebase、フレームワークはVueを使い作成しました。", "誰でも投稿できる匿名の掲示板です", "現在は運用をしていません。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/Bord"}
      ]
    },

    {
      title: "Smork",
      content: { img: "", video: "" },
      details: ["ホスティング、データベース、ログインにはFirebase、フレームワークはVue.js、通信部分にSkywayを使い作成しました。", "現在は運用をしていません。"],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/Smork"}
      ]
    },

    {
      title:"Geact",
      content: { img: "", video: "" },
      details:[
        "TypeScriptで作成しました。自作Reactです。",
        "現在はレンダリング、hooksが実装されています。"
      ],
      buttons: [
        { title: "GitHub", url: "https://github.com/garebareDA/GeactOne" }
      ]
    }
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