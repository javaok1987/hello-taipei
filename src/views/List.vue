<template>
  <div class="list">
    <SearchResultTable></SearchResultTable>
  </div>
</template>

<script>
import { FETCH_ATTRACTION_LIST } from '@/store/actions.type';

import SearchResultTable from '@/components/SearchResultTable';

import store from '@/store';

export default {
  name: 'List',
  components: {
    SearchResultTable,
  },
  data() {
    return {};
  },
  computed: {},
  async beforeRouteUpdate(to, from, next) {
    return next();
  },
  async beforeRouteEnter(to, from, next) {
    if (!store.state.attractionList) {
      await store.dispatch(`${FETCH_ATTRACTION_LIST}`);
    }
    return next();
  },
  async beforeRouteLeave(to, from, next) {
    next();
  },
  mounted() {
    document.getElementsByTagName('body')[0].classList.add('dom-ready');
  },
};
</script>
