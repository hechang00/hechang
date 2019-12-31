<template>
  <x-header
    @on-click-back="onClickBack"
    @on-click-more="onClickMore"
    :right-options="{showMore:showMore}"
    :left-options="{showBack:showBack, preventGoBack:preventGoBack, backText:backText}"
    :style="{'background-color':backgroundColor}"
  >{{title}}</x-header>
</template>

<script>
import XHeader from "vux/src/components/x-header";
export default {
  components: {
    XHeader
  },
  props: {
    title: {
      default: ""
    },
    backgroundColor: {
      default: ""
    },
    showBack: {
      default: true
    },
    showMore: {
      default: true
    },
    preventGoBack: {
      default: true
    },
    backText: {
      default: ""
    }
  },
  methods: {
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    },
    onClickBack: function() {
      this.$emit("click");
    },
    onClickMore: function() {
      this.$emit("clickMore");
    }
  }
};
</script>
