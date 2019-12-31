import { Color } from '../../../type'

export default {
  what: {
    id: 'v-app-bar',
    name: 'app状态栏',
    link: 'https://vuetifyjs.com/zh-Hans/components/app-bars',
    grouptype: '栏',
    img: 'v_app',
    icon:'',
    props: {
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
        title: '紧凑'
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
      collapse: {
        default: false,
        type: Boolean,
        title: '将工具栏置于折叠状态，以减小其最大宽度。'
      },
      dense: {
        default: false,
        type: Boolean,
        title: '将工具栏内容的高度降低到48px'
      },
      extended: {
        default: false,
        type: Boolean,
        title: '增加工具栏的高度'
      },
      extensionHeight: {
        default: 48,
        type: [Number, String],
        title: '拓展高度'
      },
      flat: {
        default: false,
        type: Boolean,
        title: '除去阴影'
      },
      floating: {
        default: false,
        type: Boolean,
        title: '为组件增加 display: inline-flex'
      },
      prominent: {
        default: false,
        type: Boolean,
        title: '内容区域高度增加'
      },
      short: {
        default: false,
        type: Boolean,
        title: '内容区域高度减少'
      },
      src: {
        default: '',
        type: [String, Object],
        title: 'src'
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
      value: {
        default: true,
        type: Boolean,
        title: '值'
      },
      fixed: {
        default: false,
        type: Boolean,
        title: '固定'
      },
      app: {
        default: false,
        type: Boolean,
        title: 'app'
      },
      clippedLeft: {
        default: false,
        type: Boolean,
        title: '向左裁剪'
      },
      clippedRight: {
        default: false,
        type: Boolean,
        title: '向右裁剪'
      },
      collapseOnScroll: {
        default: false,
        type: Boolean,
        title: '滚动折叠'
      },
      elevateOnScroll: {
        default: false,
        type: Boolean,
        title: '滚动提升'
      },
      fadeImgOnScroll: {
        default: false,
        type: Boolean,
        title: '使用src prop或img插槽时，滚动时将使图像褪色。'
      },
      hideOnScroll: {
        default: false,
        type: Boolean,
        title: '滚动时隐藏应用程序栏。仍会显示扩展插槽。'
      },
      invertedScroll: {
        default: false,
        type: Boolean,
        title: '向下滚动时隐藏应用程序栏，向上滚动时显示它。'
      },
      scrollOffScreen: {
        default: false,
        type: Boolean,
        title: '滚动时隐藏应用程序栏。将不显示扩展插槽。'
      },
      shrinkOnScroll: {
        default: false,
        type: Boolean,
        title: '滚动时，将突出的工具栏缩小为密集或短（默认）的工具栏。'
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
        des: '扩展内容',
        title: '扩展',
        components: []
      },
      img: {
        des: '插入图片',
        title: '图片',
        components: [],
        hasProps: true
      }
    }
  },
  examples: [
    {
      img: 'v_app_bar1',
      name: '基础用法',
      props: {
        absolute: true,
        dark: true,
        scrollTarget: '#playground-example',
        color: '#ff9800',
        elevateOnScroll: false,
        hideOnScroll: false,
        fadeOnScroll: false,
        fadeImgOnScroll: false,
        invertedScroll: false,
        collapse: false,
        collapseOnScroll: false,
        shrinkOnScroll: false,
        extended: false
      },
      slots: {
        default: [
          {
            id: 'v-btn',
            name: 'v-btn',
            props: {
              color: '#ff9800'
            },
            slots: {
              default: [
                {
                  id: 'v-icon',
                  name: 'v-icon',
                  slots: {
                    default: [{ text: 'mdi-menu' }]
                  }
                }
              ]
            }
          },
          {
            text: 'Page title'
          },
          {
            id: 'v-btn',
            name: 'v-btn',
            props: {
              color: '#ff9800'
            },
            slots: {
              default: [
                {
                  id: 'v-icon',
                  name: 'v-icon',
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
      img: 'v_app_bar2',
      name: '带背景图片',
      props: {
        src: 'https://picsum.photos/1920/1080?random',
        shrinkOnScroll: true,
        style_width: '400px'
      },
      slots: {
        default: [{ id: 'v-app-bar-nav-icon', props: {} }],
        img: [
          {
            id: 'v-img',
            props: {
              gradient: 'to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)'
            }
          }
        ]
      }
    }
  ]
}
