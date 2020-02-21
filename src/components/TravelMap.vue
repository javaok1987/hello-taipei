<template>
  <GoogleMapLoader :map-config="mapConfig" api-key="AIzaSyDKefBO8elLL_dzNOd94xHk93vd0IFAes8">
    // insert your google maps api key to render styled map
    <template slot-scope="{ google, map }">
      <GoogleMapMarker :marker="marker" :google="google" :map="map" />
    </template>
  </GoogleMapLoader>
</template>

<script>
import GoogleMapLoader from '@/components/GoogleMapLoader';
import GoogleMapMarker from '@/components/GoogleMapMarker';

import { mapSettings } from '@/constants/mapSettings';

export default {
  components: {
    GoogleMapLoader,
    GoogleMapMarker,
  },
  props: {
    marker: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },

  computed: {
    mapConfig() {
      return {
        ...mapSettings,
        center: this.marker.position,
      };
    },
  },
};
</script>
