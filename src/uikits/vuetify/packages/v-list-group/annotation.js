import { Color } from '../../../type'
export default {
  what: {
    id: 'v-list-group',
    name: '列表组',
    link: 'https://vuetifyjs.com/zh-Hans/components/lists',
    grouptype: '表格和列表',
    img: 'list_group_item',
		icon:'',
    props: {
      eager: {
        default: false,
        type: Boolean,
        title: '安装时渲染',
        des:
          '将强制组件内容在安装时渲染。如果您有要在SEO中爬网的DOM中无法呈现的内容，这将很有用。'
      },
      color: {
        default: 'primary',
        type: Color,
        title: '颜色'
      },
      value: {
        default: 1,
        type: null,
        title: '值'
      },
      activeClass: {
        default: '',
        type: String,
        title: '激活状态css类',
        des: '配置当链接处于活动状态时应用的活动CSS类'
      },
      appendIcon: {
        default: '$expand',
        type: String,
        title: '附加图标'
      },
      disabled: {
        default: false,
        type: Boolean,
        title: '禁用'
      },
      group: {
        default: undefined,
        type: String,
        title: '增长'
      },
      noAction: {
        default: false,
        type: Boolean,
        title: 'noAction'
      },
      prependIcon: {
        default: undefined,
        type: String,
        title: '前置图标'
      },
      ripple: {
        default: true,
        type: [Boolean, Object],
        title: '波浪'
      },
      subGroup: {
        default: false,
        type: Boolean,
        title: '子增长'
      }
    },
    events: {
      click: {
        des: 'click',
        args: ['event']
      }
    },
    slots: {
      default: {
        default: '默认插槽',
        title: '默认',
        components: []
      },
      activator: {
        des: 'activator插槽',
        title: '激活',
        components: []
      },
      'append-icon': {
        des: 'append-icon插槽',
        title: '前置图标',
        components: []
      },
      'prepend-icon': {
        des: 'prepend-icon插槽',
        title: '后置图标',
        components: []
      }
    }
  },
  examples: [
    {
      name: '基础示例',
      img: 'list_group_item',
      props: {
        style_flex: 1
      }
    }
  ]
}
