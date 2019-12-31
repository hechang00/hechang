import {
    Color
} from '../../../type';
export default {
  what: {
    id: "el-color-picker",
    name: "颜色选择器",
    grouptype: "表单组件",
    link: "https://element.eleme.io/#/zh-CN/component/color-picker",
    img: "select_color",
    template: {},
    icon: "",
    props: {
      value: {
        default: "",
        des: "当前选色",
        type: Color,
        model: true
      },
      showAlpha: {
        default: false,
        des: "是否支持透明度",
        type: Boolean
      },
      colorFormat: {
        default: "rgb",
        des: "颜色的格式",
        type: String,
        enumValue: [
          {
            value: "hsl"
          },
          {
            value: "hsv"
          },
          {
            value: "hex"
          },
          {
            value: "rgb"
          }
        ]
      },
      disabled: {
        default: false,
        des: "是否禁用",
        type: Boolean
      },
      size: {
        default: "small",
        des: "尺寸",
        type: String,
        enumValue: [
          {
            value: "medium",
            des: "中等"
          },
          {
            value: "small",
            des: "小的"
          },
          {
            value: "mini",
            des: "最小"
          }
        ]
      },
      predefine: {
        default: [],
        des: "预定义颜色数组",
        type: Array,
        subType: Color
      },
      popperClass: {
        default: undefined,
        title: "ColorPicker下拉框的类名",
        type: String
      }
    },
    events: {
      change: {
        des: "当绑定值变化时触发",
        args: ["color"]
      }
    }
  },
  examples: [
    {
      name: "基本用法",
      props: {
        value: "#409EFF"
      }
    },
    {
      name: "选择透明度",
      props: {
        value: "rgba(19, 206, 102, 0.8)",
        showAlpha: true
      }
    },
    {
      name: "预定义颜色",
      props: {
        value: "rgba(255, 69, 0, 0.68)",
        showAlpha: true,
        predefine: [
          "#ff4500",
          "#ff8c00",
          "#ffd700",
          "#90ee90",
          "#00ced1",
          "#1e90ff",
          "#c71585",
          "#c7158577"
        ]
      }
    },
    {
      name: "不同尺寸",
      props: {
        value: "#409EFF",
        size: "medium"
      }
    }
  ]
};