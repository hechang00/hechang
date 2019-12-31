<template>
  <div class="wrap" :style="{'height':dealUnit(height,'auto'),'width':dealUnit(width,'auto')}">
    <img class="image" v-if="value" :src="value" :value="value">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      default: ""
    },
    valueRelated: {
      default: ""
    },
    width: {
      default: "auto"
    },
    height: {
      default: "auto"
    }
  },
  methods: {
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    }
  }
};
</script>

<style scoped>
.wrap {
  overflow: hidden;
  display: inline-block;
}
.image {
  max-width: 100%;
  max-height: 100%;
  background-size: 100% 100%;
}
</style>