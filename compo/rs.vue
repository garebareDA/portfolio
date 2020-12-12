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
      <p class="con">
        termionを使って作成しました。自作のテキストエディタです。
      </p>

      <contents v-bind:contents="webBrowser"></contents>
      <p class="con">
        HTMLパーサーから作りました。簡易ブラウザです。GUIにはgtkを使っています。
      </p>

      <contents v-bind:contents="koto"></contents>
      <p class="con">
        自作言語のインタプリタです。現在基礎的な部分が完成しています。
      </p>

      <contents v-bind:contents="kotoWasm"></contents>
      <p class="con">
        自作言語のインタプリタのwasm版です。ウェブブラウザで動作します。
      </p>

      <contents v-bind:contents="umbrella"></contents>
      <p class="con">自作言語のコンパイラです。 LLVM IRを生成します。</p>

      <contents v-bind:contents="smallgit"></contents>
      <p class="con">自作gitです。ステージングやコミットが実装されています。</p>

      <contents v-bind:contents="gShell"></contents>
       <p class="con">自作Shellです。コマンド実行、多段パイプ、リダイレクトが実装されています。</p>
    </div>
    <hr class="end" />
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
  "rustImg/bandicam 2020-04-17 17-49-52-977.mp4",
  "https://github.com/garebareDA/koto",
  true
);

const kotoWasm = new Inner(
  "koto wasm",
  "rustImg/bandicam 2020-07-07 16-12-13-859.mp4",
  "https://github.com/garebareDA/koto/tree/wasm",
  true,
  "firebase",
  "https://koto-e2f64.firebaseapp.com/"
)

const umbrella= new Inner(
  "umbrella",
  "rustImg/bandicam 2020-10-04 10-54-51-211.mp4",
  "https://github.com/garebareDA/umbrella",
  true
)

const smallgit = new Inner(
  "smallgit",
  "rustImg/bandicam 2020-10-30 14-14-11-505.mp4",
  "https://github.com/garebareDA/smallgit",
  true
)

const gShell = new Inner(
  "g_shell",
  "rustImg/bandicam 2020-12-12 15-11-08-928.mp4",
  "https://github.com/garebareDA/g_shell",
  true
)

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
      kotoWasm: kotoWasm,
      umbrella: umbrella,
      smallgit:smallgit,
      gShell:gShell,
    }
  }
}
</script>