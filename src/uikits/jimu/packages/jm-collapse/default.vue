<template>
  <el-collapse :accordion="accordion" @change="handleChange" v-model="localActiveNames">
    <template v-if="!isDefined">
      <el-collapse-item
        v-for="(item,index) in items"
        :key="item.title +''+ index"
        :index="index + ''"
        :title="item.title"
        :name="item.name"
      >
        <template slot="title">
          {{item.title}}
          <i class="header-icon" :class="item.icon"></i>
        </template>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </el-collapse-item>
    </template>
    <template v-else>
      <el-collapse-item
        v-for="(item,index) in carouselItems"
        :key="item.title +''+ index"
        :index="index + ''"
        :title="item.title"
        :name="item.name"
      >
        <template slot="title">
          {{item.title}}
          <i class="header-icon" :class="item.icon"></i>
        </template>
        <div
          :style="{'text-align':textAlign}"
          v-for="(content,contIndex) in item.contents"
          :key="contIndex"
        >{{content.value}}</div>
        <component :is="getComponentFromPath(item.path)"></component>
      </el-collapse-item>
    </template>
  </el-collapse>
</template>

<script>
import Vue from "vue";
import routable from "../routable";
export default {
  props: {
    currentID:String,
    accordion: {
      default: false
    },
    items: {
      default: function() {
        return [];
      }
    },
    textAlign: {
      default: "left"
    },
    isDefined: {
      default: false
    },
    renderMode: {
      default: "direct"
    },
    activeNames: {
      default: function() {
        return [];
      }
    }
  },
  computed: {
    localActiveNames: {
      get() {
        return this.activeNames;
      },
      set(value) {
        this.$emit("input", value);
      }
    },
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
            if (
              !this.checkPathIsRepeat(data, this.items[i].path) &&
              this.items[i].visible
            ) {
              data.push(this.items[i]);
            }
          }
        }
        return data;
      }
    }
  },

  methods: {
    handleChange(value) {
      this.$emit("change", value);
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
<style scope>
.pageContent {
  background-color: #e5e5e5;
  height: 100%;
  font-size: 16px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
