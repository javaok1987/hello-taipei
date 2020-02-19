import Vue from 'vue';
import Vuex from 'vuex';

import { SET_ATTRACTION_ID, SET_ATTRACTION_LIST, SET_ATTRACTION_LIST_SIZE } from '@/store/mutations.type';
import { FETCH_ATTRACTION_INFO, FETCH_ATTRACTION_LIST } from '@/store/actions.type';

import * as AttractionService from '@/api/attraction';

Vue.use(Vuex);

const state = {
  lang: 'zh-tw',
  form: {
    categoryIds: '',
    page: '1',
  },
  total: 0,
  attractionList: [],
  attraction: {},
};

const getters = {
  form(state) {
    return state.form;
  },
};

const mutations = {
  [SET_ATTRACTION_ID](state, payload) {
    state.attraction = state.attractionList.find(function(item) {
      return item.id === parseInt(payload, 10);
    });
    console.log(state.attraction);
  },
  [SET_ATTRACTION_LIST](state, data) {
    state.attractionList = data;
  },
  [SET_ATTRACTION_LIST_SIZE](state, total) {
    state.total = total;
  },
};

const actions = {
  async [FETCH_ATTRACTION_LIST]({ state, commit }) {
    const { data, total } = await AttractionService.fetchAttractionList(state.form);
    commit(SET_ATTRACTION_LIST, data);
    commit(SET_ATTRACTION_LIST_SIZE, total);
  },
  async [FETCH_ATTRACTION_INFO]({ state, commit, dispatch }, attractionID) {
    if (state.attractionList.length === 0) {
      await dispatch(FETCH_ATTRACTION_LIST);
    }
    commit(SET_ATTRACTION_ID, attractionID);
  },
};

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
});
