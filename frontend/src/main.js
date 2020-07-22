import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' // 追記
import cookies from 'js-cookie' // 追記
import crypto from 'crypto' // 追記

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
Vue.use(BootstrapVue)

axios.defaults.baseURL = 'http://localhost:5000'

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.prototype.$cookies = cookies
Vue.prototype.$crypto = crypto

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
