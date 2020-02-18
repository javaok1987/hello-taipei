<template>
  <ul class="tag-list">
    <li v-for="tag of tags" :key="tag.id" class="tag">
      <span v-text="tag.name" />
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TagList',
  props: {
    tags: {
      type: Array,
      required: false,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
.tag-list {
  line-height: 22px;
  font-size: 0;
  height: 40px;
  padding: 0;
  text-align: left;
  overflow: hidden;
  li {
    font-size: 12px;
    display: inline-block;
    text-align: center;
    margin-right: 3px;
    padding: 0 5px;
    background-color: #f2f2f2;
    color: #666;
    font-size: 12px;
    margin-top: 10px;
  }
}
</style>
