<template>
  <div>
    <backButton></backButton>
    <div class="inner">
      <div>
        <p id="top" class="titleText">Rust</p>
      </div>
      <contents v-bind:contents="zip"></contents>
      <p class="con">Zipファイルを作成します。</p>

      <contents v-bind:contents="editor"></contents>
      <p class="con">termionを使って作成しました。自作のテキストエディタです。</p>

      <contents v-bind:contents="webBrowser"></contents>
      <p class="con">HTMLパーサーから作りました。簡易ブラウザです。GUIにはgtkを使っています。</p>

     <contents v-bind:contents="koto"></contents>
      <p class="con">自作言語のインタプリタです。現在基礎的な部分が完成しています。</p>
    </div>
  </div>
</template>

<script>
import contents from "./contents/inner.vue";
import inner, { Inner } from "../src/inner.js";

const zip = new Inner(
  "zip",
  "rustImg/bandicam 2019-10-28 16-01-02-320.mp4",
  "https://github.com/garebareDA/zip",
  true
);

const editor = new Inner(
  "editor",
  "rustImg/bandicam 2019-10-26 22-20-58-974.mp4",
  "https://github.com/garebareDA/editor",
  true
);

const webBrowser = new Inner(
  "web-browser",
  "rustImg/bandicam 2019-12-13 17-08-01-503.mp4",
  "https://github.com/garebareDA/web_browser",
  true
);

const koto = new Inner(
  "koto",
  "rustImg/bandicam 2020-04-02 08-56-01-231.mp4",
  "https://github.com/garebareDA/koto",
  true
);

export default {
  components:{
    contents
  },

  data:() => {
    return{
      zip: zip,
      editor: editor,
      webBrowser: webBrowser,
      koto: koto,
    }
  }
}
</script>