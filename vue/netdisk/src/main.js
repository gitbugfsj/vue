// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/stylesheet/base.css'
import Axios from 'axios' // 后台交互
Vue.prototype.$http = Axios
// defaults 设置全局默认路径
Axios.defaults.baseURL = './'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
