'use strict';
import home from '../compo/home.vue';
import javascript from '../compo/js.vue';
import python from '../compo/py.vue';
import go from '../compo/go.vue';
import blender from '../compo/ble.vue';
import magica from '../compo/magi.vue';
import Vue from 'vue'

Vue.component('home', home);
Vue.component('javascript', javascript);
Vue.component('python', python);
Vue.component('go', go);
Vue.component('blender', blender);
Vue.component('magica', magica);

var app = new Vue({
  el: '#app',
  data: {
    currentPage : 'home',
  },

  methods : {
    transPage : function(page){
      this.currentPage = page;
    }
  }

});

function scroll(){
  window.scrollTo(0,0);
}


window.trans = function (page){
  app.transPage(page);
  scroll();
}

