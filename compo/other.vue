<template>
  <div>
    <div class="backButton">
      <div class="ButtonMargin">
        <router-link to="/" class="button is-large is-link">戻る</router-link>
      </div>
    </div>
    <div class="inner">
      <div>
        <p id="top" class="titleText">Ohter</p>
      </div>
      <hr>

      <p class="t">Virtual Youtuber</p>
      <video controls  webkit-playsinline playsinline autoplay loop muted name="media" class="jsImg sizeImg">
        <source src="./otherImg/bandicam 2019-04-02 00-56-31-739.mp4" type="video/mp4">
      </video>
      <br>

      <a
        href="https://github.com/garebareDA/Vtuber"
        target="_blank"
        class="button is-dark is-inverted is-outlined"
      >GitHub</a>
      <p class="con">Unity,C#,Node.jsで作りました</p>
      <p>スマートフォンの傾きと連動し首が動き</p>
      <p>リップシンクで口が動きます</p>

      <hr>

      <p class="t">Subtitles--Generator</p>
      <video controls  webkit-playsinline playsinline autoplay loop muted name="media" class="jsImg sizeImg">
        <source src="./otherImg/2019-04-03_20-19-30.mp4" type="video/mp4">
      </video>
      <br>

      <a
        href="https://github.com/garebareDA/Subtitles--Generator"
        target="_blank"
        class="button is-dark is-inverted is-outlined"
      >GitHub</a>
      <p class="con">Node.jsで作成しました</p>
      <p>node.jsでサーバを立ち上げ</p>
      <p>hromeでlocalhost:8000にアクセスすれば</p>
      <p>マイクの音声から字幕が生成されます</p>

    </div>
  </div>
</template>
