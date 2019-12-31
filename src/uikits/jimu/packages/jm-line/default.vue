<template>
  <hr
    :style="{'height':'0px','width':dealUnit(width,'auto'),'border':'none', 'border-top-width': dealUnit(size,'1px'),'border-top-style': type,'border-top-color': lineColor}"
    :horizontal="horizontal"
    v-if="isHorizontal"
  >
  <hr
    v-else
    :style="{'width':'0px','height':dealUnit(height,'auto'),'border':'none', 'border-left-width': dealUnit(size,'1px'),'border-left-style': type,'border-left-color': lineColor}"
    :horizontal="horizontal"
  >
</template>

<script>
export default {
  data() {
    return {
      isHorizontal: this.horizontal
    };
  },
  methods: {
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    }
  },
  computed: {},
  props: {
    width: {
      default: "1"
    },
    height: {
      default: "1"
    },
    size: {
      default: "1"
    },
    type: {
      default: "solid"
    },
    lineColor: {
      default: "rgb(85, 85, 85)"
    },
    horizontal: {
      default: true
    }
  }
};
</script>
