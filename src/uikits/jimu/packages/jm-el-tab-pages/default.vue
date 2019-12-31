<template type="" closable=false addable=false editable=false v-model="" tab-position=top stretch=false>
  <el-tabs
    v-model="activeName"
    :type="type"
    :stretch="stretch"
    :tab-position="position"
    @tab-click="handleClick"
    :editable="closable"
    @edit="handleTabsEdit"
    :before-leave="beforeChange"
  >
    <template v-for="(item,index) in tabsData">
      <el-tab-pane
        :key="index+'$'+item.path"
        :lazy="true"
        :label="item.label"
        :name="item.path"
        v-if="!item.hasOwnProperty('visible') || item.visible"
        style="overflow-y:auto">
        <keep-alive v-if="renderMode=='direct' && keepalive">
          <component :is="getComponentFromPath(item.path)"></component>
        </keep-alive>
        <keep-alive v-else-if="keepalive">
          <router-view v-if="activeName==item.path"></router-view>
        </keep-alive>
        <component v-else-if="renderMode=='direct'" :is="getComponentFromPath(item.path)"></component>
        <router-view v-else-if="activeName==item.path"></router-view>
      </el-tab-pane>
    </template>
    
  </el-tabs>
</template>
<script>
import Vue from "vue";
import routable from "../routable";
export default {
  props: {
    type: {
        default: ''
    },
    value: {
        default: ''
    },
    position: {
        default: 'top'
    },
    stretch: {
        default: false
    },
    items: {
        default: function() {
            return []
        }
    },
    closable: {
        default: false
    },
    renderMode: {
        default: 'router'
    },
    keepalive: {
        default: false
    },
    beforeRoute: Function
  },
  data() {
    return {
      itemActived: undefined
    };
  },
  computed: {
    tabsData: {
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
    },
    activeName: {
      get() {
        for(let i in this.items){
          if(this.value === this.items[i].path){
            this.$emit("selectedChange",this.items[i].label,this.value)
          }
        }
        return this.value;
      },
      set(curVal) {
        this.$emit("input", curVal);
        if (this.renderMode == "router") {
          //eleui new ver bug
          let item = this.getItemFromPath(curVal);
          if (item == this.itemActived) {
            return;
          }
          this.itemActived = item;
          if (!item) {
            return;
          }
          let path = item.uri || item.path;
          if (this.beforeRoute) path = this.beforeRoute(path) || path;
          routable.tryGoto(path);
        }
      }
    }
  },
  mounted() {
    this.autofix = function(force = false) {
      let found = false;
      for (let i in this.items) {
        let item = this.items[i];
        if (
          routable.router.currentRoute.fullPath == item.uri ||
          routable.matchUri(item.path)
        ) {
          this.activeName = item.path;
          found = true;
          break;
        }
      }
      if ((!this.activeName || force) && !found && this.items.length) {
        this.activeName = this.items[0].path;
      }
    };

    this.autofix.binder = this.autofix.bind(this, false);

    if (this.renderMode == "router") {
      if (!this.activeName || !routable.tryGoto(this.activeName, true)) {
        this.autofix(false);
      }
      window.addEventListener("popstate", this.autofix.binder);
    }
  },
  beforeDestroy() {
    window.removeEventListener("popstate", this.autofix.binder);
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
    },
    beforeChange(activeName, oldActiveName) {
      if (activeName == oldActiveName) {
        return false;
      }
      if (this.itemActived)
        this.itemActived.uri = routable.router.currentRoute.fullPath;
    },
    handleClick: function(tab, event) {
      this.$emit("tabClick", tab.label, tab.name);
    },
    handleTabsEdit(targetName, action) {
      if (action === "remove") {
        this.$emit("close", targetName);
        this.$nextTick(function() {
          if (targetName == this.activeName) {
            if (this.items.length) {
              this.activeName = this.items[0].path;
            }
          }
        });
      }
    }
  }
};
</script>