import { Color } from '../../../type'
export default {
  what: {
    id: 'v-bottom-navigation',
    name: '底部导航',
    grouptype: '基础组件',
    img: 'v_bottom_nav',
    link: 'https://vuetifyjs.com/zh-Hans/components/bottom-navigation',
		icon:'',
    props: {
      absolute: {
        default: false,
        type: Boolean,
        title: '绝对布局'
      },
      bottomNav: {
        default: false,
        type: Boolean,
        title: '底部导航',
        model: true
      },
      fixed: {
        default: false,
        type: Boolean,
        title: '固定位置'
      },
      app: {
        default: false,
        type: Boolean,
        title: 'app'
      },
      color: {
        default: undefined,
        type: Color,
        title: '颜色'
      },
      height: {
        default: 56,
        type: [Number, String],
        title: '高度'
      },
      maxHeight: {
        default: undefined,
        type: [Number, String],
        title: '最大高度'
      },
      maxWidth: {
        default: undefined,
        type: [Number, String],
        title: '最大宽度'
      },
      minHeight: {
        default: undefined,
        type: [Number, String],
        title: '最小高度'
      },
      minWidth: {
        default: undefined,
        type: [Number, String],
        title: '最小宽度'
      },
      width: {
        default: undefined,
        type: [Number, String],
        title: '宽度'
      },
      inputValue: {
        default: true,
        type: Boolean,
        title: '输入值'
      },
      value: {
        default: undefined,
        type: Number,
        title: '值'
      },
      scrollTarget: {
        default: undefined,
        type: String,
        title: '滚动目标'
      },
      scrollThreshold: {
        default: undefined,
        type: [String, Number],
        title: '滚动阈值'
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
        default: 'v-btn--active',
        type: String,
        title: '激活css类'
      },
      backgroundColor: {
        default: undefined,
        type: String,
        title: '背景颜色'
      },
      grow: {
        default: false,
        type: Boolean,
        title: '增长'
      },
      hideOnScroll: {
        default: false,
        type: Boolean,
        title: '滚动隐藏'
      },
      horizontal: {
        default: false,
        type: Boolean,
        title: '水平'
      },
      mandatory: {
        default: false,
        type: Boolean,
        title: '强制性的'
      },
      shift: {
        default: false,
        type: Boolean,
        title: 'shift'
      }
    },
    events: {
      change: {
        des: '选中数值变化函数',
        args: ['value']
      },
      'update:input-value': {
        des: '更新函数',
        args: ['value']
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
      img: 'v_bottom_navs',
      name: '基本用法',
      props: {
        value: 'activeBtn',
        color: 'deep-purple accent-4'
      },
      slots: {
        default: [
          {
            id: 'v-btn',
            props: {
              innerText: ''
            },
            slots: {
              default: [
                { text: 'Recent' },
                {
                  id: 'v-icon',
                  props: {},
                  slots: {
                    default: [{ text: 'mdi-history' }]
                  }
                }
              ]
            }
          },
          {
            id: 'v-btn',
            props: {
              innerText: ''
            },
            slots: {
              default: [
                { text: 'Favorites' },
                {
                  id: 'v-icon',
                  props: {},
                  slots: {
                    default: [{ text: 'mdi-heart' }]
                  }
                }
              ]
            }
          },
          {
            id: 'v-btn',
            props: {
              innerText: ''
            },
            slots: {
              default: [
                { text: 'Nearby' },
                {
                  id: 'v-icon',
                  props: {},
                  slots: {
                    default: [{ text: 'mdi-map-marker' }]
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ]
}