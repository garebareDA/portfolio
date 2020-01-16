<template>
  <div>
    <div class="backButton">
      <div class="ButtonMargin">
        <router-link to="/" class="button is-large is-link">戻る</router-link>
      </div>
    </div>
    <div class="inner">
      <div>
        <p id="top" class="titleText">Rust</p>
      </div>
      <hr>
      <p class="t">zip</p>
      <video controls  webkit-playsinline playsinline autoplay loop name="media" class="jsImg sizeImg">
        <source src="./rustImg/bandicam 2019-10-28 16-01-02-320.mp4" type="video/mp4">
      </video>
      <br>
      <a
        href="https://github.com/garebareDA/zip"
        target="_blank"
        class="button is-dark is-inverted is-outlined"
      >GitHub</a>
      <p class="con">Zipファイルを作成します。</p>
      <hr>
      <p class="t">editor</p>
      <video  webkit-playsinline playsinline autoplay loop controls name="media" class="jsImg sizeImg">
        <source src="./rustImg/bandicam 2019-10-26 22-20-58-974.mp4" type="video/mp4">
      </video>
      <br>
      <a
        href="https://github.com/garebareDA/editor"
        target="_blank"
        class="button is-dark is-inverted is-outlined"
      >GitHub</a>
      <p class="con">termionを使って作成しました。自作のテキストエディタです。</p>
      <hr>
      <p class="t">web_browser</p>
      <video  webkit-playsinline playsinline autoplay loop controls name="media" class="jsImg sizeImg">
        <source src="./rustImg/bandicam 2019-12-13 17-08-01-503.mp4" type="video/mp4">
      </video>
      <br>
      <a
        href="https://github.com/garebareDA/web_browser"
        target="_blank"
        class="button is-dark is-inverted is-outlined"
      >GitHub</a>
      <p class="con">HTMLパーサーから作りました。簡易ブラウザです。GUIにはgtkを使っています。</p>
    </div>
  </div>
</template>