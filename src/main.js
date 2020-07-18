import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import 'assets/css/common.less'

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')