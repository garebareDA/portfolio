<template>
  <div>
    <backButton></backButton>
    <div class="inner">
      <div>
        <p id="top" class="titleText">JavaScript</p>
      </div>
      <contents v-bind:contents="electronMemo"></contents>
      <p class="con">Electronで作成した簡素なメモ帳です</p>

      <contents v-bind:contents="desktopAnimation"></contents>
      <p class="con">ElectoronとThree.jsで作ったデスクトップマスコットです</p>

      <contents v-bind:contents="NITdeDance"></contents>
      <p class="con">Three.jsで作りました マウスを動かすとキャラクターが踊ります</p>

      <contents v-bind:contents="NITAR"></contents>
      <p class="con">
        Three.jsとAR.jsで作成したWebARです
        上のマーカーを読み取るとキャラクターが表示されます
      </p>

      <contents v-bind:contents="CoCDiscord"></contents>
      <p class="con">Hubotで作成したTRPGをやるためのダイスbotです</p>

      <contents v-bind:contents="lineBot"></contents>
      <p class="con">Node.jsで作りましたLINEのBOTです</p>

      <contents v-bind:contents="bord"></contents>
      <p class="con">誰かでも投稿できる、匿名の掲示板です</p>

      <contents v-bind:contents="smork"></contents>
      <p class="con">FirebaseとVue.jsとSkywayを使用したラジオ配信サイトです</p>
    </div>
  </div>
</template>

<script>
import contents from "./contents/inner.vue";
import inner, { Inner } from "../src/inner.js";

const electronMemo = new Inner(
  "erectron-memo",
  "javascriptImg/bandicam 2018-09-22 13-09-48-046.jpg",
  "https://github.com/garebareDA/electron-memo",
  false
);

const desktopAnimation = new Inner(
  "desktop-animation",
  "javascriptImg/bandicam 2018-09-22 13-15-52-798.jpg",
  "https://github.com/garebareDA/electron-animation",
  false
);

const NITdeDance = new Inner(
  "NIT-de-dance",
  "javascriptImg/bandicam 2018-09-22 17-32-55-746.jpg",
  "https://github.com/garebareDA/NIT-de-dance",
  false
);

const NITAR = new Inner(
  "NIR-AR",
  "javascriptImg/marker.png",
  "https://github.com/garebareDA/NIT-AR",
  false
);

const CoCDiscord = new Inner(
  "CoCDiscord-hubot",
  "javascriptImg/bandicam 2018-09-22 13-17-56-215.jpg",
  "https://github.com/garebareDA/CoCDiscord-hubot",
  false
);

const lineBot = new Inner(
  "LINE-bot",
  "javascriptImg/bandicam 2018-10-08 20-20-49-220.png",
  "https://github.com/garebareDA/LINE-bot",
  false
);

const bord = new Inner(
  "Bord",
  "javascriptImg/bandicam 2019-06-25 14-14-10-967.mp4",
  "https://github.com/garebareDA/Bord",
  true,
  "firebase",
  "https://write-mine.firebaseapp.com"
);

const smork = new Inner(
  "smork",
  "javascriptImg/bandicam 2019-08-27 21-35-42-138.mp4",
  "https://github.com/garebareDA/smork",
  true,
  "firebase",
  "https://smork-5493e.firebaseapp.com"
);

export default {
  components: {
    contents
  },

  data: () => {
    return {
      electronMemo: electronMemo,
      desktopAnimation: desktopAnimation,
      NITdeDance: NITdeDance,
      NITAR: NITAR,
      CoCDiscord: CoCDiscord,
      lineBot: lineBot,
      bord: bord,
      smork: smork,
    };
  }
};
</script>