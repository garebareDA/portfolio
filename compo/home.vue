<template>
  <div>
    <div class="columns is-gapless" is-gapless>
      <div class="column is-one-quarter">
        <div class="prof">
          <p class="tex">Portfolio</p>
        </div>

        <div class="prof">

          <div>
            <p class="tex">HandleName</p>
            <p class="tex">ガレバレ</p>
          </div>

          <hr>
        </div>

        <div class="prof">
          <span>Programming</span>
          <span>Languages</span>
          <p class="tex">HTML</p>
          <p class="tex">CSS</p>
          <p class="tex">JavaScript/TypeScript (Node.js)</p>
          <p class="tex">Python</p>
          <p class="tex">GoLang</p>
          <p class="tex">Rust</p>
          <hr>
        </div>

        <div class="prof">
          <p class="tex">SNS</p>
          <a href="https://twitter.com/garebare521" target="_blank">Twitter</a>
          <br>
          <a href="https://github.com/garebareDA" target="_blank">GitHub</a>
          <br>
          <a href="https://qiita.com/DA_garebare" target="_blank">Qiita</a>
          <br>
          <hr>
        </div>
      </div>

      <div class="column">
        <p class="product">Product</p>

        <div class="columns is-gapless">

          <router-link to="/js" class="image is-1280x720 column" >
            <div class="inner">JavaScript</div>
            <img src="./tapeImg/js.png" class="tapeimg">
          </router-link>

          <router-link to="/py" class="image is-1280x720 column" >
            <div class="inner">Python</div>
            <img src="./tapeImg/py.png" class="tapeimg">
          </router-link>

          <router-link to="/go" class="image is-1280x720 column">
            <div class="inner">GoLang</div>
            <img src="./tapeImg/go.png" class="tapeimg">
          </router-link>
        </div>

        <div class="columns is-gapless">
          <router-link to="/rs" class="image is-1280x720 column">
            <div class="inner">Rust</div>
            <img src="./tapeImg/rs.png" class="tapeimg">
          </router-link>

          <router-link to="/bleAndMagi" class="image is-1280x720 column">
            <div class="inner">Blender and Pixel</div>
            <img src="./tapeImg/ble.png" class="tapeimg">
          </router-link>

          <router-link to="/other" class="image is-1280x720 column">
            <div class="inner">Other</div>
            <img src="./tapeImg/oth.png" class="tapeimg">
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
