<template>
  <panel
    @on-click-item="getItem"
    :align="align"
    :footer="footer"
    :list="list"
    :type="type"
    @on-img-error="onImgError"
  ></panel>
</template>

<script>
import Panel from "vux/src/components/panel";
import Group from "vux/src/components/group";
export default {
  components: {
    Panel,
    Group
  },
  props: {
    type: {
      default: "1"
    },
    align: {
      default: "left"
    },
    list: {
      default: function() {
        return {};
      }
    },
    footer: {
      default: function() {
        return {};
      }
    }
  },
  methods: {
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    },
    onImgError: function(index, name) {},
    getItem: function(val) {
      this.$emit("click", val);
    }
  }
};
</script>
