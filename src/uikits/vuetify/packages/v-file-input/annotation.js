import {Color} from '../../../type';
export default {
  what: {
    id: 'v-file-input',
    name: '文件上传',
    link: 'https://vuetifyjs.com/zh-Hans/components/file-inputs',
    grouptype: '表单和控制组件',
    img: 'base_upload',
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
        title: 'blur事件延迟验证'
      },
      value: {
        default: [],
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
        title: '持续提示'
      },
      prependIcon: {
        default: '$vuetify.icons.file',
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
        default: true,
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
        title: '替代文本'
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
        title: '反方向'
      },
      rounded: {
        default: false,
        type: Boolean,
        title: '圆形'
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
        default: 'file',
        type: String,
        title: '类型'
      },
      chips: {
        default: false,
        type: Boolean,
        title: '纸片'
      },
      counterSizeString: {
        default: '$vuetify.fileInput.counterSize',
        type: String,
        title: '计数器大小的字符串'
      },
      counterString: {
        default: '$vuetify.fileInput.counter',
        type: String,
        title: '计数器的字符串'
      },
      showSize: {
        default: false,
        type: [Boolean, Number],
        title: '显示尺寸'
      },
      smallChips: {
        default: false,
        type: Boolean,
        title: '小纸片'
      },
      truncateLength: {
        default: 22,
        type: [Number, String],
        title: '截短长度'
      }
    },
    slots: {
      selection: {
        des: '选择',
        title: '选择',
        components: []
      }
    },
    events: {
      eventName: {
        des: '事件名称',
        args: ['value']
      },
      blur: {
        des: '失去焦点',
        args: ['event']
      },
      focus: {
        des: '获取焦点',
        args: ['event']
      },
      keydown: {
        des: '鼠标按下事件',
        args: ['event']
      },
      change: {
        des: '更新事件',
        args: ['event']
      }
    }
  },
  examples: [
    {
      name: '基本用法',
      props: {}
    },
    {
      name: '标签形式显示',
      props: {
        multiple: true,
        chips: true
      }
    },
    {
      name: '显示文件大小',
      props: {
        showSize: true
      }
    },
    {
      name: '自定义图标',
      props: {
        prependIcon: 'mdi-camera'
      }
    }
  ]
}