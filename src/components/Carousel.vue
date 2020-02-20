<template>
  <div class="card-carousel-wrapper">
    <div class="card-carousel--nav__left" :disabled="atHeadOfList" @click="moveCarousel(-1)"></div>
    <div class="card-carousel">
      <div class="card-carousel--overflow-container">
        <div class="card-carousel-cards" :style="{ transform: 'translateX' + '(' + currentOffset + 'px' + ')' }">
          <div v-for="(item, index) in items" :key="index" class="card-carousel--card" @click="showImage(item)">
            <figure>
              <img :src="item.src" />
            </figure>
          </div>
        </div>
      </div>
    </div>
    <div class="card-carousel--nav__right" :disabled="atEndOfList" @click="moveCarousel(1)"></div>
  </div>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
  data() {
    return {
      currentOffset: 0,
      windowSize: 3,
      paginationFactor: 220,
    };
  },
  computed: {
    atEndOfList() {
      return this.currentOffset <= this.paginationFactor * -1 * (this.items.length - this.windowSize);
    },
    atHeadOfList() {
      return this.currentOffset === 0;
    },
  },
  methods: {
    moveCarousel(direction) {
      if (direction === 1 && !this.atEndOfList) {
        this.currentOffset -= this.paginationFactor;
      } else if (direction === -1 && !this.atHeadOfList) {
        this.currentOffset += this.paginationFactor;
      }
    },
    showImage(image) {
      this.$emit('show-image', image);
    },
  },
};
</script>

<style lang="scss">
.card-carousel-wrapper {
  display: flex;

  margin: 20px 0 40px;

  background-color: #fafafc !important;
  border-bottom-width: 0 !important;
  color: $--color-gray;

  align-items: center;
  justify-content: center;
}

.card-carousel {
  display: flex;

  width: 640px;

  justify-content: center;

  &--overflow-container {
    overflow: hidden;
  }

  &--nav__left,
  &--nav__right {
    display: inline-block;

    box-sizing: border-box;
    width: 15px;
    height: 15px;
    margin: 0 20px;
    padding: 10px;

    cursor: pointer;
    transition: transform 150ms linear;

    border-top: 2px solid $--color-primary;
    border-right: 2px solid $--color-primary;
    &[disabled] {
      opacity: 0.2;
      border-color: black;
    }
  }

  &--nav__left {
    transform: rotate(-135deg);
    &:active {
      transform: rotate(-135deg) scale(0.9);
    }
  }

  &--nav__right {
    transform: rotate(45deg);
    &:active {
      transform: rotate(45deg) scale(0.9);
    }
  }
}

.card-carousel-cards {
  display: inline-flex;

  transition: transform 150ms ease-out;
  transform: translatex(0px);

  .card-carousel--card {
    line-height: 95px;

    position: relative;
    z-index: 3;

    overflow: hidden;

    width: 200px;
    height: 200px;
    margin: 0 10px;
    margin-bottom: 2px;

    cursor: pointer;

    border-radius: 4px;
    background-color: $--color-ff;
    box-shadow: 0 4px 15px 0 rgba(40, 44, 53, 0.06), 0 2px 2px 0 rgba(40, 44, 53, 0.08);

    &:first-child {
      margin-left: 0;
    }

    &:last-child {
      margin-right: 0;
    }
    figure {
      font-size: 0;

      position: absolute;
      top: 50%;
      left: 50%;

      height: 200px;

      transform: translate(-50%, -50%);
    }

    img {
      width: auto;
      height: 100%;
    }
  }
}
</style>
