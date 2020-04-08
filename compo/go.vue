<template>
  <div>
    <backButton></backButton>
    <div class="inner">
      <div>
        <p id="top" class="titleText">GoLang</p>
      </div>
      <contents v-bind:contents="qr"></contents>
      <p class="con">Golangで作成しましたQRコードジェネレーターです</p>

      <contents v-bind:contents="crawl"></contents>
      <p class="con">Golangで作成しましたWeb画像クローラーです</p>

      <contents v-bind:contents="diceBot"></contents>
      <p class="con">GoLangで作成しましたダイスBOTです</p>

      <contents v-bind:contents="home"></contents>
      <p class="con">Golangで作成しました,Chromeで動くアシスタントです</p>

      <contents v-bind:contents="voice"></contents>
      <p class="con">Golangで作成しました,Discordのボイスチャットの入退室を通知してくれるBotです</p>

      <contents v-bind:contents="save"></contents>
      <p class="con">Golangで作成しました,Youtubeの急上昇を保存してくれます</p>

      <contents v-bind:contents="imgPost"></contents>
      <p class="con">ginで作成しました。画像にテキストを添えて投稿できるサイトです。運用はしていません。</p>

      <contents v-bind:contents="fileDwonload"></contents>
      <p class="con">ginで作成しました。アップローダーとダウンローダーです。</p>

      <contents v-bind:contents="slope"></contents>
      <p class="con">GolangとVue.jsで作成しました。思ったことを文字にして投稿できるサイトです</p>
    </div>
  </div>
</template>

<script>
import contents from "./contents/inner.vue";
import inner, { Inner } from "../src/inner.js";

const qr = new Inner(
  "QR-generator",
  "goImg/bandicam 2019-01-03 21-20-21-172.mp4",
  "https://github.com/garebareDA/QR-generator",
  true
);

const crawl = new Inner(
  "web-Crawler",
  "goImg/bandicam 2019-01-14 08-48-34-715.mp4",
  "https://github.com/garebareDA/web-Crawler",
  true
);

const diceBot = new Inner(
  "GoDiscordDiceBot",
  "goImg/bandicam 2019-02-19 11-07-04-508.png",
  "https://github.com/garebareDA/GoDiscordDiceBot",
  false
);

const home = new Inner(
  "rhombus-home",
  "goImg/bandicam 2019-02-19 17-41-17-134.mp4",
  "https://github.com/garebareDA/rhombus-home",
  true
);

const voice = new Inner(
  "discord-voice",
  "goImg/bandicam 2019-03-06 18-05-47-052.mp4",
  "https://github.com/garebareDA/discord-voice",
  true
);

const save = new Inner(
  "youtube-trending-save",
  "goImg/bandicam 2019-04-21 21-19-33-008.mp4",
  "https://github.com/garebareDA/youtube-trending-save",
  true
);

const imgPost = new Inner(
  "imgPost",
  "goImg/imgpost.mp4",
  "https://github.com/garebareDA/imgPost",
  true
);

const fileDwonload = new Inner(
  "fileDwonload",
  "goImg/bandicam 2019-10-01 00-40-01-804.mp4",
  "https://github.com/garebareDA/fileDwonload",
  true
);

const slope = new Inner(
  "slope",
  "goImg/bandicam 2020-01-17 01-48-06-050.mp4",
  "https://github.com/garebareDA/slope",
  true,
  "heroku",
  "https://slope-9080.herokuapp.com/#/"
);

export default {
  components: {
    contents
  },

  data: () => {
    return {
      qr: qr,
      crawl: crawl,
      diceBot: diceBot,
      home: home,
      voice: voice,
      save: save,
      imgPost: imgPost,
      fileDwonload: fileDwonload,
      slope: slope,
    };
  }
};
</script>