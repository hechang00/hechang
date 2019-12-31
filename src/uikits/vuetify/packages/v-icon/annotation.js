import {
  Color
} from '../../../type';
export default {
  what: {
    id: 'v-icon', 
    name: '图标', 
    grouptype: '基础组件', 
    img: 'dialog_nv',
    link:"https://vuetifyjs.com/zh-Hans/components/icons",
		icon:'',
    props: {
      innerText: {
        default: '', 
        type: null, 
        title: '图标名称(可参照https://materialdesignicons.com/)'
      },
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
      large: {
        default: false, 
        type: Boolean, 
        title: '设置图标为大型（36px）'
      }, 
      left: {
        default: false, 
        type: Boolean, 
        title: '在按钮内部使用时，把图标放置在左侧'
      }, 
      light: {
        default: true, 
        type: Boolean, 
        title: '明亮主题',
      }, 
      right: {
        default: false, 
        type: Boolean, 
        title: '在按钮内部使用时，把图标放置在右侧',
      }, 
      size: {
        default: undefined, 
        type: [
          Number, 
          String
        ],
        title: '尺寸'
      }, 
      small: {
        default: false, 
        type: Boolean, 
        title: '小尺寸'
      }, 
      xLarge: {
        default: false, 
        type: Boolean, 
        title: '设置图标为超大型(40px)'
      }, 
      xSmall: {
        default: false, 
        type: Boolean, 
        title: '设置图标为超小型'
      }, 
      tag: {
        default: 'i', 
        type: String, 
        title: '标签'
      }, 
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
    img: 'v_icon',
    name: '基本用法', 
      props: {
      }, 
      slots: {
				default: [
					{text: 'mdi-anchor'}
				]
			}
    },
    {
    img: 'v_icon2',
    name: '切换颜色', 
      props: {
        color: 'red',
      }, 
      slots: {
        default: [
          {text: 'mdi-anchor'}
        ]
      }
    }
  ]
}
