let what = {
  id: 'jm-el-carousel',
  needRegis: true,
  name: '走马灯',
  img: 'carousel',
  link:"https://element.eleme.io/#/zh-CN/component/carousel",
  icon:'',
  grouptype: '其他'
}

var props = {
  height: {
    default: '300px',
    des: '走马灯的高度',
    type: String
  },
  initialIndex: {
    default: 0,
    des: '初始状态索引',
    type: Number
  },
  autoplay: {
    default: true,
    des: '是否自动切换',
    type: Boolean
  },
  interval: {
    default: 3000,
    des: '自动切换的时间间隔',
    type: Number
  },
  indicatorPosition: {
    default: 'outside',
    des: '指示器的位置',
    enumValue: [
      {
        value: '',
        des: '内部'
      },
      {
        value: 'none',
        des: '无'
      },
      {
        value: 'outside',
        des: '外部'
      }
    ],
    type: String
  },
  arrow: {
    default: 'hover',
    des: '切换箭头的显示',
    enumValue: [
      {
        value: 'hover',
        des: '默认'
      },
      {
        value: 'always',
        des: '一直显示'
      },
      {
        value: 'never',
        des: '不显示'
      }
    ],
    type: String
  },
  type: {
    default: '',
    des: '走马灯的类型',
    enumValue: [
      {
        value: '',
        des: '默认'
      },
      {
        value: 'card',
        des: '卡片'
      }
    ],
    type: String
  },
  loop: {
    default: true,
    des: '是否循环显示',
    type: Boolean
  },
  direction: {
    default: 'horizontal',
    des: '走马灯展示的方向',
    enumValue: [
      {
        value: 'horizontal',
        des: '水平'
      },
      {
        value: 'vertical',
        des: '垂直'
      }
    ],
    type: String
  },
  items: {
    default: [],
    des: '显示内容',
    fieldConfig: {
      title: '页面内容配置',
      config: [
        {
          name: 'path',
          chinaName: '路径',
          type: 'Array',
          pageOption: true,
          default: ''
        }
      ]
    },
    type:Array
  },
  renderMode: {
    default: 'direct',
    des: '渲染模式',
    enumValue:[{
        value:'direct',
        des:'直渲模式'
    }],
    type:String
  }
}
what.props = props

var events = {
    change: {
        args: ["index"],
        des: "幻灯片切换时触发"
    },
}
what.events = events

let examples = [
    {
        name: "基础用法",
        img: "carousel",
        props: {
            style_flex: 1,
            items:[
                {
                    path: "/",
                },
                {
                    path:"/second",
                }
            ]
        }
    }

]

export default {
    what: what,
    examples: examples
}