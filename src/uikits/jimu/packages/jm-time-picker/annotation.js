import {
    Color
} from '../../../type';
export default {
  what: {
    id: "jm-time-picker",
    name: "时间选择器",
    link: "https://element.eleme.io/#/zh-CN/component/time-picker",
    grouptype: "表单组件",
    priority: 970,
    needRegis: true,
    img: "select_time",
    icon: "",
    props: {
      value: {
        default: "2016-10-10T10:40:00.000Z",
        type: Date,
        des: "当前选择数据",
        model: true
      },
      pickerOptions: {
        default: {},
        des: "日期选项配置",
        fieldConfig: {
          title: "日期选项配置",
          config: [
            {
              name: "selectableRange",
              chinaName: "可选时间段",
              type: "String",
              default: ""
            },
            {
              name: "format",
              chinaName: "时间格式化",
              type: "String",
              default: ""
            }
          ]
        },
        fieldConfig1: {
          title: "日期选项配置",
          config: [
            {
              name: "start",
              chinaName: "开始时间",
              type: "String",
              default: "09:00"
            },
            {
              name: "end",
              chinaName: "结束时间",
              type: "String",
              default: "18:00"
            },
            {
              name: "step",
              chinaName: "间隔时间	",
              type: "String",
              default: "00:30"
            },
            {
              name: "minTime",
              chinaName: "最小时间",
              type: "String",
              default: "00:00"
            },
            {
              name: "maxTime",
              chinaName: "最大时间",
              type: "String",
              default: ""
            }
          ]
        },
        notArray: true,
        type: Object
      },
      arrowControl: {
        default: false,
        des: "通过界面上的箭头进行选择",
        type: Boolean
      },
      fixedModel: {
        default: false,
        des: "开启固定时间点",
        type: Boolean
      },
      readonly: {
        default: false,
        des: "只读",
        type: Boolean
      },
      disabled: {
        default: false,
        des: "禁用",
        type: Boolean
      },
      editable: {
        default: true,
        des: "文本框可输入	",
        type: Boolean
      },
      clearable: {
        default: true,
        des: "是否显示清除按钮",
        type: Boolean
      },
      size: {
        default: "large",
        des: "输入框尺寸",
        type: String,
        enumValue: [
          {
            value: "large"
          },
          {
            value: "small"
          },
          {
            value: "mini"
          }
        ]
      },
      startPlaceholder: {
        default: "",
        des: "开始",
        type: String
      },
      endPlaceholder: {
        default: "",
        des: "结束",
        type: String
      },
      placeholder: {
        default: "选择日期",
        des: "占位符",
        type: String
      },
      isRange: {
        default: false,
        des: "是否为时间范围选择",
        type: Boolean
      },
      align: {
        default: "left",
        des: "对齐方式",
        type: String,
        enumValue: [
          {
            value: "left",
            des: "居左"
          },
          {
            value: "center",
            des: "居中"
          },
          {
            value: "right",
            des: "居右"
          }
        ]
      },
      rangeSeparator: {
        default: "-",
        des: "分隔符",
        type: String
      },
      valueFormat: {
        default: "",
        des: "返回值日期格式",
        type: String,
        enumValue: [
          {
            value: "",
            des: "Date类型"
          },
          {
            value: "yyyy-MM-dd",
            des: "格式化字符串"
          },
          {
            value: "yyyy/MM/dd",
            des: "格式化字符串"
          },
          {
            value: "yyyy-MM-dd HH:mm",
            des: "格式化字符串"
          },
          {
            value: "yyyy-MM-dd HH:mm:ss",
            des: "格式化字符串"
          },
          {
            value: "yyyy/MM/dd HH:mm",
            des: "格式化字符串"
          },
          {
            value: "yyyy/MM/dd HH:mm:ss",
            des: "格式化字符串"
          },
          {
            value: "timestamp",
            des: "时间戳"
          }
        ]
      },
      defaultValue: {
        default: "",
        des: "默认显示的时间",
        type: String
      },
      prefixIcon: {
        default: "el-icon-time",
        des: "头部图标的类名",
        type: String
      },
      clearIcon: {
        default: "el-icon-circle-close",
        des: "清空图标的类名",
        type: String
      }
    },
    events: {}
  },
  examples: [
    {
      name: "任意时间",
      props: {
        value: "2016-10-10T10:40:00.000Z",
        noShow: ["startPlaceholder", "endPlaceholder", "rangeSeparator"],
        pickerOptions: {
          selectableRange: "18:40:00 - 23:30:00"
        },
        arrowControl: false
      }
    },
    {
      name: "箭头进行选择时间",
      props: {
        value: "2016-10-10T10:40:00.000Z",
        noShow: ["startPlaceholder", "endPlaceholder", "rangeSeparator"],
        pickerOptions: {
          selectableRange: "18:40:00 - 23:30:00"
        },
        arrowControl: true
      }
    },
    {
      name: "固定时间点",
      props: {
        value: "09:30",
        noShow: [
          "isRange",
          "arrowControl",
          "startPlaceholder",
          "endPlaceholder",
          "rangeSeparator"
        ],
        pickerOptions: {
          start: "08:30",
          step: "00:15",
          end: "18:30"
        },
        fixedModel: true
      }
    },
    {
      name: "选择时间范围",
      props: {
        value: "2016-10-10T10:40:00.000Z",
        pickerOptions: {},
        arrowControl: false,
        isRange: true,
        startPlaceholder: "开始",
        endPlaceholder: "结束"
      }
    }
  ]
};