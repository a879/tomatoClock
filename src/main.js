// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vuex from 'vuex'
import store from '@/store/'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(vuex)
Vue.use(ElementUI)
Vue.config.productionTip = false

Vue.component('fruit-tomato',{
  data() {
    return {
      count: 0
    }
  },
  template:  `<div @click="count++">{{count}}
    <span>fruit-tomato 全局组件</span> </div> `,
  methods: {
    c_color: function(e) {
      console.log(e)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
