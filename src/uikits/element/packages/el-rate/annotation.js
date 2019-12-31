import {
    Color
} from '../../../type';
export default {
  what: {
    id: "el-rate",
    name: "评分",
    link: "https://element.eleme.io/#/zh-CN/component/rate",
    grouptype: "表单组件",
    img: "base_rate",
    icon: "",
    priority: 900,
    props: {
      value: {
        default: 0,
        des: "当前选星",
        model: true,
        type: Number
      },
      lowThreshold: {
        default: 2,
        des: "中低等界限值",
        type: Number
      },
      highThreshold: {
        default: 4,
        des: "高中等界限值",
        type: Number
      },
      max: {
        default: 5,
        des: "最大分值",
        type: Number
      },
      voidColor: {
        default: "#C6D1DE",
        des: "未选中的颜色",
        type: Color
      },
      disabledVoidColor: {
        default: "#EFF2F7",
        des: "只读未选的颜色",
        type: Color
      },
      disabled: {
        default: false,
        des: "是否为只读",
        type: Boolean
      },
      allowHalf: {
        default: false,
        des: "是否允许半选",
        type: Boolean
      },
      showText: {
        default: false,
        des: "显示辅助文字",
        type: Boolean
      },
      showScore: {
        default: false,
        des: "显示当前分数",
        type: Boolean
      },
      textColor: {
        default: "#1f2d3d",
        des: "辅助文字的颜色",
        type: Color
      },
      colors: {
        default: ["#F7BA2A", "#F7BA2A", "#F7BA2A"],
        des: "颜色数组",
        type: Array,
        subType: Color
      },
      voidIconClass: {
        default: "el-icon-star-off",
        des: "未选中 icon 的类名",
        type: String
      },
      texts: {
        default: ["极差", "失望", "一般", "满意", "惊喜"],
        des: "辅助文字数组",
        type: Array,
        subType: String
      },
      iconClasses: {
        default: ["el-icon-star-on", "el-icon-star-on", "el-icon-star-on"],
        des: "icon的类名数组",
        type: Array,
        subType: String
      }
    },
    events: {
      change: {
        des: "分值改变函数",
        args: ["value"]
      }
    }
  },
  examples: [
    {
      name: "区分颜色",
      props: {
        colors: ["#99A9BF", "#F7BA2A", "#FF9900"]
      }
    },
    {
      name: "辅助文字",
      props: {
        colors: ["#99A9BF", "#F7BA2A", "#FF9900"],
        showText: true
      }
    },
    {
      name: "其它icon",
      props: {
        colors: ["#99A9BF", "#F7BA2A", "#FF9900"]
      }
    },
    {
      name: "只读",
      props: {
        textColor: "#ff9900",
        scoreTemplate: "{value}",
        showScore: true,
        disabled: true
      }
    }
  ]
};