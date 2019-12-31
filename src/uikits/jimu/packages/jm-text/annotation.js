import {
    Color
} from '../../../type';
export default {
  what: {
    id: "jm-text",
    name: "文字",
    grouptype: "基础组件",
    img: "base_text",
    needRegis: true,
    priority: 999,
    icon: "",
    props: {
      font: {
        default: "PingFang SC",
        des: "字体",
        type: String,
        enumValue: [
          {
            value: "PingFang SC"
          },
          {
            value: "Microsoft YaHei"
          },
          {
            value: "Helvetica Neue"
          },
          {
            value: "Arial"
          }
        ]
      },
      value: {
        default: "",
        des: "显示文案",
        multiline: true,
        model: true,
        type: String
      },
      fontSize: {
        default: 18,
        des: "字体大小",
        type: Number
      },
      color: {
        default: "#303133",
        des: "字体颜色",
        type: Color
      },
      fontWeight: {
        default: "normal",
        des: "字体样式",
        type: String,
        enumValue: [
          {
            value: "normal",
            des: "正常"
          },
          {
            value: "bold",
            des: "加粗"
          },
          {
            value: "lighter",
            des: "较轻"
          }
        ]
      },
      isNowrap: {
        default: true,
        des: "文本是否换行",
        type: Boolean
      },
      lineClamp: {
        default: 2,
        des: "显示行数",
        type: Number
      },
      textAlign: {
        default: "center",
        des: "文字对齐方式",
        type: String,
        enumValue: [
          {
            value: "left",
            des: "左对齐"
          },
          {
            value: "center",
            des: "居中"
          },
          {
            value: "right",
            des: "右对齐"
          },
          {
            value: "justify",
            des: "版面对齐"
          }
        ]
      },
      letterSpacing: {
        default: 1,
        des: "字间距",
        type: Number
      },
      newLineHeight: {
        default: 32,
        des: "行高度",
        type: Number
      },
      backgroundColor: {
        default: "",
        des: "背景色",
        type: Color
      },
      opacity: {
        default: 100,
        des: "不透明度",
        min: 0,
        max: 100,
        type: Number
      },
      x: {
        default: 0,
        des: "水平阴影的位置",
        type: Number
      },
      y: {
        default: 0,
        des: "垂直阴影的位置",
        type: Number
      },
      blurValue: {
        default: 0,
        des: "阴影模糊的距离",
        type: Number
      },
      shadowColor: {
        default: "",
        des: "阴影的颜色",
        type: Color
      },
      fontStyle: {
        default: "normal",
        des: "斜体",
        type: String,
        enumValue: [
          {
            value: "normal",
            des: "正常"
          },
          {
            value: "italic",
            des: "斜体"
          },
          {
            value: "oblique",
            des: "倾斜"
          }
        ]
      },
      textDecoration: {
        default: "none",
        des: "划线",
        type: String,
        enumValue: [
          {
            value: "none",
            des: "无"
          },
          {
            value: "blink",
            des: "闪烁"
          },
          {
            value: "underline",
            des: "下划线"
          },
          {
            value: "line-through",
            des: "中划线"
          },
          {
            value: "overline",
            des: "跨线"
          }
        ]
      },
      disabled: {
        default: false,
        des: "文字提示",
        type: Boolean
      },
      url: {
        default: "",
        des: "跳转链接",
        type: String
      },
      windowName: {
        default: "_self",
        des: "跳转方式",
        type: String,
        enumValue: [
          {
            value: "_blank",
            des: "新页面"
          },
          {
            value: "_self",
            des: "当前页面"
          },
          {
            value: "_parent",
            des: "加载到父窗口"
          },
          {
            value: "_top",
            des: "顶层窗口"
          }
        ]
      }
    },
    events: {
      click: {
        des: "点击文本",
        args: []
      }
    }
  },
  examples: [
    {
      name: "主标题",
      props: {
        value: "花间一壶酒",
        fontSize: 20,
        fontWeight: "bold"
      }
    },
    {
      name: "标题",
      props: {
        value: "独酌无相亲",
        fontSize: 18,
        fontWeight: "bold"
      }
    },
    {
      name: "小标题",
      props: {
        value: "举杯邀明月",
        fontSize: 16,
        fontWeight: "normal"
      }
    },
    {
      name: "正文",
      props: {
        value: "对影成三人",
        fontSize: 14,
        fontWeight: "normal"
      }
    },
    {
      name: "正文(小)",
      props: {
        value: "月既不解饮",
        fontSize: 13,
        fontWeight: "normal"
      }
    },
    {
      name: "辅助文字",
      props: {
        value: "影徒随我身",
        fontSize: 12,
        fontWeight: "normal"
      }
    }
  ]
};