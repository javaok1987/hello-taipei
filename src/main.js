import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import 'normalize.css';

import '@/styles/main.scss';

Vue.config.productionTip = process.env.NODE_ENV === 'development';

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
