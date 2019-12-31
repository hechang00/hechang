<template>
  <line-multiple
    ref="chart"
    :events="chartEvents"
    :width="localWidth"
    :height="localHeight"
    :data="{columns:columns,rows:rows}"
    :theme="vchartTheme"
    :settings="Object.assign({yAxisName, xAxisType, yAxisType, yAxisPosition, area, min, max, digit},settings)"
    :grid="grid"
    :extend="extend"
    @ready="ready"
    @ready-once="readyOnce"
    :mark-line="markLine"
    :mark-point="markPoint"
    :mark-area="markArea"
    :loading="loading"
    :data-empty="dataEmpty"
    :multipleYAxis="multipleYAxis"
    :before-config="beforeConfig"
    :after-config="afterConfig"
    :after-set-option="afterSetConfig"
    :after-set-option-once="afterSetOptionOnce"
    :tooltipFormatter="tooltipFormatter"
    :xAxisFormatter="xAxisFormatter"
    :yAxisFormatter="yAxisFormatter"
  ></line-multiple>
</template>

<script>
import VeLineMultiple from "./ve-line-multiple";
import "v-charts/lib/style.css";
import "echarts/lib/component/markLine";
import "echarts/lib/component/markPoint";
import "echarts/lib/component/markArea";
import {
  gloablProps,
  globalMethod,
  mixin
} from "../vchart-config/chartEvent.js";

const light = require("../vchart-config/fit_echarts.json").theme;
const dark = require("../vchart-config/fit_echarts_dark.json").theme;

let themeConfig = { light, dark };
export default {
  mixins: [mixin],
  components: {
    LineMultiple: VeLineMultiple
  },
  props:{
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
    multipleYAxis: {
        default: false
    },
    yAxisName: {
        default: ''
    },
    xAxisType: {
        default: ''
    },
    yAxisType: {
        default: function() {
            return []
        }
    },
    area: {
        default: false
    },
    minMax: {
        default: function() {
            return []
        }
    },
    yAxisPosition: {
        default: function() {
            return []
        }
    },
    digit: {
        default: 2
    },
    extend: {
        default: function() {
            return {}
        }
    },
    tooltipFormatter: Function,
    xAxisFormatter: Function,
    yAxisFormatter: Function,
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
    },
    grid: {
      get() {
        if (this.multipleYAxis) {
          return { left: this.marginLeft, right: this.marginRight };
        } else {
          return {};
        }
      }
    },
    marginLeft: {
      get() {
        if (this.yAxisPosition.length === this.columns.length - 1) {
          return (
            Math.max(
              0,
              (this.yAxisPosition.filter(v => v === "left").length - 1) * 50
            ) + "px"
          );
        } else {
          return "50px";
        }
      }
    },
    marginRight: {
      get() {
        if (this.yAxisPosition.length === this.columns.length - 1) {
          return (
            Math.max(
              0,
              (this.yAxisPosition.filter(v => v === "right").length - 1) * 50
            ) + "px"
          );
        } else {
          return (this.columns.length - 2) * 50 + "px";
        }
      }
    },
    min: {
      get() {
        if (this.minMax) return this.minMax.map(v => v.min);
        return null;
      }
    },
    max: {
      get() {
        if (this.minMax) return this.minMax.map(v => v.max);
        return null;
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
