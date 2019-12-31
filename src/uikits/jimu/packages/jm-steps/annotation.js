import {
    Color
} from '../../../type';
export default {
  what: {
    id: "jm-steps",
    name: "步骤条",
    priority: 960,
    link:"https://element.eleme.io/#/zh-CN/component/steps",
    needRegis: true,
    grouptype: "导航组件",
    img: "step",
    icon: "",
    props: {
      direction: {
        default: "horizontal",
        des: "显示方向",
        type: String,
        enumValue: [
          {
            value: "horizontal",
            des: "横向"
          },
          {
            value: "vertical",
            des: "竖向"
          }
        ]
      },
      active: {
        default: 0,
        des: "当前激活步骤",
        type: Number
      },
      space: {
        default: 180,
        des: "间距",
        type: Number
      },
      simple: {
        default: false,
        des: "是否应用简洁风格",
        type: Boolean
      },
      alignCenter: {
        default: false,
        des: "是否居中",
        type: Boolean
      },
      finishStatus: {
        default: "success",
        des: "结束步骤的状态",
        type: String,
        enumValue: [
          {
            value: "success",
            des: "成功"
          },
          {
            value: "finish",
            des: "完成"
          },
          {
            value: "error",
            des: "出错"
          },
          {
            value: "wait",
            des: "等待"
          },
          {
            value: "process",
            des: "进行中"
          }
        ]
      },
      items: {
        default: [],
        des: "步骤",
        fieldConfig: {
          title: "步骤属性",
          config: [
            {
              name: "title",
              chinaName: "标题",
              type: "String",
              default: ""
            },
            {
              name: "description",
              chinaName: "描述性文字",
              type: "String",
              default: ""
            },
            {
              name: "icon",
              chinaName: "图标名",
              type: "String",
              default: ""
            },
            {
              name: "status",
              chinaName: "状态",
              type: "Array",
              default: "isLeaf",
              array: ["wait", "process", "finish", "error", "success"],
              trans: ["等待", "处理", "完成", "错误", "成功"]
            },
            {
              name: "iconSlot",
              chinaName: "图标插槽",
              pageOption: true,
              isSlot: true,
              type: "Array",
              default: ""
            },
            {
              name: "titleSlot",
              chinaName: "标题插槽",
              pageOption: true,
              isSlot: true,
              type: "Array",
              default: ""
            },
            {
              name: "descriptionSlot",
              chinaName: "描述文字插槽",
              pageOption: true,
              isSlot: true,
              type: "Array",
              default: ""
            }
          ]
        },
        type: Array
      },
      iconSlotData: {
        default: {},
        type: Object,
        title: "图标插槽数据"
      },
      titleSlotData: {
        default: {},
        type: Object,
        title: "标题插槽数据"
      },
      descriptionSlotData: {
        default: {},
        type: Object,
        title: "描述文字插槽数据"
      }
    },
    events: {}
  },
  examples: [
    {
      name: "默认",
      props: {
        direction: "horizontal",
        simple: false,
        style_flex: 1,
        items: [
          {
            title: "步骤1",
            icon: "",
            description: ""
          },
          {
            title: "步骤2",
            icon: "",
            description: ""
          },
          {
            title: "步骤3",
            icon: "",
            description: ""
          }
        ]
      }
    },
    {
      name: "竖式",
      props: {
        direction: "vertical",
        simple: false,
        items: [
          {
            title: "步骤1",
            icon: "",
            description: ""
          },
          {
            title: "步骤2",
            icon: "",
            description: ""
          },
          {
            title: "步骤3",
            icon: "",
            description: ""
          }
        ]
      }
    },
    {
      name: "简洁风格",
      img: "stepSimple",
      props: {
        style_flex: 1,
        simple: true,
        direction: "horizontal",
        items: [
          {
            title: "步骤1",
            icon: "el-icon-edit",
            description: ""
          },
          {
            title: "步骤2",
            icon: "el-icon-upload",
            description: ""
          },
          {
            title: "步骤3",
            icon: "el-icon-picture",
            description: ""
          }
        ]
      }
    },
    {
      name: "自定义描述文字",
      img: "stepText",
      props: {
        simple: false,
        direction: "horizontal",
        style_flex: 1,
        items: [
          {
            title: "步骤1",
            icon: "",
            description: "这是自定义描述文字"
          },
          {
            title: "步骤2",
            icon: "",
            description: "这是自定义描述文字"
          },
          {
            title: "步骤3",
            icon: "",
            description: "这是自定义描述文字"
          }
        ]
      }
    }
  ]
};