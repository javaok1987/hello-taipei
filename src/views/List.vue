<template>
  <div class="list">
    <SearchBar></SearchBar>
    <SearchResultTable></SearchResultTable>
  </div>
</template>

<script>
import { FETCH_ATTRACTIONS } from '@/store/actions.type';

import SearchBar from '@/components/SearchBar';
import SearchResultTable from '@/components/SearchResultTable';

import store from '@/store';

export default {
  name: 'List',
  components: {
    SearchBar,
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
    await store.dispatch(`listModule/${FETCH_ATTRACTIONS}`);
    return next();
  },
  async beforeRouteLeave(to, from, next) {
    next();
  },
  mounted() {},
};
</script>
