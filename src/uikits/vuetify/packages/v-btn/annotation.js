import {
	Color
  } from '../../../type';
export default {
  what: {
    id: 'v-btn',
    name: '按钮',
    grouptype: '基础组件',
    img: 'base_btn',
    link: 'https://vuetifyjs.com/zh-Hans/components/buttons',
		icon:'',
    props: {
      innerText: {
        default: 'button',
        title: '文本内容',
        type: String
      },
      color: {
        default: '',
        type: String,
        title: '颜色',
        enumValue: [
          { value: '', des: '默认' },
          { value: 'primary', des: '主要' },
          { value: 'secondary', des: '次要' },
          { value: 'accent', des: '强调' },
          { value: 'success', des: '成功' },
          { value: 'warning', des: '告警' },
          { value: 'error', des: '危险' },
          { value: 'info', des: '信息' }
        ]
      },
      elevation: {
        default: undefined,
        type: [Number, String],
        title: '相对深度'
      },
      height: {
        default: undefined,
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
      tag: {
        default: 'button',
        type: String,
        title: '标签'
      },
      tile: {
        default: false,
        type: Boolean,
        title: '紧凑'
      },
      activeClass: {
        default: '',
        type: String,
        title: '激活状态css类',
				des:"配置当链接处于活动状态时应用的活动CSS类"
      },
      append: {
        default: false,
        type: Boolean,
        title:'插入元素',
        des:'设置附加属性总是将相对路径附加到当前路径。您可以在vue-router文档中找到有关append prop的更多信息。'
      },
      disabled: {
        default: false,
        type: Boolean,
        title: '禁用'
      },
      exact: {
        default: false,
        type: Boolean,
        title:'精确的',
        des:'完全匹配链接。没有这个，“ /”将匹配所有路由。您可以在vue-router文档中找到有关确切道具的更多信息。'
      },
      exactActiveClass: {
        default: '',
        type: String,
        title: '完全匹配活动CSS类',
        des: '配置具有完全匹配的活动链接时应用的活动CSS类'
      },
      link: {
        default: false,
        type: Boolean,
        title: '是否有链接'
      },
      href: {
        default: undefined,
        type: [String, Object],
        title: '链接地址'
      },
      to: {
        default: undefined,
        type: [String, Object],
        title:'to',
        des:'表示链接的目标路由。您可以在vue-router文档中找到有关prop的更多信息。'
      },
      nuxt: {
        default: false,
        type: Boolean,
        title: 'nuxt框架',
        des: '指定链接为nuxt链接。与nuxt框架一起使用。'
      },
      replace: {
        default: false,
        type: Boolean,
        title:'替代',
        des:'设置replace prop将在单击时调用router.replace（）而不是router.push（），因此导航不会留下历史记录。您可以在vue-router文档中找到有关replace属性的更多信息。'
      },
      ripple: {
        default: undefined,
        type: [Boolean, Object],
        title: 'v-ripple属性'
      },
      target: {
        default: '_blank',
        type: String,
        title: '目标属性',
        des: '指定目标属性。仅应在使用href属性时应用。'
      },
      absolute: {
        default: false,
        type: Boolean,
        title: '绝对布局'
      },
      bottom: {
        default: false,
        type: Boolean,
        title: '底部对齐'
      },
      fixed: {
        default: false,
        type: Boolean,
        title: 'fixed布局'
      },
      left: {
        default: false,
        type: Boolean,
        title: '左侧对齐'
      },
      right: {
        default: false,
        type: Boolean,
        title: '右侧对齐'
      },
      top: {
        default: false,
        type: Boolean,
        title: '上方对齐'
      },
      large: {
        default: false,
        type: Boolean,
        title: '大号'
      },
      small: {
        default: false,
        type: Boolean,
        title: '小号'
      },
      xLarge: {
        default: false,
        type: Boolean,
        title: '超大号'
      },
      xSmall: {
        default: false,
        type: Boolean,
        title: '超小号'
      },
      inputValue: {
        default: false,
        type: null,
        title: '按钮是否活跃态'
      },
      block: {
        default: false,
        type: Boolean,
        title: '宽度100％',
        des: '将按钮扩展到可用空间的100％。'
      },
      depressed: {
        default: false,
        type: Boolean,
        title: '消除阴影'
      },
      fab: {
        default: false,
        type: Boolean,
        title: '浮动圆形按钮',
        des: '将按钮指定为浮动动作按钮-圆形。'
      },
      icon: {
        default: false,
        type: Boolean,
        title: '图标'
      },
      loading: {
        default: false,
        type: Boolean,
        title: '加载中'
      },
      outlined: {
        default: false,
        type: Boolean,
        title: '边框'
      },
      rounded: {
        default: false,
        type: Boolean,
        title: '圆角'
      },
      text: {
        default: false,
        type: Boolean,
        title: '文本'
      },
      type: {
        default: 'button',
        type: String,
        title: '类型',
        enumValue: [
          {
            value: 'success',
            des: '成功'
          },
          {
            value: 'warning',
            des: '告警'
          },
          {
            value: 'error',
            des: '错误'
          },
          {
            value: 'info',
            des: '信息'
          }
        ]
      },
      value: {
        default: undefined,
        type: Number,
        title: '值',
        des: '在组中选择组件时使用的值。如果未提供，将使用索引。'
      }
    },
    events: {
      click: {
        des: '点击事件',
        args: ['p1']
      },
      change: {
        des: '数据改变事件',
        args: ['value']
      }
    },
    slots: {
      default: {
        des: '默认',
        title: '默认',
        components: []
      },
      loader: {
        des: '自定义loader',
        title: '自定义loader',
        components: []
      }
    }
  },
  examples: [
    {
      img: 'v_btn1',
      name: '基本用法',
      props: {
        color: 'primary',
        innerText: '基本按钮'
      }
    },
    {
      img: 'v_btn2',
      name: '文字按钮',
      props: {
        text: true,
        color: 'primary',
        innerText: '文字按钮'
      }
    },
    {
      img: 'v_btn3',
      name: '禁用按钮',
      props: {
        disabled: true,
        icon: true
      }
    },
    {
      img: 'v_btn4',
      name: '块状按钮',
      props: {
        block: true,
        dark: true,
        color: 'accent'
      }
    },
    {
      img: 'v_btn4',
      name: '圆弧按钮',
      props: {
        rounded: true,
        color: 'primary',
        innerText: 'Rounded Button'
      }
    },
    {
      img: 'v_btn4',
      name: '凹陷按钮',
      props: {
        depressed: true,
        color: 'primary'
      }
    },
    {
      img: 'v_btn5',
      name: '轮廓按钮',
      props: {
        outlined: true,
        color: 'indigo',
        innerText: 'Outlined Button'
      }
    },
    {
      img: 'v_btn6',
      name: '浮动按钮',
      props: {
        fab: true,
        dark: true,
        small: true,
        color: 'primary',
        innerText: ''
      },
      slots: {
        default: [
          {
            id: 'v-icon',
            props: {
              dark: true
            },
            slots: {
              default: [{ text: 'mdi-minus' }]
            }
          }
        ]
      }
    },
    {
      img: 'v_btn7',
      name: '带图标按钮',
      props: {
        outlined: true,
        tile: true,
        color: 'success',
        innerText: ''
      },
      slots: {
        default: [
          {
            id: 'v-icon',
            props: {
              left: true
            },
            slots: {
              default: [{ text: 'mdi-pencil' }]
            }
          },
          {
            text: 'Edit',
            props: {
              color: null
            }
          }
        ]
      }
    }
  ]
}