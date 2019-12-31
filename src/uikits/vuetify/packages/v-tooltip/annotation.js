import { Color } from '../../../type'
export default {
  what: {
    id: 'v-tooltip',
    name: '文字提示',
    grouptype: '基础组件',
    img: 'v_tooltip',
    link: 'https://vuetifyjs.com/zh-Hans/components/tooltips',
		icon:'',
    props: {
      innerText: {
        default: "",
        title: '文本内容',
        type: String
      },
      color: {
        default: undefined,
        type: Color,
        title: '颜色'
      },
      openDelay: {
        default: 0,
        type: [Number, String],
        title: '打开延时'
      },
      closeDelay: {
        default: 0,
        type: [Number, String],
        title: '关闭延时'
      },
      eager: {
        default: false,
        type: Boolean,
        title: '安装时渲染',
        des:"将强制组件内容在安装时渲染。如果您有要在SEO中爬网的DOM中无法呈现的内容，这将很有用。"
      },
      attach: {
        default: false,
        type: null,
        title: '固定'
      },
      contentClass: {
        default: '',
        type: String,
        title: '内容css类'
      },
      absolute: {
        default: false,
        type: Boolean,
        title: '绝对的'
      },
      bottom: {
        default: false,
        type: Boolean,
        title: '底部'
      },
      fixed: {
        default: true,
        type: Boolean,
        title: '固定的'
      },
      left: {
        default: false,
        type: Boolean,
        title: '左边'
      },
      right: {
        default: false,
        type: Boolean,
        title: '右边'
      },
      top: {
        default: false,
        type: Boolean,
        title: '顶部'
      },
      value: {
        default: false,
        type: null,
        title: '值',
        model:true
      },
      activator: {
        default: '',
        type: null,
        title: '激活态'
      },
      disabled: {
        default: false,
        type: Boolean,
        title: '禁用'
      },
      internalActivator: {
        default: false,
        type: Boolean,
        title: '内部激活'
      },
      openOnHover: {
        default: true,
        type: Boolean,
        title: '悬停打开'
      },
      allowOverflow: {
        default: false,
        type: Boolean,
        title: '允许溢出'
      },
      light: {
        default: false,
        type: Boolean,
        title: '明亮主题'
      },
      dark: {
        default: false,
        type: Boolean,
        title: '暗黑主题'
      },
      maxWidth: {
        default: 'auto',
        type: [Number, String],
        title: '最大宽度'
      },
      minWidth: {
        default: undefined,
        type: [Number, String],
        title: '最小宽度'
      },
      nudgeBottom: {
        default: 0,
        type: [Number, String],
        title: '轻推底部'
      },
      nudgeLeft: {
        default: 0,
        type: [Number, String],
        title: '轻推左边'
      },
      nudgeRight: {
        default: 0,
        type: [Number, String],
        title: '轻推右边'
      },
      nudgeTop: {
        default: 0,
        type: [Number, String],
        title: '轻推顶部'
      },
      nudgeWidth: {
        default: 0,
        type: [Number, String],
        title: '轻推宽度'
      },
      offsetOverflow: {
        default: false,
        type: Boolean,
        title: '偏移溢出'
      },
      openOnClick: {
        default: false,
        type: Boolean,
        title: '点击打开'
      },
      positionX: {
        default: undefined,
        type: Number,
        title: '位置x'
      },
      positionY: {
        default: undefined,
        type: Number,
        title: '位置y'
      },
      zIndex: {
        default: undefined,
        type: Number,
        title: '层级'
      },
      tag: {
        default: 'span',
        type: String,
        title: '标签'
      },
      transition: {
        default: undefined,
        type: String,
        title: '过度'
      }
    },
    events: {},
    slots: {
      default: {
        des: '默认插槽',
        title: '默认',
        components: []
      },
      activator: {
        des: 'When used, will activate the component when clicked (or hover for specific components). This manually stops the event propagation. Without this slot, if you open the component through its model, you will need to manually stop the event propagation                ',
				title: '激活组件',
        components: [],
        hasProps: true
      }
    }
  },
  examples: [
    {
      img: 'v_tooltips',
      name: '左侧提示',
      props: {
        left: true
      },
      slots: {
        activator: [
          {
            id: 'v-btn',
            props: {
              color: 'primary',
              dark: true
            },
            slots: {
              default: [
                {text: 'Left'}
              ]
            }
          }
        ],
        default: [
          {text: 'Left tooltip'}
        ]
      }
    },
    {
      img: 'v_tooltips_top',
      name: '上方提示',
      props: {
        top: true,
        innerText: 'Top tooltip'
      },
      slots: {
        activator: [
          {
            id: 'v-btn',
            props: {
              color: 'primary',
              dark: true
            },
            slots: {
              default: [
                {text: 'top'}
              ]
            }
          }
        ],
        default: [
          {text: 'Top tooltip'}
        ]
      }
    },
    {
      img: 'v_tooltips_bottom',
      name: '底部提示',
      props: {
        bottom: true,
        innerText: 'Bottom tooltip'
      },
      slots: {
        activator: [
          {
            id: 'v-btn',
            props: {
              color: 'primary',
              dark: true
            },
            slots: {
              default: [
                {text: 'Bottom'}
              ]
            }
          }
        ],
        default: [
          {text: 'Bottom tooltip'}
        ]
      }
    },
    {
      img: 'v_tooltips_right',
      name: '右侧提示',
      props: {
        right: true,
        innerText: 'Right tooltip'
      },
      slots: {
        activator: [
          {
            id: 'v-btn',
            color: 'primary',
            dark: true
          }
        ]
      }
    }
  ]
}
