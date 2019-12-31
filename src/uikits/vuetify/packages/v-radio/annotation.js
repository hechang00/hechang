import {
	Color
  } from '../../../type';
export default {
  what: {
    id: 'v-radio',
    name: '单选',
    grouptype: '表单和控制组件',
    img: 'select_radio',
    link: 'https://vuetifyjs.com/zh-Hans/components/selection-controls',
		icon:'',
    props: {
      color: {
        default: undefined,
        type: Color,
        title: '颜色'
      },
      ripple: {
        default: true,
        type: [Boolean, Object],
        title: 'v-ripple'
      },
      activeClass: {
        default: undefined,
        type: String,
        title: '激活状态css类',
        des: '配置当链接处于活动状态时应用的活动CSS类'
      },
      disabled: {
        default: false,
        type: Boolean,
        title: '禁用'
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
      name: {
        default: undefined,
        type: String,
        title: '名称'
      },
      offIcon: {
        default: '$vuetify.icons.radioOff',
        type: String,
        title: '关闭图标'
      },
      onIcon: {
        default: '$vuetify.icons.radioOn',
        type: String,
        title: '打开图标'
      },
      readonly: {
        default: false,
        type: Boolean,
        title: '只读'
      },
      value: {
        default: 1,
        type: null,
        title: '值',
        model: true
      }
    },
    events: {
      blur: {
        des: '失去焦点',
        args: ['value']
      },
      change: {
        des: '被绑定模型的更新',
        args: ['value']
      },
      focus: {
        des: '获得焦点',
        args: ['value']
      }
    },
    slots: {
      label: {
        des: '标签',
        title: '标签',
        components: []
      }
    }
  },
  examples: [
    {
      name: '基础示例',
      props: {
        ripple: true,
        activeClass: 'v-item--active',
        dark: false,
        light: false,
        label: 'Radio 1',
        value: 1
      }
    },
    {
      name: '插槽示例',
      props: {
        ripple: true,
        color: 'indigo',
        activeClass: 'v-item--active',
        dark: false,
        light: false,
        label: `I'm a radio button`
      },
      slots: {
        label: [
          {
            id: 'jm-text',
            name: 'jm-text',
            props: {
              value: 'Your favourite search engine.'
            }
          }
        ]
      }
    }
  ]
}