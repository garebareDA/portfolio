'use strict';
import home from '../compo/home.vue';
import javascript from '../compo/js.vue';
import go from '../compo/go.vue';
import bleAndMagi from '../compo/bleAndMagi.vue';
import rs from '../compo/rs.vue';
import uni from '../compo/uni.vue';
import other from '../compo/other.vue';
import notFound from '../compo/notFound.vue';
import loading from '../compo/loading.vue';
import backButton from '../compo/button/back.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let routes = [
  { path: '/', component: home },
  { path: '/js', component: javascript },
  { path: '/go', component: go },
  { path: '/bleAndMagi', component: bleAndMagi },
  { path: '/rs', component: rs },
  { path: '/uni', component: uni },
  { path: '/other', component: other },
  { path: '*', component: notFound }
];

let router = new VueRouter({
  routes: routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 1000)
    })
  }
});

Vue.component('loading', loading);
Vue.component('backButton', backButton);

new Vue({
  el: '#app',
  router: router,
  data: () => {
    return {
      loading: false,
    }
  },

  created() {
    this.laoding();
  },

  watch: {
    '$route': 'laoding'
  },

  methods: {
    laoding: function () {
      this.$data.loading = true;

      setTimeout(() => {
        this.$data.loading = false;
      }, 1000);
    }
  }
});
