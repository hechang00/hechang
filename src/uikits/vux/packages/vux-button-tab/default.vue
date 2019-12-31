<template>
  <button-tab>
    <button-tab-item
      @on-item-click="onItemClick(index, item.page)"
      v-for="(item, index) in items"
      :key="index"
      :selected="item.selected"
    >{{item.tabLabel}}</button-tab-item>
  </button-tab>
</template>

<script>
import ButtonTab from "vux/src/components/button-tab/button-tab";
import ButtonTabItem from "vux/src/components/button-tab/button-tab-item";
export default {
  components: {
    ButtonTab,
    ButtonTabItem
  },
  props: {
    items: {
      default: function() {
        return {};
      }
    }
  },
  methods: {
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    },
    onItemClick: function(index, name) {
      this.$emit("click", index, name);
    }
  }
};
</script>
