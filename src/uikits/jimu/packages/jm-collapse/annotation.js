import {
    Color
} from '../../../type';
export default {
  what: {
    id: 'jm-collapse',
    needRegis: true,
    isContainer: true,
    name: '折叠面板',
    link:"https://element.eleme.io/#/zh-CN/component/collapse",
    priority:890,
    grouptype: '其他',
    img: 'collapse',
    icon:'',
    props: {
      accordion: {
        default: false,
        des: '是否手风琴效果',
        type: Boolean
      },
      items: {
        default: [],
        des: '显示内容',
        type: Array,
        fieldConfig: {
          title: '折叠面板内容配置',
          config: [
            {
              name: 'title',
              chinaName: '标题',
              type: 'String',
              default: ''
            },
            {
              name: 'path',
              chinaName: '路径',
              type: 'Array',
              pageOption: true,
              default: ''
            },
            {
              name: 'disabled',
              chinaName: '禁用',
              type: 'Boolean',
              default: true
            },
            {
              name: 'visible',
              chinaName: '显示',
              type: 'Boolean',
              default: true
            }
          ]
        }
      },
      textAlign: {
        default: 'left',
        des: '文字对齐方式',
        type: String,
        enumValue: [
          {
            value: 'left',
            des: '左对齐'
          },
          {
            value: 'center',
            des: '居中'
          },
          {
            value: 'right',
            des: '右对齐'
          },
          {
            value: 'justify',
            des: '版面对齐'
          }
        ]
      },
      isDefined: {
        default: false,
        des: '是否自定义内容',
        type: Boolean
      },
      renderMode: {
        default: 'direct',
        des: '渲染模式',
        type: String,
        enumValue: [
          {
            value: 'direct',
            des: '直渲模式'
          }
        ]
      },
      activeNames: {
        default: [],
        des: '激活的面板',
        type: [Array, String]
      }
    },
    events: {
      change: {
        des: '激活面板改变时触发',
        args: ['activeNames']
      }
    }
  },
  examples: [
    {
      name: '基础用法',
      img: 'baseCollapse',
      props: {
        style_flex: 1,
        accordion: false,
        isDefined: false,
        items: [
          {
            title: '一致性 Consistency',
            contents: [
              {
                value:
                  '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
              },
              {
                value:
                  '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
              }
            ],
            path: '/',
            name: 1,
            visible: true
          },
          {
            title: '反馈 Feedback',
            contents: [
              {
                value:
                  '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；'
              },
              {
                value:
                  '页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。'
              }
            ],
            name: 2,
            path: '/second',
            visible: true
          }
        ]
      }
    },
    {
      name: '手风琴效果',
      img: 'accordion',
      props: {
        accordion: true,
        style_flex: 1,
        isDefined: false,
        items: [
          {
            title: '一致性 Consistency',
            contents: [
              {
                value:
                  '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
              },
              {
                value:
                  '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
              }
            ],
            path: '/',
            name: 1,
            visible: true
          },
          {
            title: '反馈 Feedback',
            contents: [
              {
                value:
                  '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；'
              },
              {
                value:
                  '页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。'
              }
            ],
            name: 2,
            path: '/second',
            visible: true
          }
        ]
      }
    },
    {
      name: '自定义面板标题',
      img: 'customPanel',
      props: {
        accordion: false,
        style_flex: 1,
        isDefined: false,
        items: [
          {
            title: '一致性 Consistency',
            icon: 'el-icon-info',
            contents: [
              {
                value:
                  '与现实生活一致：与现实生活的流程、逻辑保持一致，遵循用户习惯的语言和概念；'
              },
              {
                value:
                  '在界面中一致：所有的元素和结构需保持一致，比如：设计样式、图标和文本、元素的位置等。'
              }
            ],
            path: '/',
            name: 1,
            visible: true
          },
          {
            title: '反馈 Feedback',
            contents: [
              {
                value:
                  '控制反馈：通过界面样式和交互动效让用户可以清晰的感知自己的操作；'
              },
              {
                value:
                  '页面反馈：操作后，通过页面元素的变化清晰地展现当前状态。'
              }
            ],
            name: 2,
            path: '/second',
            visible: true
          }
        ]
      }
    },
    {
      name: '自定义内容',
      img: 'definedCollpase',
      props: {
        accordion: true,
        style_flex: 1,
        isDefined: true,
        items: [
          {
            title: '一致性 Consistency',
            path: '/',
            name: 1,
            visible: true
          },
          {
            title: '反馈 Feedback',
            name: 2,
            path: '/second',
            visible: true
          }
        ]
      }
    }
  ]
}