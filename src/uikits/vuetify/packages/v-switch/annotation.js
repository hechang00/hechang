import {
	Color
  } from '../../../type';
export default {
  what: {
    id: 'v-switch',
    name: '开关',
    grouptype: '表单和控制组件',
    img: 'base_switch',
    link: 'https://vuetifyjs.com/zh-Hans/components/selection-controls',
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
        title: '错误提示消息'
      },
      messages: {
        default: undefined,
        type: [String, Array],
        title: '消息'
      },
      readonly: {
        default: false,
        type: Boolean,
        title: '只读'
      },
      rules: {
        default: undefined,
        type: Array,
        title: '接受将输入值作为参数的函数数组',
        des:
          '接受将输入值作为参数的函数数组，并返回true/false或带错误消息的字符串'
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
        title: '模糊验证'
      },
      value: {
        default: '',
        type: null,
        title: '设置选择控件组件的值'
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
        title: '加载中'
      },
      persistentHint: {
        default: false,
        type: Boolean,
        title: '保持提示一直可见'
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
        title: '应用自定义值比较器功能函数'
      },
      inputValue: {
        default: false,
        type: null,
        title: 'v-model绑定值',
        model: true
      },
      falseValue: {
        default: false,
        type: null,
        title: '错误值'
      },
      trueValue: {
        default: true,
        type: null,
        title: '正确值'
      },
      multiple: {
        default: false,
        type: Boolean,
        title: '将预期值更改为数组'
      },
      inset: {
        default: false,
        type: Boolean,
        title: '扩大v-switch轨道'
      },
      flat: {
        default: false,
        type: Boolean,
        title: '平面'
      }
    },
    slots: {
      default: {
        des: '默认插槽',
        title: '默认插槽',
        components: []
      },
      append: {
        des: '附加插槽',
        title: '附加插槽',
        components: []
      },
      label: {
        des: '标签插槽',
        title: '标签插槽',
        components: []
      },
      prepend: {
        des: '前置插槽',
        title: '前置插槽',
        components: []
      }
    }
  },
  examples: [
    {
      name: '基本用法',
      props: {
        label: 'Switch 1'
      }
    },
    {
      name: '禁用开关',
      props: {
        disabled: true
      }
    },
    {
      name: '警告开关',
      props: {
        loading: 'warning'
      }
    }
  ]
}