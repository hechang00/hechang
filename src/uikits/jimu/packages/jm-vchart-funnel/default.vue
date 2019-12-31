<template>
  <ve-funnel
    ref="chart"
    :events="chartEvents"
    :width="localWidth"
    :height="localHeight"
    :data="{columns:columns,rows:rows}"
    :theme="vchartTheme"
    :settings="Object.assign({metrics:metrics,dataType:dataType,sequence:sequence,ascending:ascending,useDefaultOrder:useDefaultOrder,filterZero:filterZero,digit:digit},settings)"
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
  ></ve-funnel>
</template>

<script>
import VeFunnel from "v-charts/lib/funnel.common";
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
    VeFunnel
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
    metrics: {
        default: ''
    },
    dataType: {
        default: 'normal'
    },
    sequence: {
        default: function() {
            return []
        }
    },
    ascending: {
        default: false
    },
    useDefaultOrder: {
        default: false
    },
    filterZero: {
        default: false
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
  }
};
</script>
