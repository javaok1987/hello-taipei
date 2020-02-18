import Vue from 'vue';
import Vuex from 'vuex';

import listModule from './list.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    listModule,
  },
});
