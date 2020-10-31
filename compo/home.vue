<template>
  <div>
    <div class="columns is-gapless" is-gapless>
      <div class="column is-one-quarter">
        <div class="prof">
          <p class="tex">Portfolio</p>
        </div>

        <div class="prof">
          <div>
            <p class="tex">Name</p>
            <p class="tex">田中大貴</p>
          </div>

          <div>
            <p class="tex">HandleName</p>
            <p class="tex">ガレバレ</p>
          </div>

          <div>
            <p class="tex">Education</p>
            <p class="tex">2017-N高等学校</p>
            <p class="tex">2020-サイバー大学</p>
          </div>

          <hr />
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
          <hr />
        </div>

        <div class="prof">
          <p class="tex">SNS</p>
          <a href="https://twitter.com/garebare521" target="_blank">Twitter</a>
          <br />
          <a href="https://github.com/garebareDA" target="_blank">GitHub</a>
          <br />
          <a href="https://qiita.com/DA_garebare" target="_blank">Qiita</a>
          <br />
          <hr />
        </div>
      </div>

      <div class="column">
        <p class="product">Product</p>

        <div class="columns is-gapless">
          <router-link to="/js" class="image is-1280x720 column">
            <div class="inner">JavaScript</div>
            <img src="./img/tapeImg/js.png" class="tapeimg" />
          </router-link>

          <router-link to="/go" class="image is-1280x720 column">
            <div class="inner">GoLang</div>
            <img src="./img/tapeImg/go.png" class="tapeimg" />
          </router-link>

          <router-link to="/rs" class="image is-1280x720 column">
            <div class="inner">Rust</div>
            <img src="./img/tapeImg/rs.png" class="tapeimg" />
          </router-link>
        </div>

        <div class="columns is-gapless">
          <router-link to="/uni" class="image is-1280x720 column">
            <div class="inner">Unity</div>
            <img src="./img/tapeImg/uni.png" class="tapeimg" />
          </router-link>

          <router-link to="/bleAndMagi" class="image is-1280x720 column">
            <div class="inner">Blender and Pixel</div>
            <img src="./img/tapeImg/ble.png" class="tapeimg" />
          </router-link>

          <router-link to="/other" class="image is-1280x720 column">
            <div class="inner">Other</div>
            <img src="./img/tapeImg/oth.png" class="tapeimg" />
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
