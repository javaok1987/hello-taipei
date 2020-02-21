<template>
  <div class="about-wrapper">
    <header class="about-header">
      <h3>{{ attraction.name }}</h3>
    </header>

    <div class="about-content">
      <section class="about-section">
        <h4>景點資訊</h4>
        <div class="about-info">
          <p v-if="attraction.tel.length !== 0">電話：{{ attraction.tel }}</p>
          <p v-if="attraction.address.length !== 0">
            地址：{{ attraction.address }}
            <a :href="`https://www.google.com.tw/maps/dir//${attraction.nlat},${attraction.elong}`" target="_blank"
              >導航</a
            >
          </p>
          <p v-if="attraction.target.length !== 0">
            推薦對象：
            <span v-for="item in attraction.target" :key="item.id"> {{ item.name }}｜ </span>
          </p>
          <p v-if="attraction.service.length !== 0">
            服務設施：
            <span v-for="item in attraction.service" :key="item.id"> {{ item.name }}｜ </span>
          </p>
        </div>
      </section>

      <section class="about-section">
        <h4>景點介紹</h4>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div class="about-intro" v-html="attractionIntro"></div>
      </section>

      <section v-if="attraction.images && attraction.images.length > 0" class="about-section">
        <h4>景點照片</h4>
        <Carousel :items="attraction.images" @show-image="showModalImage"></Carousel>
      </section>
    </div>

    <aside class="about-slider">
      <TravelMap class="travel-map" :marker="attractionMarker" />
    </aside>

    <Modal v-show="showModal" @close="showModal = false">
      <template slot="body">
        <img :src="modalImage.src" class="modal-image" />
      </template>
      <template slot="footer">
        <p>{{ modalImage.subject ? modalImage.subject : '' }}</p>
      </template>
    </Modal>
  </div>
</template>

<script>
import XSSFilters from 'xss-filters';

import Carousel from '@/components/Carousel';
import Modal from '@/components/Modal';
import TravelMap from '@/components/TravelMap';

import { FETCH_ATTRACTION_INFO } from '@/store/actions.type';
import { mapState } from 'vuex';

import store from '@/store';

export default {
  name: 'About',
  components: {
    Carousel,
    Modal,
    TravelMap,
  },
  props: {
    attractionID: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      showModal: false,
      modalImage: {},
    };
  },
  computed: {
    ...mapState({
      attraction: (state) => state.attraction,
    }),
    attractionIntro() {
      let intro = XSSFilters.inHTMLData(this.attraction.introduction);
      return intro ? intro.replace(/(?:\r\n|\r|\n)/g, '<br />') : '';
    },
    attractionMarker() {
      return {
        id: this.attraction.id,
        position: {
          lat: this.attraction.nlat,
          lng: this.attraction.elong,
        },
      };
    },
  },
  mounted() {
    document.getElementsByTagName('body')[0].classList.add('dom-ready');
  },
  methods: {
    showModalImage(image) {
      this.modalImage = image;
      this.showModal = true;
    },
  },
  async beforeRouteUpdate(to, from, next) {
    return next();
  },
  async beforeRouteEnter(to, from, next) {
    await store.dispatch(`${FETCH_ATTRACTION_INFO}`, to.params.attractionID);
    if (!store.state.attraction) {
      return next('/list');
    }
    return next();
  },
  async beforeRouteLeave(to, from, next) {
    next();
  },
};
</script>

<style lang="scss">
.about-wrapper {
  overflow: hidden;

  margin: 10px auto;

  a {
    color: $--color-primary;
    &:hover {
      font-weight: $font-weight-bold;
      border-bottom: 1px solid $--color-warning;
      color: $--color-warning;
    }
  }
}

.about-header {
  text-align: left;
}

.about-content {
  float: left;

  width: 70%;
  padding: 10px;

  text-align: left;
  h4 {
    margin-top: 0;
    margin-bottom: 15px;
  }
  @media screen and (max-width: $breakpoint) {
    float: none;

    width: 100%;
  }
}

.about-section {
  margin-bottom: 50px;
  > div {
    position: relative;

    padding: 20px;

    text-align: left;

    border-bottom: 2px solid #f1f1f1;
    background-color: $--color-ff;

    &:hover {
      border-color: #d8d8d8;
    }
  }
  @media screen and (max-width: $breakpoint) {
    margin-bottom: 30px;
  }
}

.about-slider {
  float: right;

  width: 29%;
  margin-top: 30px;
  @media screen and (max-width: $breakpoint) {
    float: none;

    width: 100%;
    margin-top: 0;
  }
}

.travel-map {
  height: 250px;
}
</style>
