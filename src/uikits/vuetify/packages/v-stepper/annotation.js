export default {
  what: {
    id: 'v-stepper',
    name: '步骤条',
    grouptype: '基础组件',
    img: 'step',
    link: 'https://vuetifyjs.com/zh-Hans/components/steppers',
		icon:'',
    props: {
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
      altLabels: {
        default: false,
        type: Boolean,
        title: '将标签置于步骤的下方'
      },
      nonLinear: {
        default: false,
        type: Boolean,
        title: '允许用户跳过任意一步'
      },
      vertical: {
        default: false,
        type: Boolean,
        title: '垂直显示步骤线'
      },
      innerText: {
        default: '',
        type: String,
        des: '内部文本',
        title: '内部文本'
      }
    },
    events: {
      change: {
        des: '被绑定模型的更新',
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
      img: 'v_steppers',
      name: '基础示例',
      props: {
        style_flex: 1,
        innerText: 'steppers示例'
      }
    },
    {
      img: 'v_steppers',
      name: '插槽示例',
      props: {
        style_flex: 1,
        innerText: 'steppers示例'
      },
      slots: {
        default: [
          {
            id: 'v-stepper-header',
            props: {
              innerText: 'step-header内容'
            }
          }
        ]
      }
    }
  ]
}
