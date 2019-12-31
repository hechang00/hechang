import {
    Color
} from '../../../type';
export default {
  what: {
    isContainer: true,
    id: "jm-form-item",
    link: "https://element.eleme.io/#/zh-CN/component/form",
    name: "表单布局",
    priority: 999,
    grouptype: "表单组件",
    img: "form_layout",
    needRegis: true,
    icon: "",
    props: {
      justify: {
        default: "row",
        des: "子组件排列方向",
        type: String,
        enumValue: [
          {
            value: "column",
            des: "纵向排列"
          },
          {
            value: "column-reverse",
            des: "反纵向排列"
          },
          {
            value: "row",
            des: "行排列"
          },
          {
            value: "row-reverse",
            des: "反行排列"
          }
        ]
      },
      wrap: {
        default: "wrap",
        des: "自动换行方式",
        type: String,
        enumValue: [
          {
            value: "nowrap",
            des: "不换行"
          },
          {
            value: "wrap",
            des: "换行"
          },
          {
            value: "wrap-reverse",
            des: "倒叙换行"
          }
        ]
      },
      direction: {
        default: "flex-start",
        des: "水平对齐",
        type: String,
        enumValue: [
          {
            value: "flex-start",
            des: "起点"
          },
          {
            value: "flex-end",
            des: "末尾"
          },
          {
            value: "center",
            des: "居中"
          },
          {
            value: "space-between",
            des: "基线"
          },
          {
            value: "space-around",
            des: "伸展"
          }
        ]
      },
      align: {
        default: "center",
        des: "垂直对齐",
        type: String,
        enumValue: [
          {
            value: "flex-start",
            des: "开始"
          },
          {
            value: "flex-end",
            des: "结束"
          },
          {
            value: "center",
            des: "居中"
          },
          {
            value: "baseline",
            des: "基线"
          },
          {
            value: "stretch",
            des: "伸展"
          }
        ]
      },
      bgcolor: {
        default: "#ffffff",
        des: "背景颜色",
        type: Color
      },
      minWidth: {
        default: 99.9,
        des: "最小宽度",
        type: Number,
        classifyType:'style',
        priority:993
      },
      minHeight: {
        default: 59.9,
        des: "最小高度",
        model: true,
        type: Number,
        priority:992
      },
      border: {
        default: false,
        des: "是否显示边框",
        type: Boolean
      },
      alignContent: {
        default: "flex-start",
        des: "垂直对齐(整体)",
        type: String,
        enumValue: [
          {
            value: "flex-start",
            des: "开始"
          },
          {
            value: "flex-end",
            des: "结束"
          },
          {
            value: "center",
            des: "居中"
          },
          {
            value: "space-around",
            des: "四周分开"
          },
          {
            value: "space-between",
            des: "两边分开"
          },
          {
            value: "stretch",
            des: "伸展"
          }
        ]
      },
      span: {
        default: 24,
        des: "栅格占据的列数",
        type: Number,
        enumValue: [
          {
            value: 1
          },
          {
            value: 2
          },
          {
            value: 3
          },
          {
            value: 4
          },
          {
            value: 5
          },
          {
            value: 6
          },
          {
            value: 7
          },
          {
            value: 8
          },
          {
            value: 9
          },
          {
            value: 10
          },
          {
            value: 11
          },
          {
            value: 12
          },
          {
            value: 13
          },
          {
            value: 14
          },
          {
            value: 15
          },
          {
            value: 16
          },
          {
            value: 17
          },
          {
            value: 18
          },
          {
            value: 19
          },
          {
            value: 20
          },
          {
            value: 21
          },
          {
            value: 22
          },
          {
            value: 23
          },
          {
            value: 24
          }
        ]
      },
      label: {
        default: "",
        des: "标签名",
        type: String
      },
      needChangeHeight: {
        default: true,
        des: "是否自适应高度",
        hideInPropsPanel: true,
        type: Boolean
      },
      rules: {
        default: [],
        des: "表单验证规则",
        type: Array
      },
      labelWidth: {
        default: 100,
        des: "自定义标签宽度",
        type: Number
      },
      useSelfLabelWidth: {
        default: false,
        des: "是否使用自定义标签宽度",
        type: Boolean
      },
      width: {
        default: "",
        des: "宽度",
        type: String,
        classifyType:'style',
        priority:1000
      },
      height: {
        default: "",
        des: "高度",
        type: String,
        classifyType:'style',
        priority:1000
      },
      prop: {
        default: "",
        des: "校验字段名",
        hideInPropsPanel: true,
        type: String
      }
    },
    events: {}
  },
  examples: [
    {
      name: "input表单",
      img: "form_input",
      parentExampleIndex: 0,
      props: {
        label: "标签名",
        needChangeHeight: true,
        justify: "row",
        direction: "flex-start",
        style_flex: 1,
        style_marginLeft: "0px",
        style_marginRight: "0px",
        style_marginTop: "0px",
        style_marginBottom: "0px"
      },
      children: [
        {
          id: "el-input",
          example: 1
        }
      ]
    },
    {
      name: "select表单",
      img: "form_select",
      parentExampleIndex: 0,
      props: {
        label: "标签名",
        needChangeHeight: true,
        justify: "row",
        direction: "flex-start",
        style_flex: 1,
        style_marginLeft: "0px",
        style_marginRight: "0px",
        style_marginTop: "0px",
        style_marginBottom: "0px"
      },
      children: [
        {
          id: "jm-el-select",
          example: 0
        }
      ]
    },
    {
      name: "自定义表单",
      img: "form",
      parentExampleIndex: 0,
      props: {
        label: "标签名",
        needChangeHeight: true,
        justify: "row",
        direction: "flex-start",
        style_flex: 1,
        style_marginLeft: "0px",
        style_marginRight: "0px",
        style_marginTop: "0px",
        style_marginBottom: "0px"
      }
    },
    {
      name: "动态增减表单",
      img: "form_add_del",
      parentExampleIndex: 1,
      props: {
        label: "标签名",
        needChangeHeight: true,
        justify: "row",
        direction: "flex-start",
        style_flex: 1,
        style_marginLeft: "0px",
        style_marginRight: "0px",
        style_marginTop: "0px",
        style_marginBottom: "0px"
      }
    }
  ]
};