import { Color } from '../../../type'
export default {
  what: {
    id: 'v-range-slider',
    name: '分段滑动条',
    link: 'https://vuetifyjs.com/zh-Hans/components/sliders',
    grouptype: '组',
    img: 'base_slide',
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
        default: [0, 0],
        type: Array,
        title: '值'
      },
      appendIcon: {
        default: undefined,
        type: String,
        title: '附加图标'
      },
      backgroundColor: {
        default: '',
        type: String,
        title: '背景颜色'
      },
      dense: {
        default: false,
        type: Boolean,
        title: '密集的'
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
        title: '强制提示可见'
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
        title: '最大'
      },
      min: {
        default: 0,
        type: [Number, String],
        title: '最小'
      },
      step: {
        default: 1,
        type: [Number, String],
        title: '一步'
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
        title: '刻度尺寸'
      },
      trackColor: {
        default: undefined,
        type: Color,
        title: '轨道颜色'
      },
      trackFillColor: {
        default: undefined,
        type: String,
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
        des: 'eventName',
        args: ['p1']
      },
      click: {
        des: 'click',
        args: ['event']
      },
      mousedown: {
        des: 'mousedown',
        args: ['event']
      },
      mouseup: {
        des: 'mouseup',
        args: ['event']
      },
      focus: {
        des: 'focus',
        args: ['Value']
      },
      blur: {
        des: 'blur',
        args: ['value']
      },
      start: {
        des: 'start',
        args: ['value']
      },
      end: {
        des: 'end',
        args: ['value']
      },
      input: {
        des: 'input',
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
        des: '替换默认标签',
        title: 'thumb-label插槽',
        components: [],
        hasProps: true
      }
    }
  },
  examples: [
    {
      name: '基础示例',
      img:"v_slidepoint1",
      props: {
        tickLabels: ['Winter', 'Spring', 'Summer', 'Fall'],
        value: [0, 1],
        min: 0,
        max: 3,
        ticks: 'always',
        tickSize: 4,
        style_flex: 1
      }
    },
    {
      img:"v_slidepoint1",
      name: '插槽示例',
      props: {
        tickLabels: ['Winter', 'Spring', 'Summer', 'Fall'],
        value: [0, 1],
        min: 0,
        max: 3,
        ticks: 'always',
        tickSize: 4,
        style_flex: 1
      },
      slots: {
        'thumb-label': [
          {
            id: 'v-icon',
            props: {
              dark: true,
              style_marginLeft: '0px',
              style_marginRight: '0px',
              style_marginTop: '0px',
              style_marginBottom: '0px'
            }
          }
        ]
      }
    }
  ]
}
