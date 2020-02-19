<template>
  <div class="about-wrapper">
    <header class="about-header">
      <h3>{{ attraction.name }}</h3>
    </header>

    <div class="about-content">
      <div class="about-section">
        <Carousel :items="attraction.images" @show-image="showModalImage"></Carousel>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <div class="about-section about-intro" v-html="attractionIntro"></div>
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
  async beforeRouteUpdate(to, from, next) {
    return next();
  },
  async beforeRouteEnter(to, from, next) {
    await store.dispatch(`${FETCH_ATTRACTION_INFO}`, to.params.attractionID);
    return next();
  },
  async beforeRouteLeave(to, from, next) {
    next();
  },
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
  methods: {
    showModalImage(image) {
      this.modalImage = image;
      this.showModal = true;
    },
  },
};
</script>

<style lang="scss">
.about-wrapper {
  margin: 10px auto;
  overflow: hidden;
}

.about-header {
  text-align: left;
}

.about-content {
  width: 70%;
  float: left;
  @media screen and (max-width: 1080px) {
    width: 100%;
    float: none;
  }
}

.about-section {
  margin-bottom: 50px;
  padding: 1rem;
  @media screen and (max-width: 1080px) {
    margin-bottom: 30px;
  }
}

.about-slider {
  width: 29%;
  float: right;
  border: solid 1px #ccc;
  @media screen and (max-width: 1080px) {
    width: 100%;
    float: none;
  }
}

.travel-map {
  height: 250px;
}

.about-intro {
  text-align: left;
  position: relative;
  background: #fff;
  border-bottom: 2px solid #f1f1f1;

  &:hover {
    border-color: #d8d8d8;
  }
}
</style>
