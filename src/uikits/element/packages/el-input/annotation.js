import { Color } from '../../../type'
import { iconArray } from '../../../jimu/packages/jm-icon/icon.js'
const _icon = [];
for(let i in iconArray){
  _icon.push({ value: iconArray[i] })
}
export default {
  what: {
    id: "el-input",
    name: "输入框",
    grouptype: "基础组件",
    priority: 980,
    link: "https://element.eleme.io/#/zh-CN/component/input",
    img: "base_input",
    icon: "",
    props: {
      validateEvent: {
        default: true,
        des: "是否开启校验",
        type: Boolean
      },
      placeholder: {
        default: "",
        des: "输入框占位文本",
        type: String
      },
      value: {
        default: "",
        des: "绑定值",
        model: true,
        type: String
      },
      size: {
        default: "",
        des: "输入框尺寸",
        type: String,
        enumValue: [
          {
            value: "large",
            des: "大号"
          },
          {
            value: "medium",
            des: "中号"
          },
          {
            value: "small",
            des: "小号"
          },
          {
            value: "mini",
            des: "迷你"
          }
        ]
      },
      resize: {
        default: "",
        des: "控制是否缩放",
        type: String,
        enumValue: [
          {
            value: "无效"
          },
          {
            value: "双向"
          },
          {
            value: "水平"
          },
          {
            value: "垂直"
          }
        ]
      },
      form: {
        default: "",
        des: "原生属性",
        type: String
      },
      rows: {
        default: 2,
        des: "文本域rows",
        type: Number
      },
      disabled: {
        default: false,
        des: "禁用",
        type: Boolean
      },
      readonly: {
        default: false,
        des: "原生属性，是否只读",
        type: Boolean
      },
      type: {
        default: "text",
        des: "类型",
        type: String,
        enumValue: [
          {
            value: "text",
            des: "文本"
          },
          {
            value: "textarea",
            des: "文本区"
          },
          {
            value: "number",
            des: "数字"
          },
          {
            value: "password",
            des: "密码"
          },
          {
            value: "url",
            des: "链接"
          },
          {
            value: "tel",
            des: "电话号"
          }
        ]
      },
      autosize: {
        default: false,
        des: "自适应内容高度",
        type: Boolean
      },
      autoComplete: {
        default: "off",
        des: "原生属性，自动补全",
        type: String,
        enumValue: [
          {
            value: "on",
            des: "打开"
          },
          {
            value: "off",
            des: "关闭"
          }
        ]
      },
      prefixIcon: {
        default: "",
        des: "输入框头部图标",
        needIcon: true,
        type: String,
        enumValue: _icon
      },
      suffixIcon: {
        default: "",
        des: "输入框尾部图标",
        needIcon: true,
        type: String,
        enumValue: _icon
      },
      label: {
        default: "",
        des: "输入框关联文字",
        type: String
      },
      tabindex: {
        default: "",
        des: "输入框的tabindex",
        type: String
      },
      step: {
        default: "",
        des: "字段合法数字间隔",
        type: String
      },
      clearable: {
        default: false,
        des: "是否可清空",
        type: Boolean
      },
      style_width: {
        default: "180px",
        des: "宽度",
        type: String
      },
      style_height: {
        default: "",
        des: "高度",
        type: String
      },
      autofocus: {
        default: false,
        title: "自动获取焦点",
        type: Boolean
      }
    },
    events: {
      change: {
        des: "数值变化函数",
        args: ["value"]
      },
      blur: {
        des: "失去焦点函数",
        args: ["event"]
      },
      focus: {
        des: "获得焦点函数",
        args: ["event"]
      }
    }
  },
  examples: [
    {
      name: "基础用法",
      props: {
        placeholder: "请输入内容",
        style_flex: 0
      }
    },
    {
      name: "自动拉长",
      props: {
        placeholder: "请输入内容",
        style_flex: 1
      }
    },
    {
      name: "禁用状态",
      props: {
        placeholder: "请输入内容",
        disabled: true,
        style_flex: 0
      }
    },
    {
      name: "可清空",
      props: {
        placeholder: "请输入内容",
        clearable: true,
        style_flex: 0
      }
    },
    {
      name: "带icon的输入框(前面)",
      props: {
        placeholder: "请输入内容",
        prefixIcon: "el-icon-search",
        style_flex: 0
      }
    },
    {
      name: "带icon的输入框(后面)",
      props: {
        placeholder: "请输入内容",
        suffixIcon: "el-icon-date",
        style_flex: 0
      }
    },
    {
      name: "文本域",
      props: {
        placeholder: "请输入内容",
        type: "textarea",
        rows: "2",
        style_flex: 0
      }
    },
    {
      name: "可自适应文本高度的文本域",
      props: {
        placeholder: "请输入内容",
        type: "textarea",
        autosize: true,
        style_flex: 0
      }
    },
    {
      name: "大尺寸",
      props: {
        placeholder: "请输入内容",
        suffixIcon: "el-icon-date",
        size: "large",
        style_flex: 0
      }
    },
    {
      name: "小尺寸",
      props: {
        placeholder: "请输入内容",
        suffixIcon: "el-icon-date",
        size: "mini",
        style_flex: 0
      }
    }
  ]
};
