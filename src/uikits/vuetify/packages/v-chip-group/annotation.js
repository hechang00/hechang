import {
	Color
} from '../../../type';
export default {
  what: {
    id: 'v-chip-group',
    name: '纸片组',
    grouptype: '组',
    img: 'v_chip',
    link: 'https://vuetifyjs.com/zh-Hans/components/chip-groups',
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
      activeClass: {
        default: 'v-slide-item--active',
        type: String,
        title: '激活状态css类',
				des:"配置当链接处于活动状态时应用的活动CSS类"
      },
      mandatory: {
        default: false,
        type: Boolean,
        title: '强制性'
      },
      max: {
        default: undefined,
        type: [Number, String],
        title: '最大值'
      },
      multiple: {
        default: false,
        type: Boolean,
        title: '多项'
      },
      centerActive: {
        default: false,
        type: Boolean,
        title: '中心激活'
      },
      nextIcon: {
        default: '$vuetify.icons.next',
        type: String,
        title: '下一个icon'
      },
      mobileBreakPoint: {
        default: 1264,
        type: [Number, String],
        title: '移动断点'
      },
      prevIcon: {
        default: '$vuetify.icons.prev',
        type: String,
        title: '前一个icon'
      },
      showArrows: {
        default: false,
        type: Boolean,
        title: '展示箭头'
      },
      color: {
        default: undefined,
        type: Color,
        title: '颜色'
      },
      column: {
        default: false,
        type: Boolean,
        title: '栏'
      }
    },
    events: {},
    slots: {
      default: {
        des: '描述插槽',
        title: '默认',
        components: []
      }
    }
  },
  examples: [
    {
      name: '基本用法',
      img: 'v_chip_group1',
      props: {
        multiple: true,
        column: true,
        activeClass: 'primary--text',
        style_height: '100px',
        style_width: '100%'
      },
      slots: {
        default: [
          {
            id: 'v-chip',
            name: 'v-chip',
            props: {
              active: true
            },
            slots: {
              default: [{ text: 'aaa' }]
            }
          },
          {
            id: 'v-chip',
            name: 'v-chip',
            props: {
              active: true
            },
            slots: {
              default: [{ text: 'bbb' }]
            }
          },
          {
            id: 'v-chip',
            name: 'v-chip',
            props: {
              active: true
            },
            slots: {
              default: [{ text: 'ccc' }]
            }
          }
        ]
      }
    },
    {
      img: 'v_chip_group2',
      name: '单行显示',
      props: { column: true, style_height: '100px', style_width: '100%' }
    },
    {
      img: 'v_chip_group2',
      name: '水平滚动',
      props: { mandatory: true, style_height: '100px', style_width: '100%' }
    }
  ]
}