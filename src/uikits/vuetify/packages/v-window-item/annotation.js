export default {
  what: {
    id: 'v-window-item',
    name: '窗口子项',
    grouptype: '组',
    img: 'list_group_text',
    link: 'https://vuetifyjs.com/zh-Hans/components/windows',
		icon:'',
    props: {
      eager: {
        default: false,
        type: Boolean,
        title: '安装时渲染',
        des:"将强制组件内容在安装时渲染。如果您有要在SEO中爬网的DOM中无法呈现的内容，这将很有用。"
      },
      activeClass: {
        default: undefined,
        type: String,
        title: '激活状态css类',
				des:"配置当链接处于活动状态时应用的活动CSS类"
      },
      disabled: {
        default: false,
        type: Boolean,
        title: '禁用'
      },
      reverseTransition: {
        default: undefined,
        type: [Boolean, String],
        title: '反转动画'
      },
      transition: {
        default: undefined,
        type: [Boolean, String],
        title: '动画'
      },
      value: {
        default: 0,
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
      change: {
        des: 'change',
        args: []
      }
    },
    slots: {
      default: {
        des: '默认插槽',
        title: '默认',
        components: []
      }
    }
  },
  examples: [
    {
      img: 'v_window',
      name: '基础示例',
      props: {
        innerText: '窗口子项文本',
        value: 'template'
      },
      slots: {}
    }
  ]
}
