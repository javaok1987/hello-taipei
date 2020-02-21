<template>
  <div class="card">
    <router-link :to="`./${aid}`" class="card-link">
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
        <div class="card-content__address" :title="address">
          {{ address }}
        </div>
        <div class="card-content__description">
          {{ introduction }}
        </div>
        <TagList :tags="category"></TagList>
      </div>
    </router-link>
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
    aid: {
      type: Number,
      required: true,
      default: 0,
    },
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
    address: {
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
  display: inline-flex;
  overflow: hidden;

  width: 300px;
  margin: 5px 5px 40px;

  transition: 0.3s;
  vertical-align: top;

  border-bottom: 2px solid #f1f1f1;
  background-color: $--color-ff;

  flex-wrap: wrap;

  &:hover {
    border-color: #d8d8d8;
    .card-thumb::before {
      opacity: 0.35;
      background-color: #333;
    }
  }
}

.card-link {
  width: 100%;
}

.card-content {
  position: relative;

  padding: 20px 16px 10px 16px;

  &__header {
    font-size: 1.375rem;

    overflow: hidden;

    margin-bottom: 10px;

    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &__address {
    font-size: 1rem;

    overflow: hidden;

    white-space: nowrap;
    text-overflow: ellipsis;

    color: #a16946;
  }

  &__description {
    font-size: 1rem;

    margin-top: 10px;

    text-align: left;
  }

  &__meta {
    font-size: 0.8rem;
    line-height: 50px;

    position: absolute;
    top: 5px;
    right: 5px;

    display: inline-block;

    width: 8vw;
    max-width: 50px;
    height: 8vw;
    max-height: 50px;
    padding: 0 6px;

    text-align: center;
    white-space: nowrap;

    color: $--color-ff;
    border: 1px solid $--color-ff;
    border-radius: 50%;
    background-color: #ba8baf;
  }

  &__description {
    display: -webkit-box;
    overflow: hidden;

    text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  @media screen and (max-width: 425px) {
    &__meta {
      display: none;
    }
  }
}

.card-thumb {
  position: relative;

  width: 100%;
  height: 30vw;
  max-height: 200px;

  &:before {
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;

    display: block;

    @include size(100%, 100%);

    content: '';
    transition: background-color 0.5s ease, opacity 0.5s ease;
    pointer-events: none;

    opacity: 0.4;
    background-color: $--color-ff;
  }

  figure {
    position: absolute;

    display: block;
    overflow: hidden;

    @include size(100%, 100%);

    background-color: $--color-ff;
  }

  img {
    @include size(100%, auto);
    @include center;
  }
}
</style>
