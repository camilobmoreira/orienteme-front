import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import VueAxios from 'vue-axios'
import axios from './config/axios'
import './plugins/vuetify'

Vue.use(VueAxios, axios)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
