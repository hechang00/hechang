<template>
  <div class="block" :style="{'text-align':textAlign}">
    <el-timeline :reverse="reverse">
      <template v-if="!isDefault">
        <el-timeline-item
          v-for="(activity, index) in items"
          :key="index"
          :placement="placement"
          :icon="activity.icon"
          :type="activity.type"
          :color="activity.color"
          :size="activity.size"
          :timestamp="activity.timestamp"
        >{{activity.content}}</el-timeline-item>
      </template>
      <template v-else>
        <el-timeline-item
          v-for="(item,index) in timeLineData"
          :key="index+'$'+item.path"
          :placement="placement"
          :icon="item.icon"
          :type="item.type"
          :color="item.color"
          :size="item.size"
          :timestamp="item.timestamp"
        >
          {{item.content}}
          <component :is="getComponentFromPath(item.path)"></component>
        </el-timeline-item>
      </template>
    </el-timeline>
  </div>
</template>
<script>
import Vue from "vue";
import routable from "../routable";
export default {
  props: {
    currentID:String,
    reverse: {
      default: false
    },
    placement: {
      default: "top"
    },
    textAlign: {
      default: "left"
    },
    items: {
      default: function() {
        return [];
      }
    },
    isDefault: {
      default: true
    },
    renderMode: {
      default: "direct"
    }
  },
  data() {
    return {};
  },
  computed: {
    timeLineData: {
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
