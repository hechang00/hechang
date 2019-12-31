import { Color } from '../../../type'
export default {
  what: {
    id: 'v-radio-group',
    name: '单选组',
    grouptype: '表单和控制组件',
    img: 'radio_group',
    link: 'https://vuetifyjs.com/zh-Hans/components/selection-controls',
		icon:'',
    props: {
      valueComparator: {
        default: undefined,
        type: Function,
        title: '自定义值比较器功能函数'
      },
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
				des:"配置当链接处于活动状态时应用的活动CSS类"
      },
      mandatory: {
        default: false,
        type: Boolean,
        title: 'mandatory'
      },
      max: {
        default: undefined,
        type: [Number, String],
        title: '最大选项数量'
      },
      multiple: {
        default: false,
        type: Boolean,
        title: '多选'
      },
      color: {
        default: undefined,
        type: Color,
        title: '颜色'
      },
      disabled: {
        default: false,
        type: Boolean,
        title: '禁用'
      },
      error: {
        default: false,
        type: Boolean,
        title: '将输入置于手动错误状态'
      },
      errorCount: {
        default: 1,
        type: [Number, String],
        title: '错误数量'
      },
      errorMessages: {
        default: undefined,
        type: [String, Array],
        title: '将输入置于错误状态并传递自定义错误消息'
      },
      messages: {
        default: undefined,
        type: [String, Array],
        title: '消息/消息列表'
      },
      readonly: {
        default: false,
        type: Boolean,
        title: '只读'
      },
      rules: {
        default: undefined,
        type: Array,
        title: '规则函数列表'
      },
      success: {
        default: false,
        type: Boolean,
        title: '成功'
      },
      successMessages: {
        default: undefined,
        type: [String, Array],
        title: '成功消息'
      },
      validateOnBlur: {
        default: false,
        type: Boolean,
        title: '延迟验证直到模糊事件'
      },
      appendIcon: {
        default: undefined,
        type: String,
        title: '附加图标'
      },
      backgroundColor: {
        default: '',
        type: Color,
        title: '背景颜色'
      },
      height: {
        default: 'auto',
        type: [Number, String],
        title: '高度'
      },
      hideDetails: {
        default: false,
        type: Boolean,
        title: '隐藏细节'
      },
      hint: {
        default: undefined,
        type: String,
        title: '提示'
      },
      id: {
        default: undefined,
        type: String,
        title: 'id'
      },
      label: {
        default: undefined,
        type: String,
        title: '标签'
      },
      loading: {
        default: false,
        type: Boolean,
        title: '加载中'
      },
      persistentHint: {
        default: false,
        type: Boolean,
        title: '提示保持可见'
      },
      prependIcon: {
        default: undefined,
        type: String,
        title: '前置图标'
      },
      // column: {
      //   default: true,
      //   type: Boolean,
      //   title: '纵向展示'
      // },
      name: {
        default: undefined,
        type: String,
        title: '组件名字'
      },
      // row: {
      //   default: false,
      //   type: Boolean,
      //   title: '横向展示'
      // }
    },
    events: {
      'update:error': {
        des: 'update:error',
        args: ['value']
      },
      change: {
        des: '被绑定模型的更新',
        args: ['value']
      }
    },
    slots: {
      default: {
        des: '默认插槽',
        title: '默认插槽',
        components: []
      },
      append: {
        des: '附加',
        title: '附加',
        components: []
      },
      label: {
        des: '标签',
        title: '标签',
        components: []
      },
      prepend: {
        des: '前置',
        title: '前置',
        components: []
      }
    }
  },
  examples: [
    {
      img: 'v_radio_group',
      name: '横向示例',
      props: {},
      slots: {
        default: [
          {
            id: 'v-radio',
            name: 'v-radio',
            props: {
              label: 'Option 1',
              value: 1
            }
          },
          {
            id: 'v-radio',
            name: 'v-radio',
            props: {
              label: 'Option 2',
              value: 2
            }
          }
        ]
      }
    },
    {
      img: 'v_radio_group',
      name: '只读示例',
      props: {
        readonly: 'readonly'
      },
      slots: {
        default: [
          {
            id: 'v-radio',
            name: 'v-radio',
            props: {
              label: 'Option 1',
              value: 1
            }
          },
          {
            id: 'v-radio',
            name: 'v-radio',
            props: {
              label: 'Option 2',
              value: 2
            }
          }
        ]
      }
    },
    {
      img: 'v_radio_group',
      name: '纵向示例',
      props: {
        row: true
      },
      slots: {
        default: [
          {
            id: 'jm-layout',
            props: {
              justify: 'column',
              style_marginLeft: "0px",
              style_marginRight: "0px",
              style_marginTop: "0px",
              style_marginBottom: "0px"
            },
            slots: {
              default: [
                {
                  id: 'v-radio',
                  name: 'v-radio',
                  props: {
                    label: 'Option 1',
                    value: 1
                  }
                },
                {
                  id: 'v-radio',
                  name: 'v-radio',
                  props: {
                    label: 'Option 2',
                    value: 2
                  }
                }
              ]
            }
          }
        ]
      }
    },
    {
      img: 'v_radio_group',
      name: '动态单选框',
      props: {
        column: true
      },
      slots: {
        default: [
          {
            id: 'jm-vfor',
            props: {
              forData: [{}, {}, {}]
            },
            slots: {
              default: [
                {
                  id: 'v-radio',
                  name: 'v-radio',
                  props: {
                    label: 'Option 1',
                    value: 1
                  }
                },
                {
                  id: 'v-radio',
                  name: 'v-radio',
                  props: {
                    label: 'Option 2',
                    value: 2
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
