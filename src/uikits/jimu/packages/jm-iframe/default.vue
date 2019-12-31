<template>
  <iframe
    class="wrap"
    :scrolling="scrolling"
    :src="url"
    :frameborder="frameborder"
    :style="{
        'flex':1,
    }"
  ></iframe>
</template>

<script>
export default {
  props: {
    url: {
      default: ""
    },
    scrolling: {
      default: "yes"
    },
    frameborder: {
      default: "1"
    }
  },
  methods: {}
};
</script>

<style scoped>
.wrap {
  display: flex;
  flex: 1;
}
</style>

