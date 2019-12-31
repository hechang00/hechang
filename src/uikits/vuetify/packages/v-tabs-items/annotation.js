import {Color} from '../../../type';
export default {
  what: {
    id: 'v-tabs-items',
    name: '标签单元组',
    link: 'https://vuetifyjs.com/en/components/app-bars',
    img: 'select_checkbox_pop',
    grouptype: '选项卡',
		icon:'',
    props: {
      innerText: {
        default: '',
        title: '内部文本',
        type: String
      },
      value: {
        default: '',
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
        default: 'v-window-item--active',
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
      continuous: {
        default: false,
        type: Boolean,
        title: '连续'
      },
      nextIcon: {
        default: '$next',
        type: [Boolean, String],
        title: '下一个'
      },
      prevIcon: {
        default: '$prev',
        type: [Boolean, String],
        title: '上一个'
      },
      reverse: {
        default: false,
        type: Boolean,
        title: '反方向'
      },
      showArrows: {
        default: false,
        type: Boolean,
        title: '显示箭头'
      },
      showArrowsOnHover: {
        default: false,
        type: Boolean,
        title: '悬浮显示箭头'
      },
      touch: {
        default: undefined,
        type: Object,
        title: '接触'
      },
      touchless: {
        default: false,
        type: Boolean,
        title: '非接触'
      },
      vertical: {
        default: false,
        type: Boolean,
        title: '垂直'
      }
    },
    events: {},
    slots: {
      default: {
        des: '默认描述',
        title: '默认',
        components: []
      }
    }
  },
  examples: [
    {
      img: 'v_tab1',
      name: '基础示例',
      props: { innerText: 'v-tab-items内容' },
      slots: {}
    }
  ]
}