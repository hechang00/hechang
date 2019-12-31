// import {Color} from '../../../type';
export default {
  what: {
    id: 'v-expansion-panels',
    name: '折叠面板',
    link: 'https://vuetifyjs.com/zh-Hans/components/expansion-panels',
    // grouptype: '折叠面板',
    img: 'baseCollapse',
		icon:'',
    props: {
      innerText: {
        default: '',
        title: '文本内容',
        type: String
      },
      value: {
        default: [],
        type: null,
        title: '值',
        model:true
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
				des:"配置当链接处于活动状态时应用的活动CSS类"
      },
      mandatory: {
        default: false,
        type: Boolean,
        title: '强制性的'
      },
      max: {
        default: undefined,
        type: [Number, String],
        title: '最大值'
      },
      multiple: {
        default: false,
        type: Boolean,
        title: '多项'
      },
      accordion: {
        default: false,
        type: Boolean,
        title: '手风琴'
      },
      disabled: {
        default: false,
        type: Boolean,
        title: '禁用'
      },
      focusable: {
        default: false,
        type: Boolean,
        title: '专注'
      },
      inset: {
        default: false,
        type: Boolean,
        title: '插入'
      },
      popout: {
        default: false,
        type: Boolean,
        title: '弹出'
      },
      readonly: {
        default: false,
        type: Boolean,
        title: '只读'
      }
    },
    events: {},
    slots: {
      default: {
        des: '默认',
        title: '默认',
        components: []
      }
    }
  },
  examples: [
    {
      img: 'v_ex_pan',
      name: '基本用法',
      props: {},
      slots: {
        default: [
          {
            id: 'v-expansion-panel',
            name: 'v-expansion-panel',
            props: {
              activeClass: 'v-item--active',
              disabled: false,
              readonly: false
            },
            slots: {
              default: [
                {
                  id: 'v-expansion-panel-header',
                  name: 'v-expansion-panel-header',
                  props: {
                    disableIconRotate: false,
                    expandIcon: '$vuetify.icons.expand',
                    hideActions: false,
                    ripple: false
                  },
                  slots: {
                    default: [{ text: 'Item' }]
                  }
                },
                {
                  id: 'v-expansion-panel-content',
                  name: 'v-expansion-panel-content',
                  props: { eager: false },
                  slots: {
                    default: [
                      {
                        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            id: 'v-expansion-panel',
            name: 'v-expansion-panel',
            props: {
              activeClass: 'v-item--active',
              disabled: false,
              readonly: false
            },
            slots: {
              default: [
                {
                  id: 'v-expansion-panel-header',
                  name: 'v-expansion-panel-header',
                  props: {
                    disableIconRotate: false,
                    expandIcon: '$vuetify.icons.expand',
                    hideActions: false,
                    ripple: false
                  },
                  slots: {
                    default: [{ text: 'Item' }]
                  }
                },
                {
                  id: 'v-expansion-panel-content',
                  name: 'v-expansion-panel-content',
                  props: { eager: false },
                  slots: {
                    default: [
                      {
                        text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit`
                      }
                    ]
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      img: 'v_ex_pan',
      name: '多个展开',
      props: {
        value: [0, 1],
        dark: false,
        light: false,
        multiple: true
      },
      slots: {
        default: [
          {
            id: 'v-expansion-panel',
            name: 'v-expansion-panel',
            props: {
              activeClass: 'v-item--active',
              disabled: false,
              readonly: false
            },
            slots: {
              default: [
                {
                  id: 'v-expansion-panel-header',
                  name: 'v-expansion-panel-header',
                  props: {
                    disableIconRotate: false,
                    expandIcon: '$vuetify.icons.expand',
                    hideActions: false,
                    ripple: false
                  },
                  slots: {
                    default: [{ text: 'Panel 1' }]
                  }
                },
                {
                  id: 'v-expansion-panel-content',
                  name: 'v-expansion-panel-content',
                  props: { eager: false },
                  slots: {
                    default: [{ text: `Some content` }]
                  }
                }
              ]
            }
          },
          {
            id: 'v-expansion-panel',
            name: 'v-expansion-panel',
            props: {
              activeClass: 'v-item--active',
              disabled: false,
              readonly: false
            },
            slots: {
              default: [
                {
                  id: 'v-expansion-panel-header',
                  name: 'v-expansion-panel-header',
                  props: {
                    disableIconRotate: false,
                    expandIcon: '$vuetify.icons.expand',
                    hideActions: false,
                    ripple: false
                  },
                  slots: {
                    default: [{ text: 'Panel 2' }]
                  }
                },
                {
                  id: 'v-expansion-panel-content',
                  name: 'v-expansion-panel-content',
                  props: { eager: false },
                  slots: {
                    default: [{ text: ` content` }]
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