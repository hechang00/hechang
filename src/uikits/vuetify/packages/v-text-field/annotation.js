import { Color } from '../../../type'
export default {
  what: {
    id: 'v-text-field',
    name: '文本框',
    grouptype: '表单和控制组件',
    img: 'text_field',
    link: 'https://vuetifyjs.com/zh-Hans/components/text-fields',
		icon:'',
    props: {
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
      disabled: {
        default: false,
        type: Boolean,
        title: '禁用'
      },
      error: {
        default: false,
        type: Boolean,
        title: '错误'
      },
      errorCount: {
        default: 1,
        type: [Number, String],
        title: '错误数量'
      },
      errorMessages: {
        default: undefined,
        type: [String, Array],
        title: '错误信息'
      },
      messages: {
        default: undefined,
        type: [String, Array],
        title: '信息'
      },
      readonly: {
        default: false,
        type: Boolean,
        title: '只读'
      },
      rules: {
        default: undefined,
        type: Array,
        title: '规则'
      },
      success: {
        default: false,
        type: Boolean,
        title: '成功'
      },
      successMessages: {
        default: undefined,
        type: [String, Array],
        title: '成功信息'
      },
      validateOnBlur: {
        default: false,
        type: Boolean,
        title: '模糊验证'
      },
      value: {
        default: '',
        type: null,
        title: '值',
        model: true
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
        default: undefined,
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
        type: [Boolean, String],
        title: '加载'
      },
      persistentHint: {
        default: false,
        type: Boolean,
        title: 'persistentHint'
      },
      prependIcon: {
        default: undefined,
        type: String,
        title: '前置图标'
      },
      loaderHeight: {
        default: 2,
        type: [Number, String],
        title: '装载高度'
      },
      appendOuterIcon: {
        default: undefined,
        type: String,
        title: '附加外部图标'
      },
      autofocus: {
        default: false,
        type: Boolean,
        title: '自动聚焦'
      },
      clearable: {
        default: false,
        type: Boolean,
        title: '可清除'
      },
      clearIcon: {
        default: '$vuetify.icons.clear',
        type: String,
        title: '清除icon'
      },
      counter: {
        default: undefined,
        type: [Boolean, Number, String],
        title: '计数'
      },
      filled: {
        default: false,
        type: Boolean,
        title: '填充'
      },
      flat: {
        default: false,
        type: Boolean,
        title: '平面'
      },
      fullWidth: {
        default: false,
        type: Boolean,
        title: '全屏宽度'
      },
      outlined: {
        default: false,
        type: Boolean,
        title: '外形'
      },
      placeholder: {
        default: undefined,
        type: String,
        title: '替代文字'
      },
      prefix: {
        default: undefined,
        type: String,
        title: '前置'
      },
      prependInnerIcon: {
        default: undefined,
        type: String,
        title: '组件输入前置图标'
      },
      reverse: {
        default: false,
        type: Boolean,
        title: '相反'
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
      singleLine: {
        default: false,
        type: Boolean,
        title: '单行'
      },
      solo: {
        default: false,
        type: Boolean,
        title: '单独'
      },
      soloInverted: {
        default: false,
        type: Boolean,
        title: '倒置',
        des: '减少元素的不透明度，直到聚焦'
      },
      suffix: {
        default: undefined,
        type: String,
        title: '后缀'
      },
      type: {
        default: 'text',
        type: String,
        title: '类型'
      }
    },
    events: {
      eventName: {
        des: 'eventName',
        args: ['p1']
      },
      change: {
        des: '输入变化函数',
        args: ['value']
      },
      blur: {
        des: '失去焦点',
        args: ['value']
      },
      focus: {
        des: '被绑定模型的更新',
        args: ['value']
      },
      input: {
        des: '输入',
        args: ['value']
      },
      keydown: {
        des: '按下键盘键',
        args: ['event']
      }
    },
    slots: {
      default: {
        des: '默认插槽',
        title: '默认',
        components: []
      },
      appendOuter: {
        des: '描述',
        title: 'appendOuter',
        components: []
      },
      label: {
        des: '描替换默认标签',
        title: 'label',
        components: []
      },
      prepend: {
        des: 'Adds an item before input content',
        title: 'prepend',
        components: []
      },
      prependInner: {
        des: 'prependInner',
        title: 'prependInner',
        components: []
      },
      progress: {
        des: '自定义进度线的插槽（loading属性不等于布尔值False时显示)',
        title: '自定义进度线插槽',
        components: []
      }
    }
  },
  examples: [
    {
      img: 'v_text_field1',
      name: '基础示例',
      props: {
        label: 'Regular'
      },
      slots: {}
    },
    {
      img: 'v_text_field2',
      name: '占位示例',
      props: {
        label: 'Regular',
        placeholder: 'Placeholder'
      }
    },
    {
      img: 'v_text_field3',
      name: '背景填充示例',
      props: {
        label: 'filled',
        placeholder: 'Placeholder',
        filled: true
      }
    },
    {
      img: 'v_text_field4',
      name: '边框示例',
      props: {
        label: 'outlined',
        placeholder: 'Placeholder',
        outlined: true
      }
    },
    {
      img: 'v_text_field5',
      name: '圆角示例',
      props: {
        label: 'outlined',
        placeholder: 'Placeholder',
        outlined: true,
        shaped: true
      }
    },
    {
      img: 'v_text_field2',
      name: '禁用示例',
      props: {
        label: 'round',
        placeholder: 'Placeholder',
        disabled: true
      }
    },
    {
      img: 'v_text_field2',
      name: '只读示例',
      props: {
        label: 'readonly',
        placeholder: 'Placeholder',
        readonly: true
      }
    }
  ]
}
 