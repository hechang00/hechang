import {
    Color
} from '../../../type';
export default {
  what: {
    id: 'jm-el-tab-pages',
    needRegis: true,
    name: '导航标签',
    priority:990,
    grouptype: '导航组件',
    img: 'nav_tags',
    registID: true,
    icon: '',
    props: {
      type: {
        default: '',
        des: '风格类型',
        type: String,
        enumValue: [
          {
            value: '',
            des: '基础'
          },
          {
            value: 'card',
            des: '卡片'
          },
          {
            value: 'border-card',
            des: '边框卡片'
          }
        ]
      },
      value: {
        default: '',
        des: '绑定值，选中选项卡的 name',
        model: true,
        type: String
      },
      position: {
        default: 'top',
        des: '选项卡所在位置',
        type: String,
        enumValue: [
          {
            value: 'top',
            des: '顶部'
          },
          {
            value: 'right',
            des: '右边'
          },
          {
            value: 'bottom',
            des: '底部'
          },
          {
            value: 'left',
            des: '左边'
          }
        ]
      },
      stretch: {
        default: false,
        des: '标签的宽度是否自撑开',
        type: Boolean
      },
      items: {
        default: [],
        des: '标签页清单，结构为[{label:,path:}]',
        fieldConfig: {
          title: 'tab项配置',
          config: [
            {
              name: 'path',
              chinaName: '路径',
              type: 'Array',
              pageOption: true,
              default: ''
            },
            {
              name: 'label',
              chinaName: '标签名',
              type: 'String',
              default: ''
            },
            {
              name: 'visible',
              chinaName: '显示',
              type: 'Boolean',
              default: true
            }
          ]
        },
        type: Array
      },
      closable: {
        default: false,
        des: '是否可关闭',
        type: Boolean
      },
      renderMode: {
        default: 'router',
        des: '渲染模式',
        type: String,
        enumValue: [
          {
            value: 'router',
            des: '路由模式'
          },
          {
            value: 'direct',
            des: '直渲模式'
          }
        ]
      },
      keepalive: {
        default: false,
        des: '是否保活',
        type: Boolean
      },
      beforeRoute: {
        default: '',
        type: Function,
        des: '路由前置函数，可更改地址或补充参数',
        args: ['uri']
      }
    },
    events: {
      close: {
        des: '关闭时触发',
        args: ['path']
      },
      tabClick: {
        des: 'tab被选中时触发',
        args: ['label', 'path']
      },
      selectedChange: {
        des: 'tab选中值变化时触发',
        args: ['label', 'path']
      }
    }
  },
  examples: [
    {
      name: '基础用法',
      props: {
        style_marginLeft: '0px',
        style_marginRight: '0px',
        style_marginTop: '0px',
        style_marginBottom: '0px',
        value: '/default',
        style_width: '100%',
        items: [
          {
            label: '页1',
            path: '/',
            visible: true
          },
          {
            label: '页2',
            path: '/second',
            visible: true
          },
          {
            label: '页3',
            path: '/third',
            visible: true
          }
        ]
      }
    }
  ]
}