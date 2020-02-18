<template>
  <div class="card">
    <a :href="url" target="_blank">
      <div class="card-thumb">
        <figure>
          <img :src="getAvatar" :alt="name" />
        </figure>
        <div class="card-content__meta">
          {{ distric }}
        </div>
      </div>
      <div class="card-content">
        <div class="card-content__header" :title="name">{{ name }}</div>
        <div class="card-content__description">
          {{ introduction }}
        </div>
        <TagList :tags="category"></TagList>
      </div>
    </a>
  </div>
</template>

<script>
import TagList from '@/components/TagList';

export default {
  name: 'Card',
  components: {
    TagList,
  },
  props: {
    name: {
      type: String,
      required: true,
      default: '',
    },
    introduction: {
      type: String,
      required: false,
      default: '',
    },
    distric: {
      type: String,
      required: false,
      default: '',
    },
    category: {
      type: Array,
      required: false,
      default: () => [],
    },
    images: {
      type: Array,
      required: false,
      default: () => [],
    },
    url: {
      type: String,
      required: false,
      default: '',
    },
  },
  computed: {
    getAvatar() {
      if (this.images && this.images.length !== 0) {
        return `${this.images[0].src}`;
      }
      return '';
    },
  },
};
</script>

<style lang="scss">
.card {
  transition: 0.3s;
  display: inline-flex;
  flex-wrap: wrap;
  width: 30vw;
  max-width: 300px;
  min-width: 300px;
  margin: 5px 5px 40px;
  background-color: #fff;
  border-bottom: 2px solid #f1f1f1;
  vertical-align: top;
  overflow: hidden;
  &:hover {
    border-color: #d8d8d8;
  }
}

.card-content {
  position: relative;
  padding: 20px 16px 10px 16px;
  width: 100%;
  &__header {
    font-size: 1.375rem;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }
  &__meta {
    position: absolute;
    text-align: center;
    top: 5px;
    right: 5px;
    background-color: #409eff;
    color: #fff;
    display: inline-block;
    font-size: 0.8rem;
    width: 8vw;
    max-width: 50px;
    height: 8vw;
    max-height: 50px;
    line-height: 50px;
    padding: 0 6px;
    text-align: center;
    white-space: nowrap;
    border: 1px solid #fff;
    border-radius: 50%;
  }
  @media screen and (max-width: 425px) {
    &__meta {
      display: none;
    }
  }
  &__description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }
}
.card-thumb {
  position: relative;
  width: 100%;
  height: 30vw;
  max-height: 200px;
  figure {
    margin: 0;
    display: block;
    position: absolute;
    background: #fff;
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  img {
    position: absolute;
    max-width: 100%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
