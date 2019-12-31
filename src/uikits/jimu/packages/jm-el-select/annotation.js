import { Color } from "../../../type";
export default {
  what: {
    id: "jm-el-select",
    name: "下拉组件",
    priority: 995,
    link: "https://element.eleme.io/#/zh-CN/component/select",
    needRegis: true,
    grouptype: "基础组件",
    img: "select_drop",
    icon: "",
    props: {
      maxLinesNum: {
        default: 50,
        des: "最大显示条数",
        min: 5,
        max: 200,
        type: Number
      },
      placeholder: {
        default: "输入关键词",
        des: "提示",
        type: String
      },
      options: {
        default: [],
        des: "下拉选项数据",
        fieldConfig: {
          title: "下拉选项配置",
          config: [
            {
              name: "value",
              chinaName: "值",
              type: "String",
              default: ""
            },
            {
              name: "label",
              chinaName: "标签名",
              type: "String",
              default: ""
            }
          ]
        },
        type: Array
      },
      disabled: {
        default: false,
        des: "是否禁用",
        type: Boolean
      },
      clearable: {
        default: false,
        des: "清空按钮",
        type: Boolean
      },
      multiple: {
        default: false,
        des: "是否多选",
        hideInPropsPanel: true,
        type: Boolean
      },
      value: {
        default: "",
        des: "当前选择数据",
        model: true,
        type: String
      },
      size: {
        default: "small",
        des: "尺寸大小",
        type: String,
        enumValue: [
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
      allowCreate: {
        default: false,
        des: "是否创建新条目",
        type: Boolean
      },
      collapseTags: {
        default: false,
        des: "多选时是否将选中值按文字的形式展示",
        type: Boolean
      },
      remote: {
        default: false,
        des: "是否为远程搜索",
        type: Boolean
      },
      remoteMethod: {
        default: "",
        type: Function,
        des: "远程搜索方法"
      },
      loading: {
        default: false,
        des: "是否正从远程获取数据",
        type: Boolean
      },
      autoChange: {
        default: true,
        des: "筛选仅一项全匹配,自动触发选中值变化函数",
        type: Boolean
      },
      noDataText: {
        default: "无数据",
        type: String,
        title: "选项为空时显示的文字"
      },
      noMatchText: {
        default: "无匹配数据",
        type: String,
        title: "搜索条件无匹配时显示的文字"
      },
      loadingText: {
        default: "加载中",
        type: String,
        title: "远程加载时显示的文字"
      }
    },
    events: {
      change: {
        des: "选中值变化函数",
        args: ["value"]
      },
      focus: {
        des: "input获得焦点时触发",
        args: ["el"]
      },
      blur: {
        des: "input失去焦点时触发",
        args: ["el"]
      },
      visibleChange: {
        des: "下拉框出现/隐藏时触发(visible为true出现，false隐藏)",
        args: ["visible"]
      }
    }
  },
  examples: [
    {
      name: "普通下拉",
      props: {
        style_flex: 1,
        value: "选项1",
        options: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          },
          {
            value: "选项3",
            label: "双皮奶"
          }
        ]
      }
    },
    {
      name: "多选下拉",
      props: {
        style_flex: 1,
        options: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          },
          {
            value: "选项3",
            label: "双皮奶"
          }
        ],
        multiple: true
      }
    },
    {
      name: "某选项禁用",
      props: {
        style_flex: 1,
        value: "",
        options: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶",
            disabled: true
          },
          {
            value: "选项3",
            label: "双皮奶"
          }
        ]
      }
    },
    {
      name: "下拉禁用",
      props: {
        value: "",
        style_flex: 1,
        options: [
          {
            value: "选项1",
            label: "黄金糕"
          }
        ],
        disabled: true
      }
    },
    {
      name: "可清空文本",
      props: {
        style_flex: 1,
        value: "",
        options: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          },
          {
            value: "选项3",
            label: "双皮奶"
          }
        ],
        clearable: true
      }
    },
    {
      name: "自定义模板",
      props: {
        style_flex: 1,
        value: "",
        options: [
          {
            value: "beijing",
            label: "北京",
            custom: true
          },
          {
            value: "shanghai",
            label: "上海",
            custom: true
          },
          {
            value: "shenzhen",
            label: "深圳",
            custom: true
          }
        ]
      }
    }
  ]
};
