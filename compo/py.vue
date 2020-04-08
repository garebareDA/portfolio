<template>
  <div>
    <backButton></backButton>
    <div class="inner">
      <div>
        <p id="top" class="titleText">Python</p>
      </div>

      <contents v-bind:contents="keybord"></contents>
      <p class="con">Pythonで作りました キーボード入力をアシストしてくれます</p>

      <contents v-bind:contents="pixel"></contents>
      <p class="con">Pyxelで作りました、クリックゲームです</p>

      <contents v-bind:contents="webcut"></contents>
      <p class="con">wxPythonで作りましたURLを入力すると単独でWebページを開いてくれます</p>
    </div>
  </div>
</template>

<script>
import contents from "./contents/inner.vue";
import inner, { Inner } from "../src/inner.js";

const keybord = new Inner(
  "Keybord-assist",
  "pythonImg/bandicam 2018-10-26 15-54-08-143.mp4",
  "https://github.com/garebareDA/keybord-assist",
  true
);

const pixel = new Inner(
  "Pixel-game",
  "pythonImg/bandicam 2018-12-08 17-21-00-096.mp4",
  "https://github.com/garebareDA/Pixel-game",
  true
);

const webcut = new Inner(
  "Web-Cut",
  "pythonImg/bandicam 2018-12-13 15-25-42-870.mp4",
  "https://github.com/garebareDA/Web-Cut",
  true
);

export default {
  components: {
    contents
  },

  data:() => {
    return{
      keybord:keybord,
      pixel:pixel,
      webcut: webcut,
    }
  }
}
</script>