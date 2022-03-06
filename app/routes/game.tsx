import React from "react";
import type { ProductProps } from "~/components/products/products";

import { ProductContents } from "~/components/products/productContents";


const github = "unityImg";
const cassette = "UnityCassette";

export default function Index():React.ReactElement {
  const details:string[] = [
    "ゲームは主にUnityやFlixelで作られています"
  ];

  const products:ProductProps[] = [
    {
      title: "MiniVtuber",
      content: { img: "", video: "MiniVtuber", url: github },
      details: [
        "UnityとNode.jsで作成しました。",
        "スマホの傾きと連動し、首が動き、リップシンクで口が動きます。"
      ],
      buttons: [
        {url:"https://github.com/garebareDA/Vtuber", title:"GitHub"}
      ]
    },

    {
      title: "PixelVtuber",
      content: { img: "", video: "PixleVtuber", url: github },
      details: [
        "Unityで作成しました。ドット絵のVtuberです。",
        "マイク以外に必要な物は無く、起動するだけで動いてくれます。"
      ],
      buttons: []
    },

    {
      title: "fire-of-bass",
      content: { img: "", video: "FireBass", url: github },
      details:[
        "Unityで作成しました。",
        "クリックするとドット絵が演奏してくれます。"
      ],
      buttons: [
        {url:"https://github.com/garebareDA/fire-of-bass", title:"GitHub"},
        {url:"https://garebareda.github.io/fire-of-bass/build/index.html", title:"Pages"}
      ]
    },

    {
      title: "action-nanika(grabi)",
      content: { img: "", video: "Grabi", url: github },
      details:[
        "Unityで作成しました。",
        "アクションゲームです。"
      ],
      buttons: [
        {url:"https://github.com/garebareDA/action-nanika", title:"GitHub"},
        {url:"https://garebareda.github.io/action-nanika/WebGL/index.html", title:"Pages"}
      ]
    },

    {
      title: "PixelVtuberMulti",
      content: { img: "", video: "PixelVtuberMulti", url: github },
      details:[
        "Unityで作成しました。",
        "上記のPixelVtuberのマルチプレイヤーバージョンです。"
      ],
      buttons: []
    },

    {
      title:"MinosMaze",
      content: { img: "MinosMaze", video: "", url: github },
      details:[
        "Unityを使い二人で共同開発したパズル対戦ゲームです。",
        "現在itch.ioで配布中です。"
      ],
      buttons: [
        {url:"https://garebareda.itch.io/minosmaze", title:"itch.io"}
      ]
    },

    {
      title:"MonsterHouse",
      content: { img: "MonsterHouse", video: "", url: github },
      details:[
        "Unityで作成しました。",
        "マンションでモンスターを育成する育成ゲームです。",
        "現在itch.ioで配布中です。"
      ],
      buttons: [
        { url:"https://garebare.itch.io/monsterhouse", title:"itch.io"}
      ]
    },

    {
      title: "Roboterria(WIP)",
      content: { img: "", video: "Roboteria", url: github },
      details:[
        "Unityで作成しました。",
        "島でロボットを使う工業ゲームです。",
        "現在基礎的な部分が完成しています。"
      ],
      buttons: []
    },

    {
      title: "Way",
      content: { img: "way", video: "", url: github },
      details:[
        "Haxe, Flixe,で作成しました。",
        "歩き回って探索するゲームです。",
        "BGM, SE以外は自分が担当しました。",
        "現在itch.ioでプレイできます",
      ],
      buttons: [
        {url:"https://garebare.itch.io/way", title:"itch.io"}
      ]
    }
  ];

  return(
    <ProductContents products={products} cassette={{
      name:"Game",
      src: cassette,
      detail: details,
    }}/>
  );
};