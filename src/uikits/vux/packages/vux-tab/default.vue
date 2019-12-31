<template>
  <tab>
    <tab-item
      @on-item-click="onItemClick(index, item.page)"
      v-for="(item, index) in items"
      :key="index"
      :selected="item.selected"
    >{{item.tabLabel}}</tab-item>
  </tab>
</template>

<script>
import Tab from "vux/src/components/tab/tab";
import TabItem from "vux/src/components/tab/tab-item";
export default {
  components: {
    Tab,
    TabItem
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
