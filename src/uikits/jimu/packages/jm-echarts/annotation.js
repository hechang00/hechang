import {
    Color
} from '../../../type';
export default {
  what: {
    id: "jm-echarts",
    needRegis: true,
    name: "原生EChart",
    grouptype: "图表组件",
    img: "f_yuansheng",
    icon: "",
    props: {
      width: {
        default: "100%",
        des: "宽度",
        type: String,
        classifyType:'style',
        priority:1000
      },
      height: {
        default: "400",
        des: "高度",
        type: String,
        classifyType:'style',
        priority:1000
      },
      loading: {
        default: false,
        type: Boolean,
        des: "加载状态"
      },
      dataEmpty: {
        default: false,
        type: Boolean,
        des: "暂无数据状态"
      },
      options: {
        default: "",
        des: "配置",
        type: Function,
        args: [],
        defaultReturn: function() {
          return {
            title: {
              text:
                "ECharts示例（请在属性编辑中的配置 添加返回图表属性的局部函数）"
            },
            xAxis: {
              type: "category",
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
            },
            yAxis: {
              type: "value"
            },
            series: [
              {
                data: [820, 932, 901, 934, 1290, 1330, 1320],
                type: "line"
              }
            ]
          };
        }
      }
    },
    events: {
      getChart: {
        des: "获取echart实例事件",
        args: ["echart"]
      },
      click: {
        des: "点击事件",
        args: ["event"]
      },
      dblclick: {
        des: "双击事件",
        args: ["event"]
      },
      mousedown: {
        des: "鼠标按下",
        args: ["event"]
      },
      mousemove: {
        des: "鼠标移动",
        args: ["event"]
      },
      mouseup: {
        des: "鼠标释放",
        args: ["event"]
      },
      mouseover: {
        des: "鼠标停留",
        args: ["event"]
      },
      mouseout: {
        des: "鼠标移出",
        args: ["event"]
      }
    }
  },
  examples: [
    {
      name: "默认折线图",
      img: "zhexian1",
      props: {
        height:"500px"
      }
    }
  ]
};