import {
    Color
} from '../../../type';
export default {
  what: {
    id: 'jm-el-timeline',
    needRegis: true,
    name: '时间线',
    link:"https://element.eleme.io/#/zh-CN/component/timeline",
    grouptype: '其他',
    img: 'timeline',
    icon:'',
    props: {
      reverse: {
        default: false,
        des: '是否倒序',
        type: Boolean
      },
      placement: {
        default: 'top',
        des: '时间位置',
        type: String,
        enumValue: [
          {
            value: 'top',
            des: '顶部'
          },
          {
            value: 'bottom',
            des: '下方'
          }
        ]
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
      items: {
        default: [],
        des: '显示内容',
        fieldConfig: {
          title: '时间线数据配置',
          config: [
            {
              name: 'content',
              chinaName: '内容',
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
              name: 'timestamp',
              chinaName: '时间戳',
              type: 'String',
              default: ''
            },
            {
              name: 'hide-timestamp',
              chinaName: '是否隐藏时间戳',
              type: 'Boolean',
              default: false
            },
            {
              name: 'placement',
              chinaName: '时间戳位置',
              type: 'Array',
              array: ['top', 'bottom'],
              trans: ['顶部', '底部'],
              default: 'bottom'
            },
            {
              name: 'type',
              chinaName: '类型',
              type: 'Array',
              default: '',
              array: ['', 'primary', 'success', 'warning', 'danger', 'info'],
              trans: ['默认', '主要', '成功', '警告', '危险', '信息']
            },
            {
              name: 'color',
              chinaName: '颜色',
              type: 'String',
              default: ''
            },
            {
              name: 'icon',
              chinaName: '图标',
              type: 'String',
              default: ''
            },
            {
              name: 'size',
              chinaName: '尺寸',
              type: 'Array',
              array: ['normal', 'large'],
              trans: ['正常', '放大'],
              default: 'normal'
            }
          ]
        },
        type: Array
      },
      isDefault: {
        default: true,
        des: '是否自定义内容',
        type: Boolean
      },
      renderMode: {
        default: 'direct',
        des: '渲染模式',
        type:String,
        enumValue:[{
          value:'direct',
          des:'直渲模式'
        }]
      }
    },
    events: {}
  },
  examples: [
    {
      name: '基础用法',
      img: 'baseTimeline',
      props: {
        reverse: false,
        isDefault: true,
        items: [
          {
            content: '活动按期开始',
            timestamp: '2018-04-15',
            type: 'info',
            color: '#e4e7ed',
            size: 'normal',
            icon: '',
            path: '/'
          },
          {
            content: '通过审核',
            timestamp: '2018-04-13',
            type: 'info',
            color: '#e4e7ed',
            size: 'normal ',
            icon: '',
            path: '/second'
          },
          {
            content: '创建成功',
            timestamp: '2018-04-11',
            type: 'info',
            color: '#e4e7ed',
            size: 'normal',
            icon: '',
            path: '/third'
          }
        ]
      }
    },
    {
      name: '自定义节点',
      img: 'definedNode',
      props: {
        reverse: false,
        isDefault: true,
        items: [
          {
            content: '支持使用图标',
            timestamp: '2018-04-12 20:46',
            type: 'primary',
            color: '',
            size: 'large',
            icon: 'el-icon-more',
            path: '/'
          },
          {
            content: '支持自定义颜色',
            timestamp: '2018-04-03 20:46',
            type: 'info',
            color: '#0bbd87',
            size: 'normal',
            icon: '',
            path: '/second'
          },
          {
            content: '支持自定义尺寸',
            timestamp: '2018-04-03 20:46',
            type: 'info',
            color: '#e4e7ed',
            size: 'large',
            icon: '',
            path: '/third'
          },
          {
            content: '默认样式的节点',
            timestamp: '2018-04-03 20:46',
            type: 'info',
            color: '#e4e7ed',
            size: 'normal',
            icon: '',
            path: '/fourth'
          }
        ]
      }
    },
    {
      name: '自定义内容',
      img: 'definedContent',
      props: {
        reverse: false,
        isDefault: false,
        items: [
          {
            content: '',
            timestamp: '2018-04-15',
            type: 'info',
            color: '#e4e7ed',
            size: 'normal',
            icon: '',
            path: '/'
          },
          {
            content: '',
            timestamp: '2018-04-13',
            type: 'info',
            color: '#e4e7ed',
            size: 'normal',
            icon: '',
            path: '/second'
          },
          {
            content: '',
            timestamp: '2018-04-11',
            type: 'info',
            color: '#e4e7ed',
            size: 'normal',
            icon: '',
            path: '/third'
          }
        ]
      }
    }
  ]
}