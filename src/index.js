'use strict';
import home from '../compo/home.vue';
import javascript from '../compo/js.vue';
import python from '../compo/py.vue';
import go from '../compo/go.vue';
import blender from '../compo/ble.vue';
import magica from '../compo/magi.vue';
import other from '../compo/other.vue';
import notFound from '../compo/notFound.vue';
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

let routes = [
  { path: '/', component: home},
  { path: '/js', component: javascript},
  { path:'/py', component: python},
  { path:'/go', component: go},
  { path:'/ble', component: blender},
  { path:'/magi', component: magica},
  { path:'/other', component: other},
  { path:'*', component: notFound}
];

let router = new VueRouter({
  routes: routes,
  scrollBehavior (to, from, savedPosition) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({ x: 0, y: 0 })
      }, 400)
    })
  }
});

new Vue({
  el: '#app',
  router: router,
});
