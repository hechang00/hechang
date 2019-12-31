<template>
  <ve-pie
    ref="chart"
    :events="chartEvents"
    :width="localWidth"
    :height="localHeight"
    :theme="vchartTheme"
    :data="{columns:columns,rows:rows}"
    :settings="Object.assign({dataType:dataType,selectedMode:selectedMode,radius:radius,limitShowNum:limitShowNum,digit:digit},settings)"
    :extend="extend"
    @ready="ready"
    @ready-once="readyOnce"
    :mark-line="markLine"
    :mark-point="markPoint"
    :mark-area="markArea"
    :loading="loading"
    :data-empty="dataEmpty"
    :before-config="beforeConfig"
    :after-config="afterConfig"
    :after-set-option="afterSetConfig"
    :after-set-option-once="afterSetOptionOnce"
  ></ve-pie>
</template>

<script>
import VePie from "v-charts/lib/pie.common";
import "v-charts/lib/style.css";
import "echarts/lib/component/markLine";
import "echarts/lib/component/markPoint";
import "echarts/lib/component/markArea";
const light = require("../vchart-config/fit_echarts.json").theme;
const dark = require("../vchart-config/fit_echarts_dark.json").theme;
import {
  mixin,
  globalMethod,
  gloablProps
} from "../vchart-config/chartEvent.js";
let themeConfig = { light, dark };
export default {
  mixins: [mixin],
  components: {
    VePie
  },
  props: {
    width: {
        default: '100%'
    },
    height: {
        default: '400'
    },
    theme: {
        default: 'light'
    },
    columns: {
        default: function() {
            return []
        }
    },
    rows: {
        default: function() {
            return []
        }
    },
    dataType: {
        default: 'percent'
    },
    selectedMode: {
        default: ''
    },
    radius: {
        default: 80
    },
    limitShowNum: {
        default: 0
    },
    digit: {
        default: 2
    },
    extend: {
        default: function() {
            return {}
        }
    },
    markLine: {
        default: function() {
            return {}
        }
    },
    markPoint: {
        default: function() {
            return {}
        }
    },
    markArea: {
        default: function() {
            return {}
        }
    },
    loading: {
        default: false
    },
    dataEmpty: {
        default: false
    },
    beforeConfig: Function,
    afterConfig: Function,
    afterSetConfig: Function,
    afterSetOptionOnce: Function
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
    },
    vchartTheme: {
      get() {
        return themeConfig[this.theme];
      }
    }
  },
  methods: {
    dealUnit(value, defaultValue) {
      return value === "" ? defaultValue : isNaN(value) ? value : value + "px";
    }
  }
};
</script>
