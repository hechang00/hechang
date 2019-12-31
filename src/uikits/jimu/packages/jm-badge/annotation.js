import { Color } from "../../../type";
export default {
  what: {
    id: "jm-badge",
    needRegis: true,
    name: "标记提示",
    grouptype: "数据组件",
    link: "https://element.eleme.io/#/zh-CN/component/badge",
    icon: "el-icon-warning-outline",
    props: {
      btnTitle: {
        default: "按钮",
        des: "按钮文本",
        type: String
      },
      showValue: {
        default: "这是按钮",
        title: "显示值",
        type: [String, Number]
      },
      max: {
        default: undefined,
        des: "最大值，超过最大值会显示 '{max}+'，要求 value 是 Number 类型",
        title: "最大值",
        type: Number
      },
      isDot: {
        default: false,
        title: "小圆点",
        type: Boolean
      },
      hidden: {
        default: false,
        title: "隐藏badge",
        type: Boolean
      },
      type: {
        default: "",
        title: "类型",
        type: String,
        enumValue: [
          {
            value: undefined,
            des: "无"
          },
          {
            value: "primary",
            des: "主要的"
          },
          {
            value: "success",
            des: "成功"
          },
          {
            value: "warning",
            des: "警告"
          },
          {
            value: "danger",
            des: "危险"
          },
          {
            value: "info",
            des: "文本"
          }
        ]
      },
      contentSlot: {
        default: "",
        des: "内部插槽",
        isSlotArray: true,
        type: String,
        enumValue: [
          {
            value: ""
          }
        ]
      },
      contentSlotData: {
        default: {},
        des: "内容插槽数据",
        type: Object
      }
    },
    events: {}
  },
  examples: [
    {
      name: "基础用法",
      props: {
        showValue: "123",
        style_marginRight: "24px"
      }
    }
  ]
};
