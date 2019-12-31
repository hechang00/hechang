import {
	Color
  } from '../../../type';
export default {
  what: {
    id: 'v-toolbar',
    name: '工具栏',
    grouptype: '栏',
    img: 'nav_menu',
    link: 'https://vuetifyjs.com/zh-Hans/components/toolbars',
		icon:'',
    props: {
      innerText: {
        default: 'toolbar',
        title: '文本内容',
        type: String
      },
      color: {
        default: undefined,
        type: Color,
        title: '颜色'
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
        default: 'header',
        type: String,
        title: '标签'
      },
      tile: {
        default: true,
        type: Boolean,
        title: '标题'
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
      collapse: {
        default: false,
        type: Boolean,
        title: '折叠'
      },
      dense: {
        default: false,
        type: Boolean,
        title: '密集'
      },
      extended: {
        default: false,
        type: Boolean,
        title: '扩展的'
      },
      extensionHeight: {
        default: 48,
        type: [Number, String],
        title: '扩展的高度'
      },
      flat: {
        default: false,
        type: Boolean,
        title: '平面'
      },
      floating: {
        default: false,
        type: Boolean,
        title: '浮动的'
      },
      prominent: {
        default: false,
        type: Boolean,
        title: '突出的'
      },
      short: {
        default: false,
        type: Boolean,
        title: '短的'
      },
      src: {
        default: undefined,
        type: [String, Object],
        title: '文件路径'
      }
    },
    events: {},
    slots: {
      default: {
        des: '默认插槽',
        title: '默认',
        components: []
      },
      extension: {
        des: '拓展插槽',
        title: '拓展',
        components: []
      },
      img: {
        des: '图片插槽',
        title: '图片',
        components: [],
        hasProps: true
      }
    }
  },
  examples: [
    {
      img: 'v_tool_bar1',
      name: '基础示例',
      props: { innerText: '工具栏' }
    },
    {
      img: 'v_tool_bar2',
      name: '亮色工具栏',
      props: {
        innerText: '',
        dark: false,
        light: false,
        tag: 'header',
        tile: true,
        absolute: false,
        bottom: false,
        collapse: false,
        dense: false,
        extended: false,
        extensionHeight: 48,
        flat: false,
        floating: false,
        prominent: false,
        short: false,
        src: ''
      },
      slots: {
        default: [
          {
            id: 'v-btn',
            props: { innerText: '', icon: true },
            slots: {
              default: [
                {
                  id: 'v-icon',
                  props: {
                    dark: null,
                    light: null
                  },
                  slots: {
                    default: [{ text: 'mdi-arrow-left' }]
                  }
                }
              ]
            }
          },
          { text: 'Title' },
          {
            id: 'v-btn',
            props: { innerText: '', icon: true },
            slots: {
              default: [
                {
                  id: 'v-icon',
                  props: {
                    dark: null,
                    light: null
                  },
                  slots: {
                    default: [{ text: 'mdi-magnify' }]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      img: 'v_tool_bar3',
      name: '暗色工具栏',
      props: {
        dark: true,
        light: false,
        tag: 'header',
        tile: true,
        absolute: false,
        bottom: false,
        collapse: false,
        dense: false,
        extended: false,
        extensionHeight: 48,
        flat: false,
        floating: false,
        prominent: false,
        short: false,
        src: ''
      },
      slots: {
        default: [
          {
            id: 'v-btn',
            name: 'v-btn',
            props: { innerText: '', icon: true },
            slots: {
              default: [
                {
                  id: 'v-icon',
                  props: {},
                  slots: {
                    default: [{ text: 'mdi-reply' }]
                  }
                }
              ]
            }
          },
          {
            id: 'v-btn',
            name: 'v-btn',
            props: { innerText: '', icon: true },
            slots: {
              default: [
                {
                  id: 'v-icon',
                  props: {},
                  slots: {
                    default: [{ text: 'mdi-dots-vertical' }]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      img: 'v_tool_bar4',
      name: '自定义背景图片工具栏',
      props: {
        dark: true,
        light: false,
        tag: 'header',
        tile: true,
        absolute: false,
        bottom: false,
        collapse: false,
        dense: false,
        extended: false,
        extensionHeight: 48,
        flat: false,
        floating: false,
        prominent: true,
        short: false,
        src: 'https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg'
      },
      slots: {
        default: [
          {
            id: 'v-btn',
            props: { innerText: '', icon: true },
            slots: {
              default: [
                {
                  id: 'v-icon',
                  props: {},
                  slots: {
                    default: [{ text: '$vuetify.icons.menu' }]
                  }
                }
              ]
            }
          },
          { text: 'Vuetify' },
          {
            id: 'v-btn',
            props: { innerText: '', icon: true },
            slots: {
              default: [
                {
                  id: 'v-icon',
                  props: {},
                  slots: {
                    default: [{ text: 'mdi-export' }]
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