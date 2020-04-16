<template>
    <div>
      <div align="center">
        <hr class="start">
      </div>
      <p class="t">{{contents.title}}</p>
      <video
        controls
        webkit-playsinline
        playsinline
        autoplay
        loop
        muted
        name="media"
        class="jsImg sizeImg"
        v-if="contents.isVideo"
      >
        <source v-bind:src="contents.URL" type="video/mp4">
      </video>
      <img v-if="contents.isVideo == false" v-bind:src="contents.URL" class="sizeImg jsImg">
      <div></div>
      <a
        v-bind:href="contents.githubURL"
        target="_blank"
        class="button is-dark is-inverted is-outlined"
      >GitHub</a>

      <a
        v-if="contents.other == 'firebase'"
        v-bind:href="contents.otherURL"
        target="_blank"
        class="button is-dark is-inverted is-outlined"
      >Firebase</a>

      <a
        v-if="contents.other == 'heroku'"
        v-bind:href="contents.otherURL"
        target="_blank"
        class="button is-dark is-inverted is-outlined"
      >Heroku</a>
    </div>
</template>

<script>
export default {
    name:'contents',
    props: ['contents']
}
</script>