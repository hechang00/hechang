import { Color } from '../../../type'
export default {
  what: {
    id: 'v-list-item',
    name: '列表项',
    link: 'https://vuetifyjs.com/zh-Hans/components/lists',
    grouptype: '表格和列表',
    img: 'list_group_item',
		icon:'',
    props: {
      color: {
        default: undefined,
        type: Color,
        title: '颜色'
      },
      activeClass: {
        default: undefined,
        type: String,
        title: '激活状态css类',
				des:"配置当链接处于活动状态时应用的活动CSS类"
      },
      append: {
        default: false,
        type: Boolean,
        title: '插入'
      },
      disabled: {
        default: false,
        type: Boolean,
        title: '禁用'
      },
      exact: {
        default: false,
        type: Boolean,
        title: '精度'
      },
      exactActiveClass: {
        default: undefined,
        type: String,
        title: '精度ActiveClass'
      },
      link: {
        default: false,
        type: Boolean,
        title: '链接'
      },
      href: {
        default: undefined,
        type: [String, Object],
        title: '锚点'
      },
      to: {
        default: undefined,
        type: [String, Object],
        title: '至'
      },
      nuxt: {
        default: false,
        type: Boolean,
        title: 'nuxt框架'
      },
      replace: {
        default: false,
        type: Boolean,
        title: '替代'
      },
      ripple: {
        default: undefined,
        type: [Boolean, Object],
        title: '波浪'
      },
      tag: {
        default: 'div',
        type: String,
        title: '标签'
      },
      target: {
        default: undefined,
        type: String,
        title: '目标'
      },
      dark: {
        default: false,
        type: Boolean,
        title: '暗黑主题'
      },
      light: {
        default: false,
        type: Boolean,
        title: '明亮主题'
      },
      inputValue: {
        default: '',
        type: null,
        title: '输入值'
      },
      dense: {
        default: false,
        type: Boolean,
        title: '密集的'
      },
      inactive: {
        default: false,
        type: Boolean,
        title: '非活跃状态'
      },
      selectable: {
        default: false,
        type: Boolean,
        title: '可选择的'
      },
      threeLine: {
        default: false,
        type: Boolean,
        title: '三行'
      },
      twoLine: {
        default: false,
        type: Boolean,
        title: '两行'
      },
      value: {
        default: '',
        type: null,
        title: '值',
        model: true
      },
      innerText: {
        default: '',
        title: '内部文本',
        type: String
      }
    },
    events: {
      click: {
        des: 'click',
        args: ['p1']
      },
      change: {
        des: 'change',
        args: []
      }
    },
    slots: {
      default: {
        des: '默认',
        title: '默认插槽',
        components: [],
        hasProps: true
      }
    }
  },
  examples: [
    {
      name: '基础示例',
      img: 'v_list_item1',
      props: {},
      slots: {
        default: [
          {
            text: 'list-item插槽页面'
          }
        ]
      }
    }
  ]
}
