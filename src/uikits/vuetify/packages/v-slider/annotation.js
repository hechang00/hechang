import { Color } from '../../../type'
export default {
  what: {
    id: 'v-slider',
    name: '滑动条',
    grouptype: '组',
    img: 'base_slide',
    link: 'https://vuetifyjs.com/zh-Hans/components/sliders',
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
        type: [Number, String],
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
        default: undefined,
        type: String,
        title: '前置图标'
      },
      loaderHeight: {
        default: 2,
        type: [Number, String],
        title: '装载高度'
      },
      inverseLabel: {
        default: false,
        type: Boolean,
        title: '逆标签'
      },
      max: {
        default: 100,
        type: [Number, String],
        title: '最大值'
      },
      min: {
        default: 0,
        type: [Number, String],
        title: '最小值'
      },
      step: {
        default: 1,
        type: [Number, String],
        title: '步数'
      },
      thumbColor: {
        default: undefined,
        type: Color,
        title: '拇指颜色'
      },
      thumbLabel: {
        default: undefined,
        type: [Boolean, String],
        title: '拇指标签'
      },
      thumbSize: {
        default: 32,
        type: [Number, String],
        title: '拇指尺寸'
      },
      tickLabels: {
        default: undefined,
        type: Array,
        title: '刻度标签'
      },
      ticks: {
        default: false,
        type: [Boolean, String],
        title: '刻度'
      },
      tickSize: {
        default: 2,
        type: [Number, String],
        title: '刻度大小'
      },
      trackColor: {
        default: undefined,
        type: Color,
        title: '轨道颜色'
      },
      trackFillColor: {
        default: undefined,
        type: Color,
        title: '轨道填充颜色'
      },
      vertical: {
        default: false,
        type: Boolean,
        title: '垂直'
      }
    },
    events: {
      eventName: {
        des: '事件名称',
        args: ['p1']
      },
      click: {
        des: '点击事件',
        args: ['p1']
      },
      mousedown: {
        des: '鼠标按下事件',
        args: ['p1']
      },
      mouseup: {
        des: '鼠标弹上事件',
        args: ['p1']
      },
      blur: {
        des: 'blur',
        args: ['value']
      },
      change: {
        des: 'change',
        args: ['value']
      },
      'click:append': {
        des: 'click:append',
        args: ['event']
      },
      'click:prepend': {
        des: 'click:prepend',
        args: ['event']
      },
      end: {
        des: 'end',
        args: ['value']
      },
      focus: {
        des: 'focus',
        args: ['value']
      },
      input: {
        des: 'input',
        args: ['value']
      },
      start: {
        des: 'start',
        args: ['value']
      },
      'update:error': {
        des: 'update:error',
        args: ['value']
      }
    },
    slots: {
      label: {
        des: '替换默认标签',
        title: '标签插槽',
        components: []
      },
      append: {
        des: '替换默认标签',
        title: 'append插槽',
        components: []
      },
      prepend: {
        des: '替换默认标签',
        title: 'prepend插槽',
        components: []
      },
      progress: {
        des: '自定义进度线的插槽（loading属性不等于布尔值False时显示)',
        title: 'progress插槽',
        components: []
      },
      'thumb-label': {
        tdesitle: '替换默认标签',
        title: 'thumb-label插槽',
        components: [],
        hasProps: true
      }
    }
  },
  examples: [
    {
      name: '基础示例',
      props: {
        label: 'Volume',
        style_flex: 1
      }
    }
  ]
}
