<template>
  <div v-html="html"></div>
</template>
<script>
export default {
  data() {
    return {};
  },
  props: {
    html: {
      default: ""
    }
  }
};
</script>
