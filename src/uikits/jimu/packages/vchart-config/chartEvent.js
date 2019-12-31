/* jshint esversion: 6 */
var mixin = {
  data: function() {
    this.chartEvents = {
      click: function(e) {
        let echart = this.$refs.chart.echarts;
        this.$emit("click", echart, e);
      }.bind(this),
      dblclick: function(e) {
        let echart = this.$refs.chart.echarts;
        this.$emit("dblclick", echart, e);
      }.bind(this),
      mousedown: function(e) {
        let echart = this.$refs.chart.echarts;
        this.$emit("mousedown", echart, e);
      }.bind(this),
      mousemove: function(e) {
        let echart = this.$refs.chart.echarts;
        this.$emit("mousemove", echart, e);
      }.bind(this),
      mouseup: function(e) {
        let echart = this.$refs.chart.echarts;
        this.$emit("mouseup", echart, e);
      }.bind(this),
      mouseover: function(e) {
        let echart = this.$refs.chart.echarts;
        this.$emit("mouseover", echart, e);
      }.bind(this),
      mouseout: function(e) {
        let echart = this.$refs.chart.echarts;
        this.$emit("mouseout", echart, e);
      }.bind(this)
    };
    return {};
  },
  props: {
    currentID: null,
    markLine: {
      default: function() {
        return {};
      }
    },
    markPoint: {
      default: function() {
        return {};
      }
    },
    markArea: {
      default: function() {
        return {};
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
    afterSetOptionOnce: Function,
    settings: {
      default:false
    }
  },
  methods: {
    ready(echart, options, echartsLib) {
      this.$emit("ready", echart, options, echartsLib);
    },
    readyOnce(echart, options, echartsLib) {
      this.$emit("readyOnce", echart, options, echartsLib);
    }
  },
  beforeDestroy() {
    this.chartEvents = null;
  }
};
var globalMethod = {
  ready: {
    des: "图表渲染完成后触发",
    args: ["echart", "options", "echartsLib"]
  },
  readyOnce: {
    des: "首次渲染完成后触发",
    args: ["echart", "options", "echartsLib"]
  },
  click: {
    des: "点击事件",
    args: ["echart", "param"]
  },
  dblclick: {
    des: "双击事件",
    args: ["echart", "param"]
  },
  mousedown: {
    des: "鼠标按下",
    args: ["echart", "param"]
  },
  mousemove: {
    des: "鼠标移动",
    args: ["echart", "param"]
  },
  mouseup: {
    des: "鼠标释放",
    args: ["echart", "param"]
  },
  mouseover: {
    des: "鼠标停留",
    args: ["echart", "param"]
  },
  mouseout: {
    des: "鼠标移出",
    args: ["echart", "param"]
  }
};

var gloablProps = {
  markLine: {
    default: {},
    type: "Object",
    des: "标线"
  },
  markPoint: {
    default: {},
    type: "Object",
    des: "标点"
  },
  markArea: {
    default: {},
    type: "Object",
    des: "标志区域"
  },
  loading: {
    default: false,
    type: "Boolean",
    des: "加载状态"
  },
  dataEmpty: {
    default: false,
    type: "Boolean",
    des: "暂无数据状态"
  },
  beforeConfig: {
    default: "",
    type: "String",
    selectFromMethods: true,
    des: "数据转化为配置前触发",
    args: ["data"]
  },
  afterConfig: {
    default: "",
    type: "String",
    selectFromMethods: true,
    des: "数据转化为配置后触发",
    args: ["options"]
  },
  afterSetConfig: {
    default: "",
    type: "String",
    selectFromMethods: true,
    des: "生成图后获取echarts实例",
    args: ["echarts"]
  },
  afterSetOptionOnce: {
    default: "",
    type: "String",
    selectFromMethods: true,
    des: "生成图后获取echarts实例(只执行一次)",
    args: ["echarts"]
  }
};

export { mixin, globalMethod, gloablProps };
