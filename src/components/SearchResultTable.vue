<template>
  <section class="search-result-table">
    <Card
      v-for="item in tableData"
      :key="item.id"
      :name="item.name"
      :introduction="item.introduction"
      :distric="item.distric"
      :category="item.category"
      :images="item.images"
      :url="item.url"
    ></Card>
  </section>
</template>

<script>
import * as MUTATIONS from '@/store/mutations.type';
import * as ACTIONS from '@/store/actions.type';

import { createNamespacedHelpers } from 'vuex';

const { mapState, mapGetters, mapMutations, mapActions } = createNamespacedHelpers('listModule');

import Card from '@/components/Card';

export default {
  name: 'SearchResultTable',
  components: {
    Card,
  },
  props: {
    items: {
      type: String,
      required: false,
      default: 'array',
    },
  },
  computed: {
    ...mapState({
      searchForm: (state) => state.form,
      tableData: (state) => state.attractionList,
      totalLen: (state) => state.total,
    }),
  },
  methods: {},
};
</script>

<style lang="scss">
.search-result-table {
}
</style>
