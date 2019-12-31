<template>
  <div :style="{height: localHeight, width: localWidth}">
    <div
      v-if="loading"
      :style="{height: localHeight, width: localWidth}"
      style="position: relative"
    >
      <div class="v-charts-component-loading">
        <div class="loader">
          <div class="loading-spinner">
            <svg class="circular" viewBox="25 25 50 50">
              <circle class="path" cx="50" cy="50" r="20" fill="none"></circle>
            </svg>
          </div>
        </div>
      </div>
    </div>
    <div
      v-else-if="dataEmpty"
      style="position: relative"
      :style="{height: localHeight, width: localWidth}"
    >
      <div class="v-charts-data-empty">暂无数据</div>
    </div>
    <e-charts
      v-else
      :style="{height: localHeight, width: localWidth}"
      :options="(typeof options === 'function')?options():{}"
      autoresize
      @click="click"
      @dblclick="dblclick"
      @mousedown="mousedown"
      @mousemove="mousemove"
      @mouseup="mouseup"
      @mouseover="mouseover"
      @mouseout="mouseout"
      @getChart="getChart"
    ></e-charts>
  </div>
</template>

<style>
.echarts {
  width: 100%;
  height: 100%;
}

.v-charts-data-empty {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  color: #888;
  font-size: 14px;
}

.v-charts-component-loading {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
}

.v-charts-mask-status {
  filter: blur(1px);
}

.v-charts-component-loading .circular {
  width: 42px;
  height: 42px;
  animation: loading-rotate 2s linear infinite;
}

.v-charts-component-loading .path {
  animation: loading-dash 1.5s ease-in-out infinite;
  stroke-dasharray: 90, 150;
  stroke-dashoffset: 0;
  stroke-width: 2;
  stroke: #20a0ff;
  stroke-linecap: round;
}

@keyframes loading-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes loading-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -40px;
  }
  100% {
    stroke-dasharray: 90, 150;
    stroke-dashoffset: -120px;
  }
}
</style>

<script>
import ECharts from "./ECharts.vue";
import { globalMethod } from "../vchart-config/chartEvent.js";

let imported_methods = Object.assign({}, globalMethod);
delete imported_methods.ready;
delete imported_methods.readyOnce;

export default {
  components: { ECharts },
  props: {
    currentID:String,
    width: {
      default: "100%"
    },
    height: {
      default: "400"
    },
    options: Function,
    loading:{
      default:false
    },
    dataEmpty:{
      default:false
    }
  },
  computed: {
    localWidth: {
      get() {
        return this.dealUnit(this.width, "auto");
      }
    },
    localHeight: {
      get() {
        return this.dealUnit(this.height, "auto");
      }
    }
  },
  methods: {
    getChart(echart){
      this.$emit("getChart",echart)
    },
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    },
    click: function(e) {
      this.$emit("click", e);
    },
    dblclick: function(e) {
      this.$emit("dblclick", e);
    },
    mousedown: function(e) {
      this.$emit("mousedown", e);
    },
    mousemove: function(e) {
      this.$emit("mousemove", e);
    },
    mouseup: function(e) {
      this.$emit("mouseup", e);
    },
    mouseover: function(e) {
      this.$emit("mouseover", e);
    },
    mouseout: function(e) {
      this.$emit("mouseout", e);
    }
  }
};
</script>
