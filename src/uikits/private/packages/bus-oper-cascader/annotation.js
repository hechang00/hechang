import {
    Color
} from '../../../type';
export default {
  what: {
    id: "bus-oper-cascader",
    needRegis: true,
    name: "级联选择器",
    grouptype: "业务组件",
    img: "select_cascader",
    icon: "",
    template: {},
    props: {
      value: {
        default: [],
        des: "当前选择值",
        model: true,
        type: Array
      },
      options: {
        default: [],
        des: "可选项数据源，键名可通过 props 属性配置",
        type: Array
      },
      separator: {
        default: "/",
        des: "选项分隔符",
        type: String
      },
      placeholder: {
        default: "",
        des: "输入框占位文本",
        type: String
      },
      disabled: {
        default: undefined,
        des: "是否禁用",
        type: Boolean
      },
      clearable: {
        default: false,
        des: "是否支持清空选项",
        type: Boolean
      },
      changeOnSelect: {
        default: false,
        des: "是否允许选择任意一级的选项",
        type: Boolean
      },
      expandTrigger: {
        default: "click",
        des: "次级菜单的展开方式",
        type: String,
        enumValue: [
          {
            value: "click",
            des: "点击"
          },
          {
            value: "hover",
            des: "悬浮"
          }
        ]
      },
      filterable: {
        default: false,
        des: "是否可搜索选项",
        type: Boolean
      },
      size: {
        default: undefined,
        des: "尺寸",
        type: String,
        enumValue: [
          {
            value: undefined,
            des: "不设置"
          },
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
            des: "迷你"
          }
        ]
      },
      showAllLevels: {
        default: true,
        des: "输入框中是否显示选中值的完整路径",
        type: Boolean
      },
      debounce: {
        default: 300,
        des: "搜索关键词输入的去抖延迟，毫秒",
        type: Number
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
      },
      loadSuccess: {
        des: "数据加载完成",
        args: ["data"]
      },
      loadFail: {
        des: "数据加载失败",
        args: ["error"]
      }
    }
  },
  examples: [
    {
      name: "基本用法",
      class: "el-cascader",
      props: {
        disabled:false,
        changeOnSelect: true,
        size: "small",
        options: [
          {
            value: "zhinan",
            label: "指南",
            children: [
              {
                value: "shejiyuanze",
                label: "设计原则",
                children: [
                  {
                    value: "yizhi",
                    label: "一致"
                  },
                  {
                    value: "fankui",
                    label: "反馈"
                  },
                  {
                    value: "xiaolv",
                    label: "效率"
                  },
                  {
                    value: "kekong",
                    label: "可控"
                  }
                ]
              },
              {
                value: "daohang",
                label: "导航",
                children: [
                  {
                    value: "cexiangdaohang",
                    label: "侧向导航"
                  },
                  {
                    value: "dingbudaohang",
                    label: "顶部导航"
                  }
                ]
              }
            ]
          },
          {
            value: "zujian",
            label: "组件",
            children: [
              {
                value: "basic",
                label: "Basic",
                children: [
                  {
                    value: "jm-layout",
                    label: "Layout 布局"
                  },
                  {
                    value: "color",
                    label: "Color 色彩"
                  },
                  {
                    value: "typography",
                    label: "Typography 字体"
                  },
                  {
                    value: "icon",
                    label: "Icon 图标"
                  },
                  {
                    value: "button",
                    label: "Button 按钮"
                  }
                ]
              },
              {
                value: "form",
                label: "Form",
                children: [
                  {
                    value: "radio",
                    label: "Radio 单选框"
                  },
                  {
                    value: "checkbox",
                    label: "Checkbox 多选框"
                  },
                  {
                    value: "input",
                    label: "Input 输入框"
                  },
                  {
                    value: "input-number",
                    label: "InputNumber 计数器"
                  },
                  {
                    value: "select",
                    label: "Select 选择器"
                  },
                  {
                    value: "cascader",
                    label: "Cascader 级联选择器"
                  },
                  {
                    value: "switch",
                    label: "Switch 开关"
                  },
                  {
                    value: "slider",
                    label: "Slider 滑块"
                  },
                  {
                    value: "time-picker",
                    label: "TimePicker 时间选择器"
                  },
                  {
                    value: "date-picker",
                    label: "DatePicker 日期选择器"
                  },
                  {
                    value: "datetime-picker",
                    label: "DateTimePicker 日期时间选择器"
                  },
                  {
                    value: "upload",
                    label: "Upload 上传"
                  },
                  {
                    value: "rate",
                    label: "Rate 评分"
                  },
                  {
                    value: "form",
                    label: "Form 表单"
                  }
                ]
              },
              {
                value: "data",
                label: "Data",
                children: [
                  {
                    value: "table",
                    label: "Table 表格"
                  },
                  {
                    value: "tag",
                    label: "Tag 标签"
                  },
                  {
                    value: "progress",
                    label: "Progress 进度条"
                  },
                  {
                    value: "tree",
                    label: "Tree 树形控件"
                  },
                  {
                    value: "pagination",
                    label: "Pagination 分页"
                  },
                  {
                    value: "badge",
                    label: "Badge 标记"
                  }
                ]
              },
              {
                value: "notice",
                label: "Notice",
                children: [
                  {
                    value: "alert",
                    label: "Alert 警告"
                  },
                  {
                    value: "loading",
                    label: "Loading 加载"
                  },
                  {
                    value: "message",
                    label: "Message 消息提示"
                  },
                  {
                    value: "message-box",
                    label: "MessageBox 弹框"
                  },
                  {
                    value: "notification",
                    label: "Notification 通知"
                  }
                ]
              },
              {
                value: "navigation",
                label: "Navigation",
                children: [
                  {
                    value: "menu",
                    label: "NavMenu 导航菜单"
                  },
                  {
                    value: "tabs",
                    label: "Tabs 标签页"
                  },
                  {
                    value: "breadcrumb",
                    label: "Breadcrumb 面包屑"
                  },
                  {
                    value: "dropdown",
                    label: "Dropdown 下拉菜单"
                  },
                  {
                    value: "steps",
                    label: "Steps 步骤条"
                  }
                ]
              },
              {
                value: "others",
                label: "Others",
                children: [
                  {
                    value: "dialog",
                    label: "Dialog 对话框"
                  },
                  {
                    value: "tooltip",
                    label: "Tooltip 文字提示"
                  },
                  {
                    value: "popover",
                    label: "Popover 弹出框"
                  },
                  {
                    value: "card",
                    label: "Card 卡片"
                  },
                  {
                    value: "carousel",
                    label: "Carousel 走马灯"
                  },
                  {
                    value: "collapse",
                    label: "Collapse 折叠面板"
                  }
                ]
              }
            ]
          },
          {
            value: "ziyuan",
            label: "资源",
            children: [
              {
                value: "axure",
                label: "Axure Components"
              },
              {
                value: "sketch",
                label: "Sketch Templates"
              },
              {
                value: "jiaohu",
                label: "组件交互文档"
              }
            ]
          }
        ]
      },
      events: {}
    },
    {
      name: "禁用选项",
      class: "el-cascader",
      props: {
        changeOnSelect: true,
        size: "small",
        options: [
          {
            value: "zhinan",
            label: "指南",
            disabled: true,
            children: [
              {
                value: "shejiyuanze",
                label: "设计原则",
                children: [
                  {
                    value: "yizhi",
                    label: "一致"
                  },
                  {
                    value: "fankui",
                    label: "反馈"
                  },
                  {
                    value: "xiaolv",
                    label: "效率"
                  },
                  {
                    value: "kekong",
                    label: "可控"
                  }
                ]
              },
              {
                value: "daohang",
                label: "导航",
                children: [
                  {
                    value: "cexiangdaohang",
                    label: "侧向导航"
                  },
                  {
                    value: "dingbudaohang",
                    label: "顶部导航"
                  }
                ]
              }
            ]
          },
          {
            value: "zujian",
            label: "组件",
            children: [
              {
                value: "basic",
                label: "Basic",
                children: [
                  {
                    value: "jm-layout",
                    label: "Layout 布局"
                  },
                  {
                    value: "color",
                    label: "Color 色彩"
                  },
                  {
                    value: "typography",
                    label: "Typography 字体"
                  },
                  {
                    value: "icon",
                    label: "Icon 图标"
                  },
                  {
                    value: "button",
                    label: "Button 按钮"
                  }
                ]
              },
              {
                value: "form",
                label: "Form",
                children: [
                  {
                    value: "radio",
                    label: "Radio 单选框"
                  },
                  {
                    value: "checkbox",
                    label: "Checkbox 多选框"
                  },
                  {
                    value: "input",
                    label: "Input 输入框"
                  },
                  {
                    value: "input-number",
                    label: "InputNumber 计数器"
                  },
                  {
                    value: "select",
                    label: "Select 选择器"
                  },
                  {
                    value: "cascader",
                    label: "Cascader 级联选择器"
                  },
                  {
                    value: "switch",
                    label: "Switch 开关"
                  },
                  {
                    value: "slider",
                    label: "Slider 滑块"
                  },
                  {
                    value: "time-picker",
                    label: "TimePicker 时间选择器"
                  },
                  {
                    value: "date-picker",
                    label: "DatePicker 日期选择器"
                  },
                  {
                    value: "datetime-picker",
                    label: "DateTimePicker 日期时间选择器"
                  },
                  {
                    value: "upload",
                    label: "Upload 上传"
                  },
                  {
                    value: "rate",
                    label: "Rate 评分"
                  },
                  {
                    value: "form",
                    label: "Form 表单"
                  }
                ]
              },
              {
                value: "data",
                label: "Data",
                children: [
                  {
                    value: "table",
                    label: "Table 表格"
                  },
                  {
                    value: "tag",
                    label: "Tag 标签"
                  },
                  {
                    value: "progress",
                    label: "Progress 进度条"
                  },
                  {
                    value: "tree",
                    label: "Tree 树形控件"
                  },
                  {
                    value: "pagination",
                    label: "Pagination 分页"
                  },
                  {
                    value: "badge",
                    label: "Badge 标记"
                  }
                ]
              },
              {
                value: "notice",
                label: "Notice",
                children: [
                  {
                    value: "alert",
                    label: "Alert 警告"
                  },
                  {
                    value: "loading",
                    label: "Loading 加载"
                  },
                  {
                    value: "message",
                    label: "Message 消息提示"
                  },
                  {
                    value: "message-box",
                    label: "MessageBox 弹框"
                  },
                  {
                    value: "notification",
                    label: "Notification 通知"
                  }
                ]
              },
              {
                value: "navigation",
                label: "Navigation",
                children: [
                  {
                    value: "menu",
                    label: "NavMenu 导航菜单"
                  },
                  {
                    value: "tabs",
                    label: "Tabs 标签页"
                  },
                  {
                    value: "breadcrumb",
                    label: "Breadcrumb 面包屑"
                  },
                  {
                    value: "dropdown",
                    label: "Dropdown 下拉菜单"
                  },
                  {
                    value: "steps",
                    label: "Steps 步骤条"
                  }
                ]
              },
              {
                value: "others",
                label: "Others",
                children: [
                  {
                    value: "dialog",
                    label: "Dialog 对话框"
                  },
                  {
                    value: "tooltip",
                    label: "Tooltip 文字提示"
                  },
                  {
                    value: "popover",
                    label: "Popover 弹出框"
                  },
                  {
                    value: "card",
                    label: "Card 卡片"
                  },
                  {
                    value: "carousel",
                    label: "Carousel 走马灯"
                  },
                  {
                    value: "collapse",
                    label: "Collapse 折叠面板"
                  }
                ]
              }
            ]
          },
          {
            value: "ziyuan",
            label: "资源",
            children: [
              {
                value: "axure",
                label: "Axure Components"
              },
              {
                value: "sketch",
                label: "Sketch Templates"
              },
              {
                value: "jiaohu",
                label: "组件交互文档"
              }
            ]
          }
        ]
      },
      events: {}
    }
  ]
};