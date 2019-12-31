<template>
  <div
    :class="type"
    :theName="iconName"
    :style="{'font-size': size + 'px','color': color }"
    @click="click"
  ></div>
</template>

<script>
export default {
  props: {
    size: {
      default: 24
    },
    color: {
      default: "#303133"
    },
    iconName: {
      default: ""
    },
    type: {
      default: "undefined"
    }
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style>
</style>
