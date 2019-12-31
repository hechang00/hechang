<template>
  <div class="block">
    <el-carousel
      :height="height"
      :initial-index="initialIndex"
      :autoplay="autoplay"
      :interval="interval"
      :type="type"
      :loop="loop"
      :indicator-position="indicatorPosition"
      :arrow="arrow"
      :direction="direction"
      @change="change"
    >
      <el-carousel-item v-for="(item,index) in carouselItems" :key="index+'$'+item.path">
        <component :is="getComponentFromPath(item.path)"></component>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import Vue from "vue";
import routable from "../routable";
export default {
  props: {
    height: {
      default: "300px"
    },
    initialIndex: {
      default: 0
    },
    autoplay: {
      default: true
    },
    interval: {
      default: 3000
    },
    indicatorPosition: {
      default: "outside"
    },
    arrow: {
      default: "hover"
    },
    type: {
      default: ""
    },
    loop: {
      default: true
    },
    direction: {
      default: "horizontal"
    },
    items: {
      default: function() {
        return [];
      }
    },
    renderMode: {
      default: "direct"
    }
  },
  data() {
    return {};
  },
  computed: {
    carouselItems: {
      get() {
        let data = [];
        if (!Array.isArray(this.items)) {
          return data;
        }
        for (let i = 0; i < this.items.length; i++) {
          if (
            Object.prototype.toString.call(this.items[i]) === "[object Object]"
          ) {
            if (!this.checkPathIsRepeat(data, this.items[i].path)) {
              data.push(this.items[i]);
            }
          }
        }
        return data;
      }
    }
  },
  methods: {
    change(index) {
      this.$emit("change", index);
    },
    getItemFromPath(path) {
      for (let item of this.items) {
        if (item.path == path) {
          return item;
        }
      }
      return undefined;
    },
    getComponentFromPath(path) {
      let routeItem = routable.get(path);
      return routeItem && routeItem.item ? routeItem.item.component : "";
    },
    checkPathIsRepeat(data, path) {
      let result = false;
      if (!Array.isArray(data)) {
        return result;
      }
      for (let i = 0; i < data.length; i++) {
        let a = Object.prototype.toString.call(data[i]);
        if (Object.prototype.toString.call(data[i]) === "[object Object]") {
          if (data[i].path === path) {
            result = true;
            break;
          }
        }
      }
      return result;
    }
  }
};
</script>
<style>
</style>