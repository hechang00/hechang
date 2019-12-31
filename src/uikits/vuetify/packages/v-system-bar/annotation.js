import { Color } from '../../../type'
export default {
  what: {
    id: 'v-system-bar',
    name: '系统状态栏',
    grouptype: '栏',
    img: 'v_system',
    link: 'https://vuetifyjs.com/zh-Hans/components/systemBars',
		icon:'',
    props: {
      absolute: {
        default: false,
        type: Boolean,
        title: '绝对的'
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
      color: {
        default: undefined,
        type: Color,
        title: '颜色'
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
      height: {
        default: undefined,
        type: [Number, String],
        title: '高度'
      },
      lightsOut: {
        default: false,
        type: Boolean,
        title: '外发光'
      },
      window: {
        default: false,
        type: Boolean,
        title: '窗户'
      }
    },
    events: {},
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
      img: 'v_sys_bar1',
      name: '基础示例',
      props: {
        color: '#FF9800',
        height: 30,
        lightsOut: false,
        window: false
      },
      slots: {
        default: [
          {
            id: 'v-icon',
            props: {
              innerText: 'mdi-gmail'
            }
          },
          {
            text: '10 unread emails'
          },
          {
            id: 'v-icon',
            props: {
              innerText: 'mdi-wifi-strength-4'
            }
          },
          {
            id: 'v-icon',
            props: {
              innerText: 'mdi-signal-cellular-outline'
            }
          },
          {
            id: 'v-icon',
            props: {
              innerText: 'mdi-battery'
            }
          },
          {
            text: '12:30'
          }
        ]
      }
    },
    {
      img: 'v_sys_bar1',
      name: '有色系统栏',
      props: {
        absolute: false,
        fixed: false,
        app: false,
        color: 'red lighten-2',
        dark: true,
        light: false,
        lightsOut: false,
        window: false
      },
      slots: {
        default: [
          {
            id: 'v-icon',
            name: 'v-icon',
            props: {
              large: false,
              small: false,
              xLarge: false,
              xSmall: false,
              dark: null,
              light: null,
              dense: false,
              disabled: false,
              left: false,
              right: false,
              tag: 'i'
            },
            slots: {
              default: [{ text: 'mdi-wifi-strength-4' }]
            }
          },
          {
            id: 'v-icon',
            name: 'v-icon',
            props: {
              large: false,
              small: false,
              xLarge: false,
              xSmall: false,
              dark: null,
              light: null,
              dense: false,
              disabled: false,
              left: false,
              right: false,
              tag: 'i'
            },
            slots: {
              default: [{ text: 'mdi-signal-cellular-outline' }]
            }
          },
          {
            id: 'v-icon',
            name: 'v-icon',
            props: {
              large: false,
              small: false,
              xLarge: false,
              xSmall: false,
              dark: null,
              light: null,
              dense: false,
              disabled: false,
              left: false,
              right: false,
              tag: 'i'
            },
            slots: {
              default: [{ text: 'mdi-battery' }]
            }
          },
          { text: '12:30' }
        ]
      }
    },
    {
      img: 'v_sys_bar2',
      name: '暗色主题系统栏',
      props: {
        absolute: false,
        fixed: false,
        app: false,
        color: 'primary',
        dark: false,
        light: false,
        lightsOut: true,
        window: false
      },
      slots: {
        default: [
          {
            id: 'v-icon',
            name: 'v-icon',
            props: {
              large: false,
              small: false,
              xLarge: false,
              xSmall: false,
              dark: null,
              light: null,
              dense: false,
              disabled: false,
              left: false,
              right: false,
              tag: 'i'
            },
            slots: {
              default: [{ text: 'mdi-wifi-strength-4' }]
            }
          },
          {
            id: 'v-icon',
            name: 'v-icon',
            props: {
              large: false,
              small: false,
              xLarge: false,
              xSmall: false,
              dark: null,
              light: null,
              dense: false,
              disabled: false,
              left: false,
              right: false,
              tag: 'i'
            },
            slots: {
              default: [{ text: 'mdi-signal-cellular-outline' }]
            }
          },
          {
            id: 'v-icon',
            name: 'v-icon',
            props: {
              large: false,
              small: false,
              xLarge: false,
              xSmall: false,
              dark: null,
              light: null,
              dense: false,
              disabled: false,
              left: false,
              right: false,
              tag: 'i'
            },
            slots: {
              default: [{ text: 'mdi-battery' }]
            }
          },
          { text: '12:30' }
        ]
      }
    },
    {
      img: 'v_sys_bar3',
      name: '亮色主题系统栏',
      props: {
        absolute: false,
        fixed: false,
        app: false,
        color: 'primary',
        dark: true,
        light: false,
        lightsOut: true,
        window: false
      },
      slots: {
        default: [
          {
            id: 'v-icon',
            name: 'v-icon',
            props: {
              large: false,
              small: false,
              xLarge: false,
              xSmall: false,
              dark: null,
              light: null,
              dense: false,
              disabled: false,
              left: false,
              right: false,
              tag: 'i'
            },
            slots: {
              default: [{ text: 'mdi-wifi-strength-4' }]
            }
          },
          {
            id: 'v-icon',
            name: 'v-icon',
            props: {
              large: false,
              small: false,
              xLarge: false,
              xSmall: false,
              dark: null,
              light: null,
              dense: false,
              disabled: false,
              left: false,
              right: false,
              tag: 'i'
            },
            slots: {
              default: [{ text: 'mdi-signal-cellular-outline' }]
            }
          },
          {
            id: 'v-icon',
            name: 'v-icon',
            props: {
              large: false,
              small: false,
              xLarge: false,
              xSmall: false,
              dark: null,
              light: null,
              dense: false,
              disabled: false,
              left: false,
              right: false,
              tag: 'i'
            },
            slots: {
              default: [{ text: 'mdi-battery' }]
            }
          },
          { text: '12:30' }
        ]
      }
    }
  ]
}
