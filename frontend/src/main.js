import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios' //追記

Axios.defaults.baseURL = 'http://localhost:5000'

Vue.config.productionTip = false
Vue.prototype.$axios = axios

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
