<template>
  <div :style="{'height':dealUnit(height,'auto'),'width':dealUnit(width,'auto'),'min-height':dealUnit(minHeight,0)}">
    <div v-if='renderMode=="direct"'></div>
    <keep-alive v-else-if='keepalive'>
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>
<script>
import Vue from "vue";
import routable from "../routable";
export default {
  name:"jm-page",
   props: {
    value: {
      default: undefined
    },
    width: {
      default: "600"
    },
    height: {
      default: "600"
    },
    minHeight: {
      default: "600"
    },
    renderMode: {
      default: "router"
    },
    keepalive:{
      default: false
    }
  },
  watch: {
    value: {
      handler: function(newVal, oldVal) {
        if (this.renderMode == "direct") {
          if (this.loadPage && newVal) this.loadPage(newVal);
        } else {
          routable.tryGoto(newVal);
        }
      }
    }
  },
  computed:{
    localPath:{
      get(){
        return this.value
      },
      set(curVal){
        this.$emit("input",curVal)
      }
    }
  },
  mounted() {
    this.loadPage = function(path) {
      if (!this.$el) return;
      let entry = routable.get(path);
      let absPath = entry == null || path[0] == "/" ? path : entry.path + path;
      let comp = entry ? entry.item : null;
      if (!comp) return;
      let el = this.$el.children[0];
      let Component = Vue.extend(comp.component);
      let ins = new Component({
        store: routable.store
      });
      for (let iterator of el.children) {
        el.removeChild(iterator);
      }
      ins.$mount(el);
    }.bind(this);
    this.lsFuntion = function() {
      this.$emit("input", this.$router.currentRoute.fullPath);
    };

    if (this.renderMode == "direct") {
      if (this.value) this.loadPage(this.value);
    } else {
      const newUri = routable.tryGoto(this.value, true);
      if (newUri && newUri != this.value) {
        this.$emit("input", this.$router.currentRoute.fullPath);
      }
      window.addEventListener("popstate", this.lsFuntion.bind(this));
    }
  },
  beforeDestroy() {
    window.removeEventListener("popstate", this.lsFuntion.bind(this));
  },
  methods: {
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    }
  }
};
</script>
