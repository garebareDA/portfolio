<template>
  <div>
    <div class="backButton">
      <div class="ButtonMargin">
        <router-link to="/" class="button is-large is-link" onclick="slide()">戻る</router-link>
      </div>
    </div>
    <div class="inner">
      <div>
        <p id="top" class="titleText">GoLang</p>
      </div>
      <hr>
      <p class="t">QR-generator</p>
      <video controls webkit-playsinline playsinline autoplay loop name="media" class="jsImg sizeImg">
        <source src="./goImg/bandicam 2019-01-03 21-20-21-172.mp4" type="video/mp4">
      </video>
      <br>
      <a
        href="https://github.com/garebareDA/QR-generator"
        target="_blank"
        class="button is-dark is-inverted is-outlined"
      >GitHub</a>
      <p class="con">Golangで作成しましたQRコードジェネレーターです</p>
      <hr>
      <p class="t">web-Crawler</p>
      <video controls webkit-playsinline playsinline autoplay loop name="media" class="jsImg sizeImg">
        <source src="./goImg/bandicam 2019-01-14 08-48-34-715.mp4" type="video/mp4">
      </video>
      <br>
      <a
        href="https://github.com/garebareDA/web-Crawler"
        target="_blank"
        class="button is-dark is-inverted is-outlined"
      >GitHub</a>
      <p class="con">Golangで作成しましたWeb画像クローラーです</p>
      <hr>
      <p class="t">GoDiscordDiceBot</p>
      <img src="./goImg/bandicam 2019-02-19 11-07-04-508.png" class="jsImg sizeImg">
      <br>
      <a
        href="https://github.com/garebareDA/GoDiscordDiceBot"
        target="_blank"
        class="button is-dark is-inverted is-outlined"
      >GitHub</a>
      <p class="con">GoLangで作成しましたダイスBOTです</p>
    <hr>
    <p class="t">rhombus-home</p>
      <video controls webkit-playsinline playsinline autoplay loop muted name="media" class="jsImg sizeImg">
        <source src="./goImg/bandicam 2019-02-19 17-41-17-134.mp4" type="video/mp4">
      </video>
      <br>
      <a
        href="https://github.com/garebareDA/rhombus-home"
        target="_blank"
        class="button is-dark is-inverted is-outlined"
      >GitHub</a>
      <p class="con">Golangで作成しました,Chromeで動くアシスタントです</p>
      </div>
  </div>
</template>
