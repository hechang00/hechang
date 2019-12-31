import {
    Color
} from '../../../type';
export default {
  what: {
    id: "el-alert",
    name: "警告",
    grouptype: "其他",
    img: "base_alert",
    link: "https://element.eleme.io/#/zh-CN/component/alert",
    icon: "",
    props: {
      title: {
        default: "",
        des: "标题，必选参数",
        type: String
      },
      description: {
        default: "",
        des: "辅助性文字",
        type: String
      },
      type: {
        default: "info",
        des: "主题",
        type: String,
        enumValue: [
          {
            value: "info",
            des: "信息"
          },
          {
            value: "success",
            des: "成功"
          },
          {
            value: "warning",
            des: "告警"
          },
          {
            value: "error",
            des: "错误"
          }
        ]
      },
      closable: {
        default: true,
        des: "是否可关闭",
        type: Boolean
      },
      closeText: {
        default: "",
        des: "关闭按钮文本",
        type: String
      },
      showIcon: {
        default: false,
        des: "是否显示图标",
        type: Boolean
      },
      center: {
        default: true,
        des: "文字是否居中",
        type: Boolean
      },
      effect: {
        default: "light",
        title: "选择提供的主题",
        type: String,
        enumValue: [{ value: "light" }, { value: "dark" }]
      }
    },
    events: {
      close: {
        des: "关闭触发函数",
        args: ["event"]
      }
    }
  },
  examples: [
    {
      name: "基本用法",
      class: "el-alert",
      props: {
        title: "成功提示的文案",
        type: "success"
      }
    },
    {
      name: "不可关闭",
      class: "el-alert",
      props: {
        title: "不可关闭的 alert",
        type: "success",
        closable: false
      }
    },
    {
      name: "自定义关闭按钮",
      class: "el-alert",
      props: {
        title: "成功提示文案",
        type: "success",
        closeText: "知道了"
      }
    },
    {
      name: "带有icon",
      class: "el-alert",
      props: {
        title: "成功提示文案",
        type: "success",
        showIcon: true
      }
    },
    {
      name: "文字居中",
      class: "el-alert",
      props: {
        title: "成功提示文案",
        type: "success",
        showIcon: true,
        center: true
      }
    },
    {
      name: "带有辅助文字",
      class: "el-alert",
      props: {
        title: "带有辅助文字",
        type: "success",
        description: "带有辅助文字"
      }
    },
    {
      name: "有icon和文字",
      class: "el-alert",
      props: {
        title: "有icon和文字",
        type: "success",
        description: "",
        showIcon: true
      }
    }
  ]
};