<template>
  <actionsheet
    v-model="propModel"
    :menus="menus"
    @on-click-menu="onMenuItemClick"
    :show-cancel="showCancel"
  ></actionsheet>
</template>

<script>
import Actionsheet from "vux/src/components/actionsheet/index.vue";
// import SwiperItem from 'vux/src/components/swiper/swiper-item'
export default {
  components: {
    Actionsheet
  },
  computed: {
    propModel: {
      get() {
        return this.show1;
      },
      set(value) {
        this.$emit("show1", value);
      }
    }
  },
  props: {
    menus: {
      default: function() {
        return {};
      }
    },
    showCancel: {
      default: true
    },
    show1: {
      default: true
    }
  },
  methods: {
    onMenuItemClick: function(index) {
      this.$emit("change", index);
    }
  }
};
</script>
