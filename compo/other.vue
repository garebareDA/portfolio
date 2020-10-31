<template>
  <div>
    <backButton></backButton>
    <div class="inner">
      <div>
        <p id="top" class="titleText">Ohter</p>
      </div>
      <contents v-bind:contents="sub"></contents>
      <p class="con">Node.jsで作成しました</p>
      <p>node.jsでサーバを立ち上げ</p>
      <p>chromeでlocalhost:8000にアクセスすれば</p>
      <p>マイクの音声から字幕が生成されます</p>
      <p>OBSのブラウザソースなどから読み込めば使えます</p>
    </div>
    <hr class="end">
  </div>
</template>

<script>
import contents from "./contents/inner.vue";
import inner, { Inner } from "../src/inner.js";

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
      sub: sub,
    }
  }
}
</script>