<template>
  <div>
    <div class="columns">
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
          </div>

          <hr>
        </div>

        <div class="prof">
          <span>Programming</span>
          <span>Languages</span>
          <p class="tex">HTML</p>
          <p class="tex">CSS</p>
          <p class="tex">JavaScript (Node.js)</p>
          <p class="tex">Python</p>
          <p class="tex">Go</p>
          <hr>
        </div>

        <div class="prof">
          <p class="tex">SNS</p>
          <a>Twitter</a>
          <br>
          <a>GitHub</a>
          <br>
          <a>Qiita</a>
          <br>
          <hr>
        </div>
      </div>

      <div class="column">
        <p class="product">Product</p>
        <div class="columns">
          <div class="image is-1280x720 column">
            <img src="./tapeImg/javascripttape.png" class="tapeimg" onclick="trans('javascript'); ">
          </div>

          <div class="image is-1280x720 column">
            <img src="./tapeImg/pythontape.png" class="tapeimg" onclick="trans('python')">
          </div>

          <div class="image is-1280x720 column">
            <img src="./tapeImg/gotape.png" class="tapeimg" onclick="trans('go')">
          </div>
        </div>

        <div class="columns">
          <div class="image is-1280x720 column">
            <img src="./tapeImg/blendertape.png" class="tapeimg" onclick="trans('blender')">
          </div>

          <div class="image is-1280x720 column">
            <img src="./tapeImg/magicatape.png" class="tapeimg" onclick="trans('magica')">
          </div>

          <div class="column"></div>
        </div>
      </div>
    </div>
  </div>
</template>
