import {
    Color
} from '../../../type';
export default {
  what: {
    id: "el-progress",
    name: "进度条",
    link: "https://element.eleme.io/#/zh-CN/component/progress",
    grouptype: "数据组件",
    img: "base_pro",
    icon: "",
    priority: 900,
    props: {
      type: {
        default: "line",
        des: "进度条类型",
        type: String,
        enumValue: [
          {
            value: "line",
            des: "线形"
          },
          {
            value: "circle",
            des: "圆形"
          }
        ]
      },
      percentage: {
        default: 0,
        des: "百分比（必填）",
        type: Number
      },
      status: {
        default: undefined,
        des: "进度条当前状态",
        type: String,
        enumValue: [
          {
            value: "success",
            des: "成功"
          },
          {
            value: undefined,
            des: "文本"
          },
          {
            value: "exception",
            des: "异常"
          },
          {
            value: "warning",
            des: "警告"
          }
        ]
      },
      value: {
        default: 0,
        des: "值",
        model: true,
        type: Number
      },
      strokeWidth: {
        default: 6,
        des: "进度条的宽度",
        type: Number
      },
      textInside: {
        default: false,
        des: "是否显示文字",
        type: Boolean
      },
      width: {
        default: 126,
        des: "环形画布宽度",
        type: Number
      },
      showText: {
        default: true,
        des: "是否显示内容",
        type: Boolean
      },
      color: {
        default: "",
        des: "进度条背景色",
        type: Color
      }
    },
    events: {}
  },
  examples: [
    {
      name: "线形进度条（百分比外显）",
      img: "progress1",
      props: {
        percentage: 70,
        color: "#8e71c7",
        style_flex: 1
      }
    },
    {
      name: "线形进度条（图标表示状态）",
      img: "progress2",
      props: {
        percentage: 70,
        status: "success",
        style_flex: 1
      }
    },
    {
      name: "线形进度条（百分比内显）",
      img: "progress3",
      props: {
        percentage: 70,
        textInside: true,
        strokeWidth: 18,
        style_flex: 1
      }
    },
    {
      name: "环形进度条（百分比显示）",
      props: {
        percentage: 70,
        textInside: false,
        type: "circle"
      }
    },
    {
      name: "环形进度条（图标表示状态）",
      props: {
        percentage: 70,
        textInside: false,
        type: "circle",
        status: "success"
      }
    }
  ]
};