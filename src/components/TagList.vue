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
  font-size: 0;
  line-height: 22px;

  overflow: hidden;

  height: 40px;
  padding: 0;

  text-align: left;
  li {
    font-size: 12px;

    display: inline-block;

    margin-top: 10px;
    margin-right: 3px;
    padding: 0 5px;

    text-align: center;

    color: #666;
    background-color: #f2f2f2;
  }
}
</style>
