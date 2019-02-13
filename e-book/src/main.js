import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import getters from './store/getters';
import './assets/styles/global.scss';
import './assets/styles/icon.css';

Vue.config.productionTip = false

new Vue({
  router,
  store,
  getters,
  render: h => h(App)
}).$mount('#app')
