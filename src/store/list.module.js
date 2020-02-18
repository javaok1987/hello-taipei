import { SET_ATTRACTION_LIST, SET_ATTRACTION_LIST_SIZE } from '@/store/mutations.type';
import { FETCH_ATTRACTIONS } from '@/store/actions.type';

import * as AttractionService from '@/api/attraction';

const state = {
  lang: 'zh-tw',
  form: {
    categoryIds: '',
    page: '1',
  },
  total: 0,
  attractionList: [],
};

const getters = {
  form(state) {
    return state.form;
  },
};

const mutations = {
  [SET_ATTRACTION_LIST](state, data) {
    state.attractionList = data;
  },
  [SET_ATTRACTION_LIST_SIZE](state, total) {
    state.total = total;
  },
};

const actions = {
  async [FETCH_ATTRACTIONS]({ state, commit }) {
    const { data, total } = await AttractionService.fetchAttractionList(state.form);
    commit(SET_ATTRACTION_LIST, data);
    commit(SET_ATTRACTION_LIST_SIZE, total);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
