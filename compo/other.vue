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

    </div>
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

export default {
  components: {
    contents
  },

  data:()=>{
    return{
      youtuber: youtuber,
      sub: sub,
    }
  }
}
</script>