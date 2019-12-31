import {
	Color
  } from '../../../type';

export default {
  what: {
    id: 'v-checkbox',
    name: '复选框',
    grouptype: '表单和控制组件',
    img: 'select_checkbox',
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
        title: '错误状态'
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
        title: '信息列表'
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
        title: '成功信息'
      },
      validateOnBlur: {
        default: false,
        type: Boolean,
        title: 'blur事件延迟验证'
      },
      value: {
        default: [],
        type: Array,
        title: '设置选择控件组件的值',
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
        type: Boolean,
        title: '加载中'
      },
      persistentHint: {
        default: false,
        type: Boolean,
        title: '强制提示可见'
      },
      prependIcon: {
        default: undefined,
        type: String,
        title: '前置图标'
      },
      ripple: {
        default: true,
        type: [Boolean, Object],
        title: '波纹'
      },
      valueComparator: {
        default: undefined,
        type: Function,
        title: '自定义值比较器'
      },
      inputValue: {
        default: false,
        type: null,
        title: '输入值',
        model: true
      },
      falseValue: {
        default: false,
        type: null,
        title: 'false状态的值'
      },
      trueValue: {
        default: true,
        type: null,
        title: 'true状态的值'
      },
      multiple: {
        default: false,
        type: Boolean,
        title: '是否多选'
      },
      indeterminate: {
        default: false,
        type: Boolean,
        title: '是否为不定态'
      },
      indeterminateIcon: {
        default: '$vuetify.icons.checkboxIndeterminate',
        type: String,
        title: '不定态图标'
      },
      offIcon: {
        default: '$vuetify.icons.checkboxOff',
        type: String,
        title: '关图标'
      },
      onIcon: {
        default: '$vuetify.icons.checkboxOn',
        type: String,
        title: '开图标'
      }
    },
    events: {
      'update:indeterminate': {
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
      name: '基础示例',
      props: { label: 'Checkbox 1' }
    },
    {
      name: '禁用示例',
      props: {
        label: 'Checkbox 2',
        disabled: true
      }
    },
    {
      name: '中间示例',
      props: {
        label: 'Checkbox 3',
        indeterminate: true
      }
    },
    {
      name: '颜色示例',
      props: {
        label: 'Checkbox 4',
        color: 'indigo'
      }
    }
  ]
}