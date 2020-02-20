<template>
  <section class="search-result-table">
    <Card
      v-for="item in tableData"
      :key="item.id"
      :aid="item.id"
      :name="item.name"
      :introduction="item.introduction"
      :distric="item.distric"
      :address="item.address"
      :category="item.category"
      :images="item.images"
    ></Card>
  </section>
</template>

<script>
import { mapState } from 'vuex';

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
};
</script>
