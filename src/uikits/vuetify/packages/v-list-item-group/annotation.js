import { Color } from '../../../type'
export default {
  what: {
    id: 'v-list-item-group',
    name: '列表项组',
    link:
      'https://vuetifyjs.com/en/components/list-item-groups#list-item-groups',
    grouptype: '表格和列表',
    img: 'list_group_text',
		icon:'',
    props: {
      value: {
        default: 1,
        type: null,
        title: '值',
        model: true
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
      activeClass: {
        default: 'v-item--active',
        type: String,
        title: '激活状态css类',
        des: '配置当链接处于活动状态时应用的活动CSS类'
      },
      mandatory: {
        default: false,
        type: Boolean,
        title: '强制性的'
      },
      max: {
        default: undefined,
        type: [Number, String],
        title: '最大'
      },
      multiple: {
        default: false,
        type: Boolean,
        title: '多项'
      },
      color: {
        default: undefined,
        type: Color,
        title: '颜色'
      },
      innerText: {
        default: '',
        title: '内部文本',
        type: String
      }
    },
    events: {
      click: {
        des: '点击',
        args: ['event']
      }
    },
    slots: {
      default: {
        default: '默认插槽',
        title: '默认',
        components: []
      }
    }
  },
  examples: [
    {
      name: '基础示例',
      img: 'list_group_text',
      props: {
        style_flex: 1,
        style_height: '50px',
        innerText: 'v-list-item-group内容'
      }
    }
  ]
}
