<template>
  <div>
    <backButton></backButton>
    <div class="inner">
      <div>
        <p id="top" class="titleText">Ohter</p>
      </div>

      <contents v-bind:contents="youtuber"></contents>
      <p class="con">Unity,C#,Node.jsで作りました</p>
      <p>スマートフォンの傾きと連動し首が動き</p>
      <p>リップシンクで口が動きます</p>

      <contents v-bind:contents="sub"></contents>
      <p class="con">Node.jsで作成しました</p>
      <p>node.jsでサーバを立ち上げ</p>
      <p>hromeでlocalhost:8000にアクセスすれば</p>
      <p>マイクの音声から字幕が生成されます</p>

      <contents v-bind:contents="pixelVruber"></contents>
      <p class="con">Unityで作成しました</p>
      <p>ドット絵のVtuberです</p>

      <contents v-bind:contents="fireOfBass"></contents>
      <p class="con">Unityで作成しました</p>
      <p>クリックをするとドット絵が演奏してくれます</p>

      <contents v-bind:contents="actionNanika"></contents>
      <p class="con">Unityで作成しました</p>
      <p>アクションゲームです</p>
      <contents v-bind:contents="PixelVtuberMulti"></contents>
      <p class="con">Unityで作成しました</p>
      <p>PixelVtuberのマルチプレイヤーバージョンです</p>
    </div>
    <hr class="end">
  </div>
</template>

<script>
import contents from "./contents/inner.vue";
import inner, { Inner } from "../src/inner.js";

const youtuber = new Inner(
  "Virtual Youtuber",
  "otherImg/bandicam 2019-04-02 00-56-31-739.mp4",
  "https://github.com/garebareDA/Vtuber",
  true
);

const sub = new Inner(
  "Subtitles--Generator",
  "otherImg/2019-04-03_20-19-30.mp4",
  "https://github.com/garebareDA/Subtitles--Generator",
  true
);

const pixelVruber = new Inner(
  "PixelVtuber",
  "otherImg/bandicam 2020-04-17 18-16-08-829.mp4",
  "",
  true
);

const fireOfBass = new Inner(
  "fire-of-bass",
  "otherImg/bandicam 2020-06-20 23-30-57-335.mp4",
  "https://github.com/garebareDA/fire-of-bass",
  true,
  "pages",
  "https://garebareda.github.io/fire-of-bass/build/index.html"
)

const actionNanika = new Inner(
  "action-nanika(grabi)",
  "otherImg/bandicam 2020-10-04 11-04-43-900.mp4",
  "https://github.com/garebareDA/action-nanika",
  true
)

const PixelVtuberMulti = new Inner(
  "PixelVtuberMulti",
  "otherImg/bandicam 2020-10-04 11-13-34-310.mp4",
  "",
  true,
)

export default {
  components: {
    contents
  },

  data:()=>{
    return{
      youtuber: youtuber,
      sub: sub,
      pixelVruber:pixelVruber,
      fireOfBass:fireOfBass,
      actionNanika: actionNanika,
      PixelVtuberMulti: PixelVtuberMulti,
    }
  }
}
</script>