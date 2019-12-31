<template>
  <swiper
    :list="lists"
    v-model="propModel"
    :showDots="showDots"
    :auto="auto"
    :loop="loop"
    :dots-position="dotsPosition"
    :min-moving-distance="120"
    @on-index-change="onIndexChange"
  ></swiper>
</template>

<script>
import Swiper from "vux/src/components/swiper/swiper.vue";
// import SwiperItem from 'vux/src/components/swiper/swiper-item'
export default {
  components: {
    Swiper
  },
  computed: {
    propModel: {
      get() {
        return this.index;
      },
      set(value) {
        this.$emit("index", value);
      }
    }
  },
  props: {
    lists: {
      default: function() {
        return {};
      }
    },
    index: {
      default: ""
    },
    showDots: {
      default: true
    },
    auto: {
      default: true
    },
    loop: {
      default: true
    },
    dotsPosition: {
      default: "left"
    }
  },
  methods: {
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    },
    onIndexChange: function(index) {
      this.$emit("change", index);
    }
  }
};
</script>
