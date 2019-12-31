import {
	Color
  } from '../../../type';

export default {
  what: {
    id: 'v-sparkline',
    name: '迷你图',
    grouptype: '基础组件',
    img: 'char_zhexian',
    link: 'https://vuetifyjs.com/zh-Hans/components/sparklines',
		icon:'',
    props: {
      color: {
        default: '#E53935',
        type: Color,
        title: '颜色'
      },
      autoDraw: {
        default: false,
        type: Boolean,
        title: '自动绘制'
      },
      autoDrawDuration: {
        default: 2000,
        type: Number,
        title: '自动绘图时间'
      },
      autoDrawEasing: {
        default: 'ease',
        type: String,
        title: '自动绘图缓动'
      },
      autoLineWidth: {
        default: false,
        type: Boolean,
        title: '自动线宽'
      },
      fill: {
        default: false,
        type: Boolean,
        title: '填充'
      },
      gradient: {
        default: undefined,
        type: Array,
        title: '梯度'
      },
      gradientDirection: {
        default: 'top',
        type: String,
        title: '梯度方向'
      },
      height: {
        default: 75,
        type: [String, Number],
        title: '高度'
      },
      labels: {
        default: undefined,
        type: Array,
        title: '标签'
      },
      labelSize: {
        default: 7,
        type: [Number, String],
        title: '标签大小'
      },
      lineWidth: {
        default: 4,
        type: [String, Number],
        title: '线宽'
      },
      padding: {
        default: 8,
        type: [String, Number],
        title: '内边距'
      },
      showLabels: {
        default: false,
        type: Boolean,
        title: '展示标签'
      },
      smooth: {
        default: false,
        type: [Boolean, Number, String],
        title: '光滑'
      },
      type: {
        default: 'trend',
        type: String,
        title: '类型'
      },
      value: {
        default: undefined,
        type: Array,
        title: '值'
      },
      width: {
        default: 300,
        type: [Number, String],
        title: '宽度'
      }
    },
    slots: {
      label: {
        des: '替换默认标签',
        title: '标签插槽',
        components: []
      }
    }
  },
  examples: [
    {
      name: '基础用法',
      img: 'v_sparklines',
      props: {
        style_height: '50px',
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        gradient: ['#f72047', '#ffd200', '#1feaea'],
        padding: 8,
        lineWidth: 2,
        strokeLinecap: 'round',
        gradientDirection: 'top',
        fill: false,
        type: 'trend',
        autoLineWidth: false,
      }
    }
  ]
}