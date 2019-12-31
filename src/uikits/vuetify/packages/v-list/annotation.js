import {Color} from '../../../type';
export default {
  what: {
    id: 'v-list',
    name: '列表',
    link: 'https://vuetifyjs.com/zh-Hans/components/lists',
    grouptype: '表格和列表',
    img: 'list_content',
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
        default: 'div',
        type: String,
        title: '标签'
      },
      tile: {
        default: true,
        type: Boolean,
        title: '标题'
      },
      dense: {
        default: false,
        type: Boolean,
        title: '密集'
      },
      disabled: {
        default: false,
        type: Boolean,
        title: '禁用'
      },
      expand: {
        default: false,
        type: Boolean,
        title: '增强'
      },
      flat: {
        default: false,
        type: Boolean,
        title: '平面'
      },
      nav: {
        default: false,
        type: Boolean,
        title: '导航'
      },
      rounded: {
        default: false,
        type: Boolean,
        title: '圆角'
      },
      shaped: {
        default: false,
        type: Boolean,
        title: '边框半径'
      },
      subheader: {
        default: false,
        type: Boolean,
        des: '子标题头'
      },
      threeLine: {
        default: false,
        type: Boolean,
        title: '三行'
      },
      twoLine: {
        default: false,
        type: Boolean,
        title: '两行'
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
      img: 'v_list1',
      name: '基础用法',
      props: {
        mandatory: true
      },
      slots: {
        default: [
          {
            id: 'v-list-item-group',
            name: 'v-list-item-group',
            slots: {
              default: [
                {
                  id: 'v-list-item',
                  name: 'v-list-item',
                  props: {},
                  slots: {
                    default: [
                      {
                        id: 'v-list-item-content',
                        props: {
                          style_flex: 1
                        },
                        slots: {
                          default: [
                            {
                              id: 'v-list-item-title',
                              props: {},
                              slots: {
                                default: [{ text: 'Single-line item' }]
                              }
                            }
                          ]
                        }
                      }
                    ]
                  }
                },
                {
                  id: 'v-list-item',
                  name: 'v-list-item',
                  props: {},
                  slots: {
                    default: [
                      {
                        id: 'v-list-item-content',
                        props: {
                          style_flex: 1
                        },
                        slots: {
                          default: [
                            {
                              id: 'v-list-item-title',
                              props: {},
                              slots: {
                                default: [{ text: 'Two-line item' }]
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
          }
        ]
      }
    },
    {
      img: 'v_list1',
      name: 'v-for用法',
      props: {
        mandatory: true
      },
      slots: {
        default: [
          {
            id: 'v-list-item-group',
            props: {},
            slots: {
              default: [
                {
                  id: 'jm-vfor',
                  props: {
                    editMode: false,
                    forData: [{}, {}, {}]
                  },
                  slots: {
                    default: [
                      {
                        id: 'v-list-item',
                        props: {},
                        slots: {
                          default: [
                            {
                              id: 'v-list-item-content',
                              props: {
                                style_flex: 1
                              },
                              slots: {
                                default: [
                                  {
                                    id: 'v-list-item-title',
                                    props: {
                                      innerText: 'title'
                                    }
                                  },
                                  {
                                    id: 'v-list-item-subtitle',
                                    props: {
                                      innerText: 'sub-tielt'
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
                }
              ]
            }
          }
        ]
      }
    }
  ]
}