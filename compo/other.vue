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
    </div>
  </div>
</template>
